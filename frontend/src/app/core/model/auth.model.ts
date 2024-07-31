export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  isUserLoaded: boolean;
  error: string | null;
}

export interface AuthResponse {
  token: string;
}
