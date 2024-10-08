export interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface AuthErrorRegister {
  id: number;
  code: string;
  description: string;
}
