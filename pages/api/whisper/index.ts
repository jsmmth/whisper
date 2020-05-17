import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/redis";

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const { whisper, userCode } = req.body;
      const data = { whisper, expires: null };
      client.set(userCode, JSON.stringify(data), (err) => {
        if (err) return res.status(422).json(err);
        res.status(200).end();
      });
      break;
    default:
      res.status(405).end();
      break;
  }
};
