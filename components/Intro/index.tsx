import React from "react";
import Button from "components/Button";
import { IntroTitle, IntroContainer, IntroFooter } from "./styles";

type IntroProps = {
  setIntroVisible: (state: boolean) => void;
};

const Intro: React.FC<IntroProps> = ({ setIntroVisible }) => {
  return (
    <>
      <IntroContainer>
        <IntroTitle>Send a Whipser that disappears in 60 seconds</IntroTitle>
      </IntroContainer>
      <IntroFooter>
        <Button onClick={() => setIntroVisible(false)}>
          Send message with Whisper
        </Button>
      </IntroFooter>
    </>
  );
};

export default Intro;
