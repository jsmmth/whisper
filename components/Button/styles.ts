import styled from "styled-components";

export const StyledButton = styled.button`
  height: 50px;
  border-radius: 10px;
  background-color: #7863f5;
  border: none;
  outline: none;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0px 34px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: red;
  }
`;
