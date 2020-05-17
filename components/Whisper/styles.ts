import styled from "styled-components";

export const WhisperForm = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledSuccessTitle = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  text-align: center;
`;

export const StyledSuccessBody = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin-top: 20px;
`;

export const WhisperFooter = styled.div`
  padding-bottom: 40px;
`;

export const InputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease-in-out;
`;

export const StyledInput = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 42px;
  color: #fff;
  text-align: center;
  resize: none;
  opacity: 0;
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
