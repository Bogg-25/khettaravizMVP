const items = [
  { label: 'Active', color: 'bg-green-500' },
  { label: 'Inactive', color: 'bg-red-500' },
  { label: 'Inconnue', color: 'bg-yellow-500' },
]

export default function Legend() {
  return (
    <div className="flex gap-4 text-xs text-gray-600 mt-2">
      {items.map((i) => (
        <span key={i.label} className="flex items-center gap-1">
          <span className={`w-3 h-3 rounded-full ${i.color}`} />
          {i.label}
        </span>
      ))}
    </div>
  )
}
