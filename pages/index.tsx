import Head from "next/head";
import { NextPage } from "next";
import Header from "components/Header";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joseph Smith</title>
      </Head>
      <Header />
      Hello there
    </>
  );
};

export default Index;
