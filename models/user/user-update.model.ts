class UserScope {
  module?: string;
  canWrite?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
}

class EmergencyContacts {
  full_name?: string;
  phone?: number;
}

class UserItModel {
  computer_id?: string;
  computer_name?: string;
  computer_os_name?: string;
  computer_password?: string;
  processor?: string;
  ram_memory_gb?: number;
  hard_disk_gb?: number;
  computer_brand?: string;
  computer_model?: string;
  computer_serial_number?: string;
  display_brand?: string;
  display_model?: string;
  display_serial_number?: string;
  keyboard_brand?: string;
  keyboard_serial_number?: string;
  mouse_brand?: string;
  mouse_serial_number?: string;
  ip?: string;
  mac_lan?: string;
  mac_wifi?: string;
  mac_address?: string;
  antivirus?: string;
  sophos?: string;
  extension_number?: number;
}

class UserRhModel {
  init_date_temporal?: Date;
  init_date_oficial?: Date;
  date_of_birth?: Date;
  place_of_birth?: string;
  age?: number;
  marital_status?: string;
  nationality?: string;
  address?: string;
  phone?: number;
  cellphone?: number;
  personal_email?: string;
  blood_type?: string;
  allergies?: string;
  hourly_salary?: number;
  daily_salary?: number;
  monthly_salary?: number;
  imss_number?: number;
  education?: string;
  career?: string;
  leaving_date?: Date;
  emergency_contacts?: EmergencyContacts[];
}

export class UserUpdateRequestModel {
  _id: string;
  name?: string;
  lastname_1?: string;
  lastname_2?: string;
  password?: string;
  role?: string;
  scope?: UserScope[];
  department?: string;
  position?: string;
  profile_img?: string;
  is_active?: boolean;
  rh?: UserRhModel;
  it?: UserItModel;
}
