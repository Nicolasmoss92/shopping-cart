export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  showIcon?: boolean;
  icon?: React.ReactNode;  // Aqui definimos o tipo do ícone
  primary?: boolean;  // Indica se o botão é primário (roxo)
  large?: boolean;  // Define o tamanho do botão
}