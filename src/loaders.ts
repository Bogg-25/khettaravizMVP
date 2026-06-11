import type {
  KhettaraCollection,
  TimeSeriesDatum,
  OasisLossDatum,
  Source,
  PolicyGap,
  ImpactData,
} from './types'

const BASE = '/khettaraviz/data'

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(path)
  if (!res.ok) {
    throw new Error(`Erreur chargement ${path}: ${res.status} ${res.statusText}`)
  }
  return res.json()
}

export function loadKhettaras(): Promise<KhettaraCollection> {
  return fetchJson<KhettaraCollection>(`${BASE}/khettaras.geojson`)
}

export function loadTimeSeries(): Promise<TimeSeriesDatum[]> {
  return fetchJson<TimeSeriesDatum[]>(`${BASE}/timeseries.json`)
}

export function loadOasisLoss(): Promise<OasisLossDatum[]> {
  return fetchJson<OasisLossDatum[]>(`${BASE}/oasis_loss.json`)
}

export function loadSources(): Promise<Source[]> {
  return fetchJson<Source[]>(`${BASE}/sources.json`)
}

export function loadPolicyGaps(): Promise<PolicyGap[]> {
  return fetchJson<PolicyGap[]>(`${BASE}/policy_gaps.json`)
}

export function loadImpact(): Promise<ImpactData> {
  return fetchJson<ImpactData>(`${BASE}/impact.json`)
}
