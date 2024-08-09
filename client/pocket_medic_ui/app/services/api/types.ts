export interface SessionResponse {
  user: User;
  access_token: string;
  refresh_token: string;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  is_doctor: boolean;
  is_patient: boolean;
}
