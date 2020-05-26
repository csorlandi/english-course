import { bcrypt, v4 } from "../../../deps.ts";
import ValidateEmailService from "./util/ValidateEmailService.ts";

import User from "../models/User.ts";

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const validateEmail = new ValidateEmailService();

    const verifyEmail = validateEmail.execute({ email });

    if (verifyEmail) {
      throw new Error("Email já cadastrado na base de dados.");
    }

    const salt = await bcrypt.genSalt(8);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = {
      id: v4.generate(),
      name,
      email,
      password: hashedPassword,
    };

    await User.create(user);

    return user;
  }
}

export default CreateUserService;
