import styled from "styled-components";

export const WhisperContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WhisperFooter = styled.div`
  padding-bottom: 40px;
`;

export const InputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 42px;
  color: #fff;
  text-align: center;
  resize: none;
  height: 60px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
