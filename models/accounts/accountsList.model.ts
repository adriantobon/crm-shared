export class AccountsListResponseModel {
  _id: string;
  autoId: number;
  name: string;
  social_name: string;
  short_name: string;
  status: any;
}

export class AccountsListRequestModel {
  name?: string;
  page?: string;
  limit?: string;
}