export interface ButtonDefaultType {
  title: string;
  active?: boolean;
  className?: string;
  onClick?: () => void;

  children: JSX.Element | string;
}

export interface ButtonLinkInType extends ButtonDefaultType {
  href: string;
}

export interface ButtonSubmitType extends ButtonDefaultType {}

export interface ButtonType extends ButtonDefaultType {}
