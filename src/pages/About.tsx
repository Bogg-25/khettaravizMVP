export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <h2 className="text-2xl font-bold text-earth-900">À propos</h2>

      <section className="bg-white rounded-lg border p-6">
        <h3 className="font-semibold text-lg mb-2">Projet</h3>
        <p className="text-gray-700">
          <strong>KhettaraViz</strong> est un prototype MVP (Minimum Viable
          Product) développé dans le cadre du <strong>Water Bodies, Societies
          Resilience and Cultural Evolution (WBSRCE)</strong> hackathon. Il vise à
          créer un outil de visualisation open-access pour documenter le déclin
          des khettaras dans la région du Drâa-Tafilalet au Maroc.
        </p>
      </section>

      <section className="bg-white rounded-lg border p-6">
        <h3 className="font-semibold text-lg mb-2">Données</h3>
        <p className="text-gray-700">
          Les données utilisées dans ce prototype sont des <strong>données
          mock</strong> (simulées) basées sur des ordres de grandeur publiés dans
          la littérature scientifique et les rapports institutionnels.
          L'architecture du projet est conçue pour faciliter le remplacement de
          ces données mock par des données réelles issues des sources listées dans
          la page Données.
        </p>
      </section>

      <section className="bg-white rounded-lg border p-6">
        <h3 className="font-semibold text-lg mb-2">Développement</h3>
        <p className="text-gray-700">Stack technique :</p>
        <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
          <li>Vite + React + TypeScript</li>
          <li>TailwindCSS pour le style</li>
          <li>Leaflet + OpenStreetMap pour la carte</li>
          <li>Plotly pour les graphiques</li>
          <li>Données statiques depuis /public/data</li>
        </ul>
      </section>

      <section className="bg-white rounded-lg border p-6">
        <h3 className="font-semibold text-lg mb-2">Licence</h3>
        <p className="text-gray-700 text-sm">
          Projet open-source. Les données mock et le code sont disponibles pour
          réutilisation et amélioration.
        </p>
      </section>
    </div>
  )
}
