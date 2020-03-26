export class ApiResponseModel<data> {
  statusCode: number;
  message: string;
  response: data;
  additionalResponse?: any;
  isLoading?: boolean;
  isLoaded?: boolean;
  error?: any;
}