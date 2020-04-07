export class ContactsListResponseModel {
  _id: string;
  short_name: string;
  name: string;
  lastname_1: string;
  lastname_2: string;
  position: string;
  email: string;
  phone: string;
}

export class ContactsListRequestModel {
  name?: string;
  page?: string;
  limit?: string;
}