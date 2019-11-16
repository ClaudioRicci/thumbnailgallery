export interface HeaderProps {
  title: string;
}

export interface LoadingCircleProps {
  message: string;
}

export interface ButtonProps {
  buttonType: string;
  label: string;
  onClick: Function;
}

export interface CardProps {
  id: number;
  thumbnail_url: string;
  large_url: string;
  copyright: string;
  site: string;
}
