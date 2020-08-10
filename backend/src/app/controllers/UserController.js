import * as Yup from 'yup';
import User from '../models/User';
import Avatar from '../models/Avatar';

class UserController {
  async index(req, res) {
    const { page = 1 } = req.query;

    // const query = q ? { name: { [Op.ilike]: q } } : null;

    const users = await User.findAll({
      // where: query,
      offset: (page - 1) * 10,
      limit: 10,
    });

    const counter = await User.findAndCountAll();
    const { count } = counter;

    return res.json({ users, count });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      first_name: Yup.string().required(),
      last_name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, first_name, last_name, email } = await User.create(req.body);

    return res.json({ id, first_name, last_name, email });
  }

  async show(req, res) {
    res.json({});
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      first_name: Yup.string(),
      last_name: Yup.string(),
      email: Yup.string().email(),
      oldpassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Passwords does not match' });
    }

    await user.update(req.body);

    const { id, first_name, last_name, avatar } = await User.findByPk(
      req.userId,
      {
        include: [
          {
            model: Avatar,
            as: 'avatar',
            attributes: ['id', 'path', 'url'],
          },
        ],
      }
    );

    return res.json({
      id,
      first_name,
      last_name,
      email,
      avatar,
    });
  }

  async delete(req, res) {
    res.json({});
  }
}

export default new UserController();
