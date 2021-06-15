// interface for coordinates
export interface Coordinates {
  latitude: number | null
  longitude: number | null
}

// interface for city forecast types
export enum CityForecastTypes {
  Current = 'Current weather',
  Days = '5 Hours',
}
