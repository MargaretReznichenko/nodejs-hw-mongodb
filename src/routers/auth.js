import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema, loginUserSchema } from '../validation/auth.js';
import {
  loginUserController,
  logoutUserController,
  registerUserController,
  refreshUsersSessionController,
} from '../controllers/auth.js';

const router = Router();

router.post('/',validateBody(registerUserSchema),ctrlWrapper(registerUserController),);
router.post('/',validateBody(loginUserSchema),ctrlWrapper(loginUserController),);
router.post('/', ctrlWrapper(refreshUsersSessionController));
router.post('/', ctrlWrapper(logoutUserController));

export default router;