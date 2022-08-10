import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Delete, Item } from './Contacts.styled';
import { itemDelete } from 'redux/contactsSlice';

function ContactItem({ name, id, number }) {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(itemDelete(id));

  return (
    <Item key={id}>
      {name}: {number}
      <Delete type="button" onClick={onDeleteContact}>
        Delete
      </Delete>
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
