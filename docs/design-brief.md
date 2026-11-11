# GridSense design brief

- **Product mechanism:** a schematic campus and meter-level readings connect aggregate consumption to an anomaly's measured value and historical baseline.
- **Audience / task:** facility managers compare buildings, spot abnormal loads, and acknowledge an evidence-backed investigation.
- **Surface / mode:** campus energy overview and anomaly investigation; Operate.
- **Visual world:** light industrial instrumentation. Warm chalk canvas, graphite labels, restrained green efficiency, amber deviation, red only for critical status. Clear scale and unit labels; schematic geometry rather than fabricated map coordinates.
- **Navigation:** Overview, Buildings, Meters, Anomalies, Forecast, Reports.
- **First viewport:** campus load profile occupies the main area, an honest labeled building schematic sits beside it, and a compact live meter strip anchors the bottom.
- **Primary interactions:** choose building; change time period; select meter; view reading evidence; acknowledge anomaly; inject synthetic overnight spike through API.
- **Tokens:** canvas #f3f3ed, surface #fff, graphite #202925, muted #66726b, line #d8ddd5, green #477a5b, amber #ad6b18, red #b74638; IBM Plex Sans, mono for meter readings; 12px grid.
- **Responsive:** building map becomes a selectable list and charts stack at narrow widths.
- **States:** simulation badge; real-unit labels kW/kWh; empty date range; unavailable meter; API error state.
