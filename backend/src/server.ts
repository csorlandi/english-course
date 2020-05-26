import { Application, Base64 } from "../deps.ts";
import userRouter from "./app/routes/users.routes.ts";
import sessionsRouter from "./app/routes/sessions.routes.ts";

import "./app/config/denodb.ts";

const app = new Application({ port: 3333 });

app.patch("/", async ({ req, res }) => {
  // const array9 = req.original.w.buf;

  console.log(req.original.w);

  // if (array9) {
  //   const formatted = await Base64.fromUint8Array(array9).toString();

  //   console.log(formatted);
  // }
  return { message: "Hello Deno Live!" };
});

app.post("/", ({ req, res }) => {
  const { message } = req.body;
  return { message };
});

app.use("/users", userRouter);
app.use("/sessions", sessionsRouter);

app.run();
