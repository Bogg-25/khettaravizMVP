import { useEffect, useState } from 'react'
import type { KhettaraFeature, TimeSeriesDatum, OasisLossDatum, FiltersState } from '../types'
import { loadKhettaras, loadTimeSeries, loadOasisLoss } from '../loaders'
import KpiCards from '../components/KpiCards'
import KhettaraMap from '../components/KhettaraMap'
import FiltersPanel from '../components/FiltersPanel'
import Legend from '../components/Legend'
import TimeSeriesChart from '../components/TimeSeriesChart'
import OasisLossChart from '../components/OasisLossChart'

export default function Dashboard() {
  const [features, setFeatures] = useState<KhettaraFeature[]>([])
  const [timeSeries, setTimeSeries] = useState<TimeSeriesDatum[]>([])
  const [oasisLoss, setOasisLoss] = useState<OasisLossDatum[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filters, setFilters] = useState<FiltersState>({ status: 'all', search: '' })

  useEffect(() => {
    Promise.all([loadKhettaras(), loadTimeSeries(), loadOasisLoss()])
      .then(([kc, ts, ol]) => {
        setFeatures(kc.features)
        setTimeSeries(ts)
        setOasisLoss(ol)
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center text-gray-500">
        Chargement des données…
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center text-red-600">
        Erreur : {error}
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <h2 className="text-2xl font-bold text-earth-900">Tableau de bord</h2>

      {/* Row 1: KPI cards */}
      <KpiCards features={features} filters={filters} />

      {/* Row 2: map + filters */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <KhettaraMap features={features} filters={filters} />
          <Legend />
        </div>
        <div>
          <FiltersPanel filters={filters} onChange={setFilters} />
        </div>
      </div>

      {/* Row 3: time series chart */}
      <div className="bg-white rounded-lg border p-4">
        <TimeSeriesChart data={timeSeries} />
      </div>

      {/* Row 4: oasis loss chart */}
      <div className="bg-white rounded-lg border p-4">
        <OasisLossChart data={oasisLoss} />
      </div>
    </div>
  )
}
