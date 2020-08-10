import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  if (token) {
    try {
      jwt.verify(token, authConfig.secret, (err, result) => {
        if (!err) {
          req.userId = result.id;
          return next();
        }
      });
    } catch (err) {
      return res.status(401).json({ error: 'Token invalid' });
    }
  }
};
