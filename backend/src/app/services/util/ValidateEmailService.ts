import User from "../../models/User.ts";

interface Request {
  email: string;
}

interface Response {
  user: User;
}

class ValidateEmailService {
  public async execute({ email }: Request): Promise<Response> {
    const user = await User.where({ email }).first();
    return user;
  }
}

export default ValidateEmailService;
