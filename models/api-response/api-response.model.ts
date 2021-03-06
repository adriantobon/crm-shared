type ErrorResponse = {
  statusCode: number;
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
  error?: ErrorResponse;
  additionalResponse?: any;
  isLoading?: boolean;
  isLoaded?: boolean;
}