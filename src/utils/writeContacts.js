import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        const data = JSON.stringify(updatedContacts, null, 2);
        await fs.writeFile(PATH_DB, data, 'utf8' );
return;
    } catch (error) {
        console.error(error);
        return;
    }
};
