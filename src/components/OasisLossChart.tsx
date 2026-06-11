import Plot from 'react-plotly.js'
import type { OasisLossDatum } from '../types'

interface Props {
  data: OasisLossDatum[]
}

export default function OasisLossChart({ data }: Props) {
  if (!data.length) {
    return <p className="text-gray-500 italic">Chargement des données…</p>
  }

  const start = data[0]
  const end = data[data.length - 1]
  const lossPct =
    start ? Math.round(((start.oasis_area_km2 - end.oasis_area_km2) / start.oasis_area_km2) * 100) : 0

  return (
    <div>
      <Plot
        data={[
          {
            x: data.map((d) => d.year),
            y: data.map((d) => d.oasis_area_km2),
            type: 'scatter',
            mode: 'lines+markers',
            fill: 'tozeroy',
            marker: { color: '#D97706' },
            line: { shape: 'spline', color: '#D97706' },
          },
        ]}
        layout={{
          title: { text: 'Surface oasienne dans le Drâa-Tafilalet (km²)' },
          autosize: true,
          height: 300,
          margin: { t: 35, r: 20, b: 40, l: 50 },
          yaxis: { title: { text: 'km²' } },
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
        }}
        config={{ responsive: true, displayModeBar: false }}
        className="w-full"
      />
      <p className="text-sm text-gray-600 mt-2">
        Entre {start?.year} et {end?.year}, la surface oasienne a diminué
        d'environ <strong>{lossPct}%</strong>, corrélée au déclin des khettaras
        et à la baisse des précipitations.
      </p>
    </div>
  )
}
