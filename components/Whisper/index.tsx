import React, { FormEvent, useState, ChangeEvent } from "react";
import Button from "components/Button";
import {
  WhisperForm,
  InputContainer,
  StyledInput,
  WhisperFooter,
  StyledSuccessTitle,
  StyledSuccessBody,
} from "./styles";

type WhisperProps = {
  userCode: string | null;
};

const Whisper: React.FC<WhisperProps> = ({ userCode }) => {
  const [whisper, setWhisper] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const isDisabled = userCode == null;

  const onSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await fetch("/api/whisper", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ whisper, userCode }),
      });
      setIsLoading(false);
      setIsComplete(true);
    } catch (err) {
      alert(err);
    }
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWhisper(e.target.value);
  };

  return (
    <WhisperForm {...{ onSubmit }}>
      <InputContainer>
        <StyledInput
          value={whisper}
          onChange={onChange}
          placeholder="Write a whisper..."
        />
      </InputContainer>
      <WhisperFooter>
        {isComplete ? (
          <>
            <StyledSuccessTitle>
              Published! - https://whisper.li/{userCode}
            </StyledSuccessTitle>
            <StyledSuccessBody>
              After the first view the 60s countdown will start.
            </StyledSuccessBody>
          </>
        ) : (
          <Button type="submit" disabled={isDisabled || isLoading}>
            Publish
          </Button>
        )}
      </WhisperFooter>
    </WhisperForm>
  );
};

export default Whisper;
