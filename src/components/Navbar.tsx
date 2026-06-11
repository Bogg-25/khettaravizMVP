import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/donnees', label: 'Données' },
  { to: '/politique', label: 'Politique (Loi 36-15)' },
  { to: '/impact', label: 'Impact (WBSRCE/ODD)' },
  { to: '/a-propos', label: 'À propos' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="bg-earth-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="font-bold text-lg tracking-tight">
            🌴 KhettaraViz
          </Link>
          <div className="hidden md:flex gap-1">
            {links.map((l) => {
              const active = pathname === l.to || (l.to !== '/' && pathname.startsWith(l.to))
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-3 py-2 rounded text-sm transition-colors ${
                    active
                      ? 'bg-earth-500 text-white'
                      : 'hover:bg-earth-700 text-gray-200'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>
        </div>
        {/* Mobile nav */}
        <div className="flex md:hidden overflow-x-auto gap-1 pb-2">
          {links.map((l) => {
            const active = pathname === l.to || (l.to !== '/' && pathname.startsWith(l.to))
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`shrink-0 px-2 py-1 rounded text-xs ${
                  active ? 'bg-earth-500 text-white' : 'text-gray-300'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
