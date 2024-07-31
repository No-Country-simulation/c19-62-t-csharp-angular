export interface UserEditRequest {
  [key: string]: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
