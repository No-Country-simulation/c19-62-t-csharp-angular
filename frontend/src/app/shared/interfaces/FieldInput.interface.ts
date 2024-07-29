export interface FieldInput {
  name: string;
  type: 'text' | 'number' | 'email' | 'password';
  control: string;
  placeholder?: string;
}
