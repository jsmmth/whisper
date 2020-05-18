import Head from "next/head";
import { NextPage } from "next";
import Header from "components/Header";
import Whisper from "components/Whisper";
import randomstring from "randomstring";
import Intro from "components/Intro";
import { useState } from "react";

const Index: NextPage = () => {
  const userCode = randomstring.generate(7);
  const [introVisible, setIntroVisible] = useState(true);

  return (
    <>
      <Head>
        <title>Whisper - make a whisper</title>
      </Head>
      <Header />
      {introVisible ? (
        <Intro {...{ setIntroVisible }} />
      ) : (
        <Whisper {...{ userCode }} />
      )}
    </>
  );
};

export default Index;
