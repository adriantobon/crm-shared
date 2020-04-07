// Se tendra que cambiar por el de detail
import { ContactsListResponseModel } from './contacts/contactsList.model';
import { CatalogValues } from '../catalog/catalog.model';

class CreatedByModel {
  _id?: string;
  name?: string;
  lastname_1?: string;
  lastname_2?: string;
}

class AccountActivityDetails {
  type: string;
  account: string;
  accountContact: string;
}

class AccountActivity {
  details: AccountActivityDetails;
  user: string;
  date: Date;
}

export class AccountsDetailResponseModel {
  _id: string;
  autoId: number;
  name: string;
  social_name: string;
  rfc: string;
  street: string;
  ext_number: number;
  int_number: number;
  colony: string;
  zip_code: number;
  country: string;
  state: string;
  city: string;
  phones: string[];
  short_name: string;
  client_type: CatalogValues;
  origin: CatalogValues;
  business_unit: CatalogValues;
  business_field: CatalogValues;
  business_field_own: string;
  aaga_front: CatalogValues;
  client_status: CatalogValues;
  created_by: CreatedByModel;
  created_at: Date;
  contacts: ContactsListResponseModel[];
  meetings: any[];
  status: CatalogValues;
  activity: AccountActivity[];
  facebook_url: string;
  instagram_url: string;
  linkedin_url: string;
  linkedin_is_company_type: boolean;
  twitter_url: string;
  webpage_url: string;
}

export class AccountsDetailRequestModel {
  id: string;
}
