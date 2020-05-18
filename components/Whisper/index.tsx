import React, {
  FormEvent,
  useState,
  ChangeEvent,
  useEffect,
  useRef,
} from "react";
import { useRouter } from "next/router";
import Button from "components/Button";
import moment from "moment";
import Countdown from "react-countdown-now";
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
  id?: string;
};

type WhisperProps = {
  userCode?: string | null;
  value?: Whisper | null;
};

const Whisper: React.FC<WhisperProps> = ({ userCode = null, value = null }) => {
  const router = useRouter();
  const listener = useRef<number | null>(null);
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

  const updatePercent = (expires: string) => {
    let diff = moment(expires).diff(moment(), "seconds");
    const percent = Math.round((diff / 60) * 100) / 100;
    if (percent <= 0) {
      if (listener.current) clearInterval(listener.current);
      setWhisper("You're too late!");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } else {
      if (inputContainerRef.current) {
        inputContainerRef.current.setAttribute("style", `opacity: ${percent}`);
      }
    }
  };

  useEffect(() => {
    setWhisper(value != null ? value.whisper ?? "" : "");
    if (value && value.expires != null) {
      updatePercent(value.expires);
      listener.current = setInterval(() => {
        updatePercent(value.expires ?? "");
      }, 1000);
    }
    return () => {
      if (listener.current) clearInterval(listener.current);
    };
  }, [value]);

  return (
    <WhisperForm {...{ onSubmit }}>
      <InputContainer ref={inputContainerRef}>
        <StyledInput
          autoFocus={!isDisabled}
          value={whisper}
          onChange={onChange}
          disabled={isDisabled}
          placeholder="Don't tell anyone but..."
        />
      </InputContainer>
      <WhisperFooter>
        {isComplete && !isDisabled && (
          <>
            <StyledSuccessTitle>
              👻 This Whipser will disappear forever in 0:60
            </StyledSuccessTitle>
            <StyledSuccessBody>https://whisper.li/{userCode}</StyledSuccessBody>
          </>
        )}

        {isDisabled && value?.expires && (
          <>
            <StyledSuccessTitle>
              👻 This Whipser will disappear forever in{" "}
              <Countdown
                date={moment(value.expires).toDate()}
                renderer={({ seconds }) => {
                  return <span>0:{seconds}</span>;
                }}
              />
            </StyledSuccessTitle>
            <StyledSuccessBody>https://whisper.li/{value.id}</StyledSuccessBody>
          </>
        )}

        {!isComplete && !isDisabled && (
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Posting..." : "Post with Whisper"}
          </Button>
        )}
      </WhisperFooter>
    </WhisperForm>
  );
};

export default Whisper;
