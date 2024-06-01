import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { items: [] },
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
        prepare(contact) {
            return {
                payload: {
                    id: nanoid(),
                    ...contact,
                }
            }
        },
    },   
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;

export default contactsSlice.reducer;

