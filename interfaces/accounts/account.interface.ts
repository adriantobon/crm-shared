import { AccountContactInterface } from './account-contact.interface';

interface AccountActivityDetails {
  type: string;
  account: string;
  accountContact: string;
}

export interface AccountActivity {
  details: AccountActivityDetails;
  user: string;
  date: Date;
}

export interface AccountInterface {
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
  client_type: string;
  origin: string;
  business_unit: string;
  aaga_front: string;
  client_status: string;
  created_by: any;
  created_at: number;
  contacts: AccountContactInterface[];
  meetings: any[];
  status: any;
  activity: AccountActivity[];
  facebook_url: string;
  instagram_url: string;
  linkedin_url: string;
  linkedin_is_company_type: boolean;
  twitter_url: string;
  webpage_url: string;
  save(): any;
}
