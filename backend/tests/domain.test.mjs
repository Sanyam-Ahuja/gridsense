import test from 'node:test';
import assert from 'node:assert/strict';
import { ingest, injectSpike, seed, updateAnomaly } from '../src/domain.ts';

test('telemetry validates meter identity and records readings',()=>{
  const state=structuredClone(seed);const input={meter_id:'M-ENG-04',timestamp:'2026-11-11T10:30:00Z',active_power_kw:16.8,energy_kwh:419.2,voltage_v:230,current_a:72,power_factor:.95};
  assert.equal(ingest(state,input).accepted,true);assert.equal(state.meters[0].kw,16.8);
  assert.throws(()=>ingest(state,input),{status:409});
  assert.throws(()=>ingest(state,{...input,meter_id:'M-UNKNOWN'}),{status:404});
});

test('synthetic overnight anomaly carries evidence and lifecycle state',()=>{
  const state=structuredClone(seed);const {anomaly,synthetic}=injectSpike(state);assert.equal(synthetic,true);assert.match(anomaly.evidence,/rolling overnight mean/);assert.equal(updateAnomaly(state,anomaly.id,'acknowledged').status,'acknowledged');
});
