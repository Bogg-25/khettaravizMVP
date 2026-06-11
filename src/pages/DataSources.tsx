import { useEffect, useState } from 'react'
import type { Source } from '../types'
import { loadSources } from '../loaders'

const typeLabels: Record<string, string> = {
  report: 'Rapport',
  paper: 'Article scientifique',
  platform: 'Plateforme',
  law: 'Texte de loi',
  institution: 'Institution',
}

const typeColors: Record<string, string> = {
  report: 'bg-blue-100 text-blue-800',
  paper: 'bg-purple-100 text-purple-800',
  platform: 'bg-green-100 text-green-800',
  law: 'bg-red-100 text-red-800',
  institution: 'bg-gray-100 text-gray-800',
}

export default function DataSources() {
  const [sources, setSources] = useState<Source[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadSources()
      .then(setSources)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="max-w-4xl mx-auto px-4 py-12 text-center text-gray-500">Chargement…</div>
  if (error) return <div className="max-w-4xl mx-auto px-4 py-12 text-center text-red-600">Erreur : {error}</div>

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-earth-900 mb-6">Sources de données</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-earth-100 text-left">
              <th className="p-3 font-semibold">Source</th>
              <th className="p-3 font-semibold">Type</th>
              <th className="p-3 font-semibold">Note</th>
              <th className="p-3 font-semibold">Lien</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((s) => (
              <tr key={s.name} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{s.name}</td>
                <td className="p-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${typeColors[s.type]}`}
                  >
                    {typeLabels[s.type]}
                  </span>
                </td>
                <td className="p-3 text-gray-600">{s.note}</td>
                <td className="p-3">
                  {s.link ? (
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-water-500 hover:underline"
                    >
                      Lien
                    </a>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Les données mock actuelles seront remplacées par les données réelles
        issues de ces sources dans une version future.
      </p>
    </div>
  )
}
