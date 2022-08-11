import { useSelector } from 'react-redux';
import Section from './Section';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';
import { getContacts } from 'redux/contactsSlice';

export const Layout = () => {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <Contacts />
        </Section>
      )}
    </div>
  );
};
