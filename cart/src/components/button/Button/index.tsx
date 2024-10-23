import { ButtonProps } from '../../../types/button/buttonTypes';
import { StyledButton } from './styles'; 

const Button: React.FC<ButtonProps> = ({ title, showIcon, primary, large, onClick, icon, ...props }) => {
  return (
    <StyledButton primary={primary} large={large} onClick={onClick} {...props}>
      {showIcon && icon}
      {title}
    </StyledButton>
  );
};

export default Button;