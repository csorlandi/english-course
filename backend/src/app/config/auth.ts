import { Jose } from "../../../deps.ts";

const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

const auth = {
  jwt: {
    secret: "468ac54d404ad12ea0dc750ad52b52bd",
    header,
  },
};

export default auth;
