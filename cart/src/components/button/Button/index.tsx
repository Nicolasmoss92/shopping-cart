import { ButtonProps } from '../../../types/button/buttonTypes';
import { StyledButton } from './styles';  // Importa os estilos

const Button: React.FC<ButtonProps> = ({ title, showIcon, primary, large, onClick, ...props }) => {
  return (
    <StyledButton primary={primary} large={large} onClick={onClick} {...props}>
      {showIcon && <span>Icon</span>}
      {title}
    </StyledButton>
  );
};

export default Button;