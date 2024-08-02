export interface BasicButtonConfig {
  text: string;
  icon?: string;
  label?: string;
  type?: TypeButton;
  size?: SizeButton;
}

export type DesignButton = 'common' | 'selector' | 'large' | 'light' | 'warn';
export type TypeButton = 'button' | 'submit' | 'reset';
export type SizeButton = 'base' | 'lg' | 'xl';
