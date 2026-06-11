export interface KhettaraProperties {
  id: string
  name: string
  status: 'active' | 'inactive' | 'unknown'
  province: string
  oasis: string
  last_observed_year: number
  notes: string
}

export interface KhettaraFeature {
  type: 'Feature'
  properties: KhettaraProperties
  geometry: {
    type: 'Point'
    coordinates: [number, number]
  }
}

export interface KhettaraCollection {
  type: 'FeatureCollection'
  features: KhettaraFeature[]
}

export interface TimeSeriesDatum {
  year: number
  rainfall_mm: number
  groundwater_index: number
  active_khettaras_est: number
}

export interface OasisLossDatum {
  year: number
  oasis_area_km2: number
}

export interface Source {
  name: string
  type: 'report' | 'paper' | 'platform' | 'law' | 'institution'
  link: string
  note: string
}

export interface PolicyGap {
  title: string
  description: string
  why_it_matters: string
}

export interface WbsrceItem {
  letter: string
  title: string
  contribution: string
}

export interface SdgItem {
  code: string
  title: string
  contribution: string
}

export interface ImpactData {
  wbsrce: WbsrceItem[]
  sdgs: SdgItem[]
}

export interface FiltersState {
  status: string
  search: string
}
