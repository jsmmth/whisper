import React from "react";
import Button from "components/Button";
import {
  WhisperContainer,
  InputContainer,
  StyledInput,
  WhisperFooter,
} from "./styles";
import useLocalStorage from "common/hooks/useLocalStoage";
import { USER_LOCAL_STORAGE_KEY } from "common/constants";

const Whisper: React.FC = () => {
  const [code] = useLocalStorage(USER_LOCAL_STORAGE_KEY);

  console.log(code);

  return (
    <WhisperContainer>
      <InputContainer>
        <StyledInput placeholder="hello" />
      </InputContainer>
      <WhisperFooter>
        <Button disabled={code == null}>Publish</Button>
      </WhisperFooter>
    </WhisperContainer>
  );
};

export default Whisper;
