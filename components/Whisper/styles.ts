import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

export const WhisperForm = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledSuccessTitle = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  text-align: center;
`;

export const StyledSuccessBody = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin-top: 20px;
`;

export const WhisperFooter = styled.div`
  padding-bottom: 40px;
`;

export const InputContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;
`;

export const StyledInput = styled(TextareaAutosize)`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 42px;
  color: #fff;
  text-align: center;
  resize: none;
  opacity: 0;
  width: 100%;
  max-width: 600px;
  height: 60px;
  animation: fadeIn 6s ease-in-out forwards;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
