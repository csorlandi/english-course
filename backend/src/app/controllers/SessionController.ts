import {
  Request,
  Response,
} from "../../../deps.ts";

import AuthenticateUserService from "../services/AuthenticateUserService.ts";

interface CTX {
  req: Request;
  res: Response;
}

interface Session {
  email?: string;
  token?: string;
  error?: string;
}

class SessionController {
  async execute({ req, res }: CTX): Promise<Session> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return { error: "Email   ou senha nao informados." };
      }

      const authenticateUser = new AuthenticateUserService();

      const { user, token } = await authenticateUser.execute(
        { email, password },
      );

      return {
        email,
        token,
      };
    } catch (error) {
      console.log(res.status);

      res.setStatus(400);
      return error.message;
    }
  }
}

export default new SessionController();
