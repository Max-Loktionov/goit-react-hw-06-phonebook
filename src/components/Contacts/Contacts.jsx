import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

function Contacts({ data }) {
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

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default Contacts;
