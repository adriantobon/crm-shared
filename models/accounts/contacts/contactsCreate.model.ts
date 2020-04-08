export class ContactsCreateRequestModel {
  created_by: string;
  accountId: string;
  title?: string;
  name: string;
  lastname_1: string;
  lastname_2: string;
  position: string;
  email: string;
  phone: string;
  phone_ext?: string;
  cellphone: string;
  birth_month?: string;
  birth_day?: string;
  can_be_emailed?: boolean;
  type?: string;
}