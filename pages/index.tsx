import Head from "next/head";
import { NextPage } from "next";
import Header from "components/Header";
import Whisper from "components/Whisper";
import randomstring from "randomstring";
import useLocalStorage from "common/hooks/useLocalStoage";
import { USER_LOCAL_STORAGE_KEY } from "common/constants";

const Index: NextPage = () => {
  const userCode = randomstring.generate(7);
  const [code] = useLocalStorage(USER_LOCAL_STORAGE_KEY, userCode);

  return (
    <>
      <Head>
        <title>Whisper - make a whisper</title>
      </Head>
      <Header />
      <Whisper userCode={code} />
    </>
  );
};

export default Index;
