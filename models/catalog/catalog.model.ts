class CatalogValues {
  _id: string;
  name: string;
}

class CatalogModels {
  _id: string;
  name: string;
  model_values: CatalogValues[];
}

export class CatalogResponseModel {
  _id: string;
  name: string;
  models: CatalogModels[];
  isLoading?: boolean;
  isLoaded?: boolean;
}

