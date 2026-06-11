import Plot from 'react-plotly.js'
import type { TimeSeriesDatum } from '../types'

interface Props {
  data: TimeSeriesDatum[]
}

export default function TimeSeriesChart({ data }: Props) {
  if (!data.length) {
    return <p className="text-gray-500 italic">Chargement des données…</p>
  }

  const years = data.map((d) => d.year)

  return (
    <Plot
      data={[
        {
          name: 'Pluie (mm)',
          x: years,
          y: data.map((d) => d.rainfall_mm),
          type: 'scatter',
          mode: 'lines+markers',
          yaxis: 'y',
          marker: { color: '#2563eb' },
          line: { shape: 'spline' },
        },
        {
          name: 'Indice nappe phréatique',
          x: years,
          y: data.map((d) => d.groundwater_index),
          type: 'scatter',
          mode: 'lines+markers',
          yaxis: 'y2',
          marker: { color: '#8B5CF6' },
          line: { shape: 'spline', dash: 'dot' },
        },
        {
          name: 'Khettaras actives (est.)',
          x: years,
          y: data.map((d) => d.active_khettaras_est),
          type: 'scatter',
          mode: 'lines+markers',
          yaxis: 'y3',
          marker: { color: '#10b981' },
          line: { shape: 'spline', dash: 'dash' },
        },
      ]}
      layout={{
        title: { text: 'Pluviométrie · Nappe phréatique · Khettaras actives' },
        autosize: true,
        height: 350,
        margin: { t: 40, r: 20, b: 40, l: 50 },
        legend: { orientation: 'h', y: 1.12 },
        yaxis: { title: { text: 'Pluie (mm)' }, side: 'left', color: '#2563eb' },
        yaxis2: {
          title: { text: 'Indice (0–100)' },
          overlaying: 'y',
          side: 'right',
          color: '#8B5CF6',
        },
        yaxis3: {
          title: { text: 'Khettaras' },
          overlaying: 'y',
          side: 'right',
          position: 0.95,
          color: '#10b981',
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
      }}
      config={{ responsive: true, displayModeBar: false }}
      className="w-full"
    />
  )
}
