import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      return;
    }

    contacts.pop();

    await writeContacts(contacts);
  } catch (error) {
    console.error(error.message);
  }
};

removeLastContact();