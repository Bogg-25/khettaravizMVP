import type { FiltersState } from '../types'

interface Props {
  filters: FiltersState
  onChange: (f: FiltersState) => void
}

export default function FiltersPanel({ filters, onChange }: Props) {
  return (
    <div className="bg-white rounded-lg border p-4 space-y-4">
      <h3 className="font-semibold text-sm text-gray-700">Filtres</h3>

      <div>
        <label className="block text-xs text-gray-500 mb-1">Statut</label>
        <select
          className="w-full border rounded px-2 py-1.5 text-sm"
          value={filters.status}
          onChange={(e) => onChange({ ...filters, status: e.target.value })}
        >
          <option value="all">Tous</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="unknown">Inconnue</option>
        </select>
      </div>

      <div>
        <label className="block text-xs text-gray-500 mb-1">
          Recherche (oasis, province, nom)
        </label>
        <input
          type="text"
          className="w-full border rounded px-2 py-1.5 text-sm"
          placeholder="Ex: Skoura, Zagora..."
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
        />
      </div>
    </div>
  )
}
