interface IFeatures {
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  },
  properties: {
    id?: number;
    name: string;
    address: string;
  }
}

export interface IGeojson {
  type: string;
  features: IFeatures[];
}