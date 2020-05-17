import React from "react";
import Button from "components/Button";
import {
  WhisperContainer,
  InputContainer,
  StyledInput,
  WhisperFooter,
} from "./styles";

type WhisperProps = {
  userCode: string | null;
};

const Whisper: React.FC<WhisperProps> = ({ userCode }) => {
  const isDisabled = userCode == null;

  return (
    <WhisperContainer>
      <InputContainer>
        <StyledInput placeholder="hello" />
      </InputContainer>
      <WhisperFooter>
        <Button disabled={isDisabled}>Publish</Button>
      </WhisperFooter>
    </WhisperContainer>
  );
};

export default Whisper;
