import { ErrorModel } from '../error/error.model';

export class AuthRequestModel {
  username: string;
  password: string;
}

class UserModel {
  id: string;
  email: string;
  name: string;
  lastname: string;
  profile_img: string;
  role: string;
  short_name: string;
}

export class AuthResponseModel {
  user: UserModel;
  isLoading?: boolean;
  isLoaded?: boolean;
  error?: ErrorModel;
}