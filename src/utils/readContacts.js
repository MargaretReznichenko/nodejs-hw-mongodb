import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const dataContacts = await readFile(PATH_DB, 'utf-8');
    return JSON.parse(dataContacts);
  } catch (error) {
    console.error(error.message);
  }
};
