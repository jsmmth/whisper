import styled from "styled-components";

export const StyledHeader = styled.header`
  margin-left: 40px;
  margin-top: 40px;
`;

export const HeaderText = styled.div<{ top?: number }>`
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  color: #fff;
  margin-top: ${(props) => props.top ?? 0}px;
  display: flex;
  align-items: center;

  img {
    margin-right: 3px;
  }

  .bold {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #fff;
    border-bottom: 1px solid #fff;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
