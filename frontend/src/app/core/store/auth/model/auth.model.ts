export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  isUserLoaded: boolean;
}

export interface AuthResponse {
  token: string;
}
