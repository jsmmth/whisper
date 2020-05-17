import redis from "redis";
import url from "url";

const port = Number(process.env.REDIS_PORT);
const { hostname, auth } = url.parse(process.env.REDIS_URL ?? "");
const client = redis.createClient({ port, host: hostname ?? undefined });

if (auth) {
  client.auth(auth.split(":")[1]);
}

client.on("connect", () => {
  console.log("Redis is connected!");
});

client.on("error", (err: Error) => {
  console.error("There was an error: ", err);
});

process.on("exit", () => {
  client.quit();
});

export default client;
