import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { addContact, deleteContact, selectContacts } from '../../redux/contactsSlice';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './App.module.css';


function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
    
  const visibleContacts  = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()))

  const handleAddContact = (contact) => {
    const newContact = {
      id: nanoid(),
      ...contact
    };
    dispatch(addContact(newContact));
  }
  
  const handleDeleteContact = (id) => dispatch(deleteContact(id));
  const handleFilterChange = (filter) => dispatch(changeFilter(filter))
  
  
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={handleAddContact}/>
      <SearchBox filter={filter} onFilter={handleFilterChange} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  )
}

export default App;
