import React, { ReactNode } from "react";
import GlobalStyles from "common/styles";
import { Container, YellowBlob, PinkBlob, StyledLayout } from "./styles";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyles />
      <YellowBlob src="images/yellow-blob.svg" />
      <PinkBlob src="images/pink-blob.svg" />
      <Container>{React.Children.toArray(children)}</Container>
    </StyledLayout>
  );
};

export default Layout;
