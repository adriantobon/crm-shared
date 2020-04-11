import { CatalogValues } from '../../catalog/catalog.model'

export class EventsListResponseModel {
  _id: string;
  autoId: number;
  name: string;
  social_name: string;
  short_name: string;
  status: CatalogValues;
}

export class EventsListRequestModel {
  // name?: string;
  // page?: string;
  // limit?: string;
}