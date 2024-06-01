import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';

const ContactList = () => {

    const filter = useSelector(selectNameFilter);
    const contacts = useSelector(selectContacts);
    
    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()));
    
    return (
            <ul className={css.list}>
                {visibleContacts.map((contact) => {
                    return (
                        <Contact
                        key={contact.id}
                        contact={contact}
                        />
                    )
                })}
            </ul>
    )    
};

export default ContactList;