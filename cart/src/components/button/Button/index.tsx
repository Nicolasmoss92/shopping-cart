import React from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  showIcon?: boolean;
  icon?: React.ReactNode;   // Permite passar um ícone como prop
  backgroundColor?: string; // Cor de fundo personalizada
  textColor?: string;       // Cor do texto personalizada
  onClick: () => void;      // Função de clique personalizada
}

const Button: React.FC<ButtonProps> = ({
  title,
  showIcon = false,
  icon,
  backgroundColor = "#6A0DAD",  // Roxo padrão
  textColor = "#fff",
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={onClick}
      {...props}
    >
      {showIcon && icon && <span>{icon}</span>}
      {title}
    </StyledButton>
  );
};

export default Button;
