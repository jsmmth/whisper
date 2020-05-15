import React from "react";
import { StyledHeader, HeaderText } from "./styles";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <HeaderText>
        <span className="bold">Joseph Smith</span>{" "}
        <a href="https://twitter.com/_jsmth">@_jsmth</a>
      </HeaderText>
      <HeaderText top={10}>
        <img src="/images/live-icon.svg" />
        <a href="https://www.youtube.com/watch?v=rRozaI_7SG4">
          Watch me code
        </a>{" "}
        this site live
      </HeaderText>
    </StyledHeader>
  );
};

export default Header;
