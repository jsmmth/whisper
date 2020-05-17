import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Header from "components/Header";
import Whisper from "components/Whisper";
import { USER_LOCAL_STORAGE_KEY } from "common/constants";
import useLocalStoage from "common/hooks/useLocalStoage";

const fetcher = (url: string) =>
  fetch(url)
    .then((r) => {
      if (r.status != 200) throw new Error("There was an error");
      return r.json();
    })
    .catch((err) => console.error(err));

const ViewWhisper: React.FC = () => {
  const router = useRouter();
  const [whisper, setWhisper] = useState<{
    whisper: string;
    expires: string | null;
  }>({
    whisper: "",
    expires: null,
  });
  const [code] = useLocalStoage(USER_LOCAL_STORAGE_KEY);
  const { id } = router.query;
  const { data } = useSWR(`/api/whisper/${id}`, fetcher);

  const updateExpires = async () => {
    try {
      const data = await fetch(`/api/whisper/${id}`, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      const json = await data.json();
      setWhisper(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id !== code && whisper != null && whisper.expires == null) {
      updateExpires();
    }
  }, [whisper, code]);

  useEffect(() => {
    if (data && data.whisper) {
      setWhisper(data);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Whisper - see a whisper</title>
      </Head>
      <Header />
      {whisper != null && <Whisper value={whisper} />}
    </>
  );
};

export default ViewWhisper;
