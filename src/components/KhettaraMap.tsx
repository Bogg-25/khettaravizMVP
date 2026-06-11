import { useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import type { KhettaraFeature } from '../types'

interface Props {
  features: KhettaraFeature[]
  filters: { status: string; search: string }
}

function iconForStatus(status: string): L.DivIcon {
  const color =
    status === 'active' ? '#22c55e' : status === 'inactive' ? '#ef4444' : '#eab308'
  return L.divIcon({
    className: 'rounded-full border-2 border-white shadow-md',
    html: `<div style="width:12px;height:12px;border-radius:50%;background:${color};"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  })
}

export default function KhettaraMap({ features, filters }: Props) {
  const filtered = useMemo(() => {
    return features.filter((f) => {
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
  }, [features, filters])

  const center: [number, number] = [31.0, -5.5]

  return (
    <div className="h-[420px] w-full rounded-lg overflow-hidden border">
      <MapContainer
        center={center}
        zoom={7}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filtered.map((f) => (
          <Marker
            key={f.properties.id}
            position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}
            icon={iconForStatus(f.properties.status)}
          >
            <Popup>
              <div className="text-sm space-y-1">
                <p className="font-semibold">{f.properties.name}</p>
                <p>
                  Statut :{' '}
                  <span
                    className={
                      f.properties.status === 'active'
                        ? 'text-green-600'
                        : f.properties.status === 'inactive'
                        ? 'text-red-600'
                        : 'text-yellow-600'
                    }
                  >
                    {f.properties.status === 'active'
                      ? 'Active'
                      : f.properties.status === 'inactive'
                      ? 'Inactive'
                      : 'Inconnue'}
                  </span>
                </p>
                <p>Province : {f.properties.province}</p>
                <p>Oasis : {f.properties.oasis}</p>
                <p>Dernière observation : {f.properties.last_observed_year}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
