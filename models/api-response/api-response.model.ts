export type ActionType = 'myAccountRequest' | 'myAccountResponse' |
                  'myAccountUpdateRequest' |
                  'myAccountUpdatePasswordRequest' | 'myAccountUpdatePasswordResponse'

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