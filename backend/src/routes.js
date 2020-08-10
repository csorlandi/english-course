import { Router } from 'express';
// import Brute from 'express-brute';
// import BruteRedis from 'express-brute-redis';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AvatarController from './app/controllers/AvatarController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Security - Brute Request
// const bruteStore = new BruteRedis({
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
// })

// const bruteForce = new Brute(bruteStore);

// ## PUBLIC ROUTES ##
// Test
routes.get('/', (req, res) => res.json({ message: 'Server Working' }));
// User
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
// Auth
// routes.post('/sessions', bruteForce.prevent, SessionController.store);
routes.post('/sessions', SessionController.store);

// ## PRIVATE ROUTES ##
// Auth
routes.use(authMiddleware);
// Users
routes.put('/users', UserController.update);
// Avatars
routes.post('/avatars', upload.single('avatar'), AvatarController.store);

export default routes;
