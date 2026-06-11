import { useEffect, useState } from 'react'
import type { ImpactData } from '../types'
import { loadImpact } from '../loaders'

export default function Impact() {
  const [impact, setImpact] = useState<ImpactData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadImpact()
      .then(setImpact)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="max-w-4xl mx-auto px-4 py-12 text-center text-gray-500">Chargement…</div>
  if (error) return <div className="max-w-4xl mx-auto px-4 py-12 text-center text-red-600">Erreur : {error}</div>
  if (!impact) return null

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <h2 className="text-2xl font-bold text-earth-900">
        Alignement WBSRCE & ODD
      </h2>

      {/* WBSRCE section */}
      <section>
        <h3 className="text-lg font-semibold text-earth-900 mb-4">
          Contributions WBSRCE
        </h3>
        <div className="grid gap-4">
          {impact.wbsrce.map((item) => (
            <div key={item.letter} className="bg-white rounded-lg border p-4 flex gap-4 items-start">
              <span className="shrink-0 w-10 h-10 rounded-full bg-earth-500 text-white flex items-center justify-center font-bold text-lg">
                {item.letter}
              </span>
              <div>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.contribution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SDGs section */}
      <section>
        <h3 className="text-lg font-semibold text-earth-900 mb-4">
          Cibles ODD (Objectifs de Développement Durable)
        </h3>
        <div className="flex flex-wrap gap-3">
          {impact.sdgs.map((sdg) => (
            <div
              key={sdg.code}
              className="bg-white rounded-lg border p-4 flex-1 min-w-[200px]"
            >
              <span className="inline-block bg-water-500 text-white text-xs font-bold px-2 py-0.5 rounded mb-2">
                {sdg.code}
              </span>
              <h4 className="font-semibold text-sm text-gray-800 mb-1">
                {sdg.title}
              </h4>
              <p className="text-xs text-gray-600">{sdg.contribution}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
