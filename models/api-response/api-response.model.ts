type ErrorResponse = {
  statusCode: string;
  error: string;
  message: string;
}

export type ActionType =
  'myAccountRequest' | 'myAccountResponse' |
  'myAccountUpdateRequest' |
  'myAccountUpdatePasswordRequest' | 'myAccountUpdatePasswordSuccess' | 'myAccountUpdatePasswordError'

export class ApiResponseModel<data> {
  statusCode: number;
  message: string;
  response: data;
  actionType?: ActionType;
  error?: ErrorResponse;
  additionalResponse?: any;
  isLoading?: boolean;
  isLoaded?: boolean;
}