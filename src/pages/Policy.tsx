import { useEffect, useState } from 'react'
import type { PolicyGap } from '../types'
import { loadPolicyGaps } from '../loaders'

export default function Policy() {
  const [gaps, setGaps] = useState<PolicyGap[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadPolicyGaps()
      .then(setGaps)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="max-w-4xl mx-auto px-4 py-12 text-center text-gray-500">Chargement…</div>
  if (error) return <div className="max-w-4xl mx-auto px-4 py-12 text-center text-red-600">Erreur : {error}</div>

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-earth-900 mb-2">
        Lacunes de la Loi 36-15 sur l'eau
      </h2>
      <p className="text-gray-600 mb-8">
        La Loi 36-15 relative à l'eau, promulguée en 2016, modernise le cadre
        juridique de la gestion de l'eau au Maroc. Cependant, elle présente
        plusieurs lacunes concernant la protection des khettaras et des savoirs
        traditionnels associés.
      </p>

      <div className="space-y-4">
        {gaps.map((g) => (
          <div key={g.title} className="bg-white rounded-lg border p-5">
            <h3 className="font-semibold text-earth-900 mb-2">{g.title}</h3>
            <p className="text-sm text-gray-700 mb-2">{g.description}</p>
            <p className="text-sm text-gray-500 italic">
              Pourquoi c'est important : {g.why_it_matters}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
