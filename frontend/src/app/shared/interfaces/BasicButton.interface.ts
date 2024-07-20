export interface BasicButtonConfig {
  text: string;
  icon?: string;
  label?: string;
  type?: typeButton;
}

export type DesignButton = 'common' | 'selector' | 'large';
export type typeButton = 'button' | 'submit' | 'reset';
