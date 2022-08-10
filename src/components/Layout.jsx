import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Section from './Section';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';
import { itemAdd, getFiltred, getContacts } from 'redux/contactsSlice';

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFiltred);
  const contacts = useSelector(getContacts);

  const formSubmitHandler = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(
        `this number: ${number} is in phonebook , you dont want to add one more time.`
      );
    } else {
      const contact = {
        name: name,
        number: number,
        id: nanoid(),
      };
      dispatch(itemAdd(contact));
    }
  };

  const getFiltredContacts = () => {
    const normalizedFilter = value.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <Section title="Phonebook">
        <Phonebook onFormSubmit={formSubmitHandler} />
      </Section>
      {contacts.length > 0 && (
        <>
          <Section title="Contacts">
            <Filter />
            <Contacts data={getFiltredContacts()} />
          </Section>
        </>
      )}
    </div>
  );
};
