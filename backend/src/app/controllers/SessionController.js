import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import authConfig from '../../config/auth';
import User from '../models/User';
import Avatar from '../models/Avatar';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: Avatar,
          as: 'avatar',
          attributes: ['path', 'url', 'id'],
        },
      ],
    });

    if (!user || !(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'User or password are incorrect' });
    }

    const { id, first_name, last_name, avatar } = user;
    return res.json({
      user: {
        id,
        first_name,
        last_name,
        email,
        avatar,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
