import styled from "styled-components";

export const StyledButton = styled.button`
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  border: none;
  outline: none;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0px 34px;
  color: #000;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
  }
`;
