export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  showIcon: boolean;
  primary?: boolean;  // Define se o botão é primário (roxo)
  large?: boolean;    // Define se o botão é grande ou pequeno
}
