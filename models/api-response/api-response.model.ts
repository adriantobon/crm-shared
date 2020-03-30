export type ActionType =
  'myAccountRequest' | 'myAccountResponse' |
  'myAccountUpdateRequest' |
  'myAccountUpdatePasswordRequest' | 'myAccountUpdatePasswordSuccess' | 'myAccountUpdatePasswordError'

export class ApiResponseModel<data> {
  statusCode: number;
  message: string;
  response: data;
  additionalResponse?: any;
  isLoading?: boolean;
  isLoaded?: boolean;
  error?: any;
  actionType?: ActionType;
}