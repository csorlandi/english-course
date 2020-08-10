import Avatar from '../models/Avatar';

class AvatarController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const file = await Avatar.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new AvatarController();
