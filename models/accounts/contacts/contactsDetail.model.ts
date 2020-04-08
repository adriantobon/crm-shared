import { CatalogValues } from '../../catalog/catalog.model';

class CreatedByModel {
  _id: string;
  name: string;
  lastname_1: string;
  lastname_2: string;
}

class AccountIdModel {
  _id: string;
  social_name: string;
  name: string;
  short_name: string;
}

export class ContactsDetailResponseModel {
  _id: string;
  accountId: AccountIdModel;
  title: CatalogValues;
  name: string;
  lastname_1: string;
  lastname_2: string;
  short_name: string;
  position: string;
  email: string;
  phone: string;
  phone_ext: string;
  cellphone: string;
  birth_day: string;
  birth_month: string;
  can_be_emailed: boolean;
  created_by: CreatedByModel;
  meetings: any[];
  type: CatalogValues;
}