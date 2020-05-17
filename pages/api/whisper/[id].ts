import { NextApiRequest, NextApiResponse } from "next";
import moment from "moment";
import client from "../../../libs/redis";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      client.get(`${id}`, function (err, value) {
        if (err) throw err;
        if (value != null) {
          const data = JSON.parse(value);
          return res.status(200).json({ ...data });
        }
        return res.status(200).json({ whisper: "", expires: null });
      });
      break;
    case "POST":
      client.get(`${id}`, function (err, value) {
        if (err) throw err;
        if (value != null) {
          const data = JSON.parse(value);
          if (data.expires == null) {
            const newData = {
              whisper: data.whisper,
              expires: moment().add(60, "seconds").toISOString(),
            };
            client.set(`${id}`, JSON.stringify(newData));
            return res.status(200).json({ ...newData });
          }
          return res.status(200).json({ ...data });
        }
        return res.status(200).json({ whisper: "", expires: null });
      });
      break;
    default:
      res.status(405).end();
      break;
  }
};
