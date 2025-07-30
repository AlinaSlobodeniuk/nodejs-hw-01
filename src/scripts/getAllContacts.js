import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const contacts = readContacts();
    return contacts;
};

console.log(await getAllContacts());
