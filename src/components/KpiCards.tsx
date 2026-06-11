import { useMemo } from 'react'
import type { KhettaraFeature } from '../types'

interface Props {
  features: KhettaraFeature[]
  filters: { status: string; search: string }
}

export default function KpiCards({ features, filters }: Props) {
  const totals = useMemo(() => {
    const filtered = features.filter((f) => {
      const matchStatus =
        !filters.status || filters.status === 'all'
          ? true
          : f.properties.status === filters.status
      const matchSearch =
        !filters.search
          ? true
          : f.properties.oasis.toLowerCase().includes(filters.search.toLowerCase()) ||
            f.properties.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            f.properties.province.toLowerCase().includes(filters.search.toLowerCase())
      return matchStatus && matchSearch
    })

    const total = filtered.length
    const active = filtered.filter((f) => f.properties.status === 'active').length
    const inactive = filtered.filter((f) => f.properties.status === 'inactive').length
    const decline = total > 0 ? Math.round((inactive / total) * 100) : 0

    return { total, active, inactive, decline }
  }, [features, filters])

  const cards = [
    {
      label: 'Khettaras inventoriées',
      value: totals.total,
      color: 'bg-blue-50 border-blue-200',
    },
    {
      label: 'Estimées actives',
      value: totals.active,
      color: 'bg-green-50 border-green-200',
    },
    {
      label: 'Déclin estimé',
      value: `${totals.decline}%`,
      color: 'bg-orange-50 border-orange-200',
    },
    {
      label: 'Perte surface oasis (2005→2025)',
      value: '−39%',
      color: 'bg-red-50 border-red-200',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className={`rounded-lg border p-4 ${c.color} text-center`}
        >
          <p className="text-2xl font-bold text-gray-800">{c.value}</p>
          <p className="text-xs text-gray-600 mt-1">{c.label}</p>
        </div>
      ))}
    </div>
  )
}
