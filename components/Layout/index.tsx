import React, { ReactNode } from "react";
import GlobalStyles from "common/styles";
import { Container, PrimaryBlob, SecondaryBlob, StyledLayout } from "./styles";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyles />
      <PrimaryBlob src="images/primary-blob.svg" />
      <SecondaryBlob src="images/secondary-blob.svg" />
      <Container>{React.Children.toArray(children)}</Container>
    </StyledLayout>
  );
};

export default Layout;
