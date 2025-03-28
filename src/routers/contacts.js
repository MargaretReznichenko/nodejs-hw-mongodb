import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import {
  getContactsController,
  getContactsByIdController,
  createContactController,
  updateContactController,
  deleteContactController,
} from '../controllers/contacts.js';

const router = Router();

router.get('/', ctrlWrapper(getContactsController));

router.get(
  "/:contactId",isValidId,
  ctrlWrapper(getContactsByIdController),
);

router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  "/:contactId",
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

router.delete(
  "/:contactId",
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default router;