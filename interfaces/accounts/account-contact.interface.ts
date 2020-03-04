import { AccountContactMeetingInterface } from './account-meeting.interface';

export interface AccountContactInterface {
  id?: string;
  accountId: string;
  title: string;
  name: string;
  lastname_1: string;
  lastname_2: string;
  short_name: string;
  position: string;
  email: string;
  phone: string;
  phone_ext: string;
  cellphone: string;
  birth_date: Date;
  can_be_emailed: boolean;
  created_by: any;
  account: string;
  meetings: AccountContactMeetingInterface[];
  type: string;
}
