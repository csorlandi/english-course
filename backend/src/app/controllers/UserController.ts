import { Request, Response, v4, bcrypt } from "../../../deps.ts";

import CreateUserService from "../services/CreateUserService.ts";

import User from "../models/User.ts";

interface CTX {
  req: Request;
  res: Response;
}

interface UserDTO {
  id: string;
  name: string;
  email: string;
  password: Promise<string>;
}

class UserController {
  async store({ req, res }: CTX): Promise<User> {
    try {
      const { name, email, password } = req.body;
      const createUser = new CreateUserService();
      const user = await createUser.execute({
        name,
        email,
        password,
      });

      return user;
    } catch (error) {
      res.setStatus(400);
      return error.message;
    }
  }

  async index({ req, res }: CTX): Promise<{}> {
    const users = await User.all();

    return users;
  }

  async update({ req, res }: CTX): Promise<{}> {
    return {};
  }

  async delete({ req, res }: CTX): Promise<{}> {
    return {};
  }
}

export default new UserController();
