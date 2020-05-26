import { Router } from "../../../deps.ts";
import SessionController from "../controllers/SessionController.ts";

const router = new Router();

router.post("/", SessionController.execute);

export default router;
