import React from "react";
import { StyledHeader, HeaderText } from "./styles";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderText top={10}>
        <img src="/images/live-icon.svg" />
        <a href="https://www.youtube.com/watch?v=sQNwbA37y2U">
          Watch me code
        </a>{" "}
        this site live
      </HeaderText>
    </StyledHeader>
  );
};

export default Header;
