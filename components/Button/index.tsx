import React, { ReactChild } from "react";
import { StyledButton } from "./styles";

type ButtonProps = {
  children: ReactChild;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  children,
  type = "button",
  disabled,
}) => {
  return (
    <StyledButton {...{ disabled, type }} onClick={() => onClick()}>
      {children}
    </StyledButton>
  );
};

export default Button;
