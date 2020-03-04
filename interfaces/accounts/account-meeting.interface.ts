import { AccountContactInterface } from './account-contact.interface';
import { AccountInterface } from './account.interface';

interface UsersInvitedInterface {
  internal_users: any[];
  internal_contacts: any[];
  external: any[];
}

export interface AccountContactMeetingInterface {
  accountId: AccountInterface;
  contactId: AccountContactInterface;
  meeting_date: Date;
  status: string;
  meeting_subject: string;
  meeting_time: string;
  meeting_place: string;
  meeting_requirement: string;
  meeting_result: string;
  meeting_notes: string;
  created_by: string;
  created_at: Date;
  users_invited: UsersInvitedInterface;
}
