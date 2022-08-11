import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { getFiltred, getContacts } from 'redux/contactsSlice';

function Contacts() {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFiltred);

  const getFiltredContacts = () => {
    const normalizedFilter = value.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const data = getFiltredContacts();

  return (
    <ul>
      {data.map(contact => {
        return (
          <ContactItem
            name={contact.name}
            number={contact.number}
            id={contact.id}
            key={contact.id}
          ></ContactItem>
        );
      })}
    </ul>
  );
}

export default Contacts;
