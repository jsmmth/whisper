import React, {
  FormEvent,
  useState,
  ChangeEvent,
  useEffect,
  useRef,
} from "react";
import Button from "components/Button";
import moment from "moment";
import {
  WhisperForm,
  InputContainer,
  StyledInput,
  WhisperFooter,
  StyledSuccessTitle,
  StyledSuccessBody,
} from "./styles";

type Whisper = {
  whisper: string | null;
  expires: string | null;
};

type WhisperProps = {
  userCode?: string | null;
  value?: Whisper | null;
};

const Whisper: React.FC<WhisperProps> = ({ userCode = null, value = null }) => {
  const [whisper, setWhisper] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const isDisabled = userCode == null;
  const inputContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    let listener: any = null;
    if (value != null && value.expires != null) {
      setWhisper(value.whisper ?? "");
      listener = setInterval(() => {
        let diff = moment(value.expires).diff(moment(), "seconds");
        const percent = Math.round((diff / 60) * 100) / 100;
        if (percent <= 0) {
          if (inputContainerRef.current) {
            inputContainerRef.current.innerHTML = "";
          }
          clearInterval(listener);
        }

        if (inputContainerRef.current) {
          inputContainerRef.current.setAttribute(
            "style",
            `opacity: ${percent}`
          );
        }
      }, 1000);
    }
    return () => {
      if (listener) clearInterval(listener);
    };
  }, [value]);

  return (
    <WhisperForm {...{ onSubmit }}>
      <InputContainer ref={inputContainerRef}>
        <StyledInput
          value={whisper}
          onChange={onChange}
          disabled={isDisabled}
          placeholder="Write a whisper..."
        />
      </InputContainer>
      <WhisperFooter>
        {isComplete && (
          <>
            <StyledSuccessTitle>
              Published! - https://whisper.li/{userCode}
            </StyledSuccessTitle>
            <StyledSuccessBody>
              After the first view the 60s countdown will start.
            </StyledSuccessBody>
          </>
        )}

        {!isComplete && !isDisabled && (
          <Button type="submit" disabled={isLoading}>
            Publish
          </Button>
        )}
      </WhisperFooter>
    </WhisperForm>
  );
};

export default Whisper;
