import {
  bcrypt,
  makeJwt,
  setExpiration,
  Payload,
} from "../../../deps.ts";
import authConfig from "../config/auth.ts";

import User from "../models/User.ts";

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const user = await User.where({ email }).first();

    if (!user) {
      throw new Error("O email ou senha informado esta incorreto.");
    }

    const payload: Payload = {
      iat: new Date().getTime(),
      exp: setExpiration(new Date().getTime() + 60 * 60 * 1000),
      sub: user.id,
    };

    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      throw new Error("O email ou senha informado esta incorreto.");
    }

    const token = makeJwt(
      { header: authConfig.jwt.header, payload, key: authConfig.jwt.secret },
    );

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
