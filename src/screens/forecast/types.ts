// interface for coordinates
export interface Coordinates {
  latitude: number | null
  longitude: number | null
}

// interface for city forecast types
export enum CityForecastTypes {
  Current = 'Current weather',
  Hours = '12 Hours',
}

// interface for coordinates forecast types
export enum CoordinatesForecastTypes {
  Current = 'Current weather',
  Hours = '5 Hours',
  Days = '7 Days',
}
