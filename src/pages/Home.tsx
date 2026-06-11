import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-earth-900 mb-4">
        Visualiser le déclin des khettaras
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Les khettaras — galeries souterraines ancestrales — sont l'artère vitale
        des oasis du Drâa-Tafilalet. Pourtant, elles disparaissent. Ce tableau de
        bord open-access documente leur déclin à travers des données disponibles
        et propose une lecture critique des politiques publiques.
      </p>
      <Link
        to="/dashboard"
        className="inline-block bg-earth-500 hover:bg-earth-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
      >
        Ouvrir le tableau de bord &rarr;
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
        <div className="bg-white rounded-lg border p-6">
          <h3 className="font-semibold text-earth-900 mb-2">📊 Données</h3>
          <p className="text-sm text-gray-600">
            Inventaire, séries temporelles, surfaces oasiennes — des données
            mock structurées pour être remplacées par des données réelles.
          </p>
        </div>
        <div className="bg-white rounded-lg border p-6">
          <h3 className="font-semibold text-earth-900 mb-2">⚖️ Politique</h3>
          <p className="text-sm text-gray-600">
            Analyse des lacunes de la Loi 36-15 sur l'eau vis-à-vis du savoir
            traditionnel et de la gouvernance locale.
          </p>
        </div>
        <div className="bg-white rounded-lg border p-6">
          <h3 className="font-semibold text-earth-900 mb-2">🌍 Impact</h3>
          <p className="text-sm text-gray-600">
            Alignement avec les cibles WBSRCE et ODD — un outil de plaidoyer
            pour la préservation des khettaras.
          </p>
        </div>
      </div>
    </div>
  )
}
