import { AccountInterface } from '../accounts/account.interface';

export class QuoteModel {
  // Model
  accountId: AccountInterface;
  // Model?
  consultant: string;
  project_name: string;
  antecedent: string;
  overall_objective: string;
  specific_objectives: string;
  // Model
  methodology: string;
  // Model
  status: string;
  application_date: Date;
  end_date: Date;
  client_delivery_date: Date;
  client_response_date: Date;
  approval_date: Date;
  currency: string;
  project_cost: string;
  files: string;
  reminder_date: Date;
  notes: string;
}