import { StyledButton } from './styles'; 

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  showIcon?: boolean;
  icon?: React.ReactNode;  // Aqui definimos o tipo do ícone
  large?: boolean;  // Define o tamanho do botão
}

const Button: React.FC<ButtonProps> = ({ title, showIcon, large, onClick, icon, ...props }) => {
  return (
    <StyledButton large={large} onClick={onClick} {...props}>
      {showIcon && icon}
      {title}
    </StyledButton>
  );
};

export default Button;