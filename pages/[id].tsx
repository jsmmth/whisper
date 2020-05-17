import React from "react";
import { useRouter } from "next/dist/client/router";

const ViewWhisper: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Hello looking for the whisper {id}</div>;
};

export default ViewWhisper;
