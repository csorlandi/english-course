import { Router } from "../../../deps.ts";
import UserController from "../controllers/UserController.ts";

const router = new Router();

router.get("/", UserController.index);

router.post("/", UserController.store);

router.put("/", UserController.update);

router.delete("/", UserController.delete);

export default router;
