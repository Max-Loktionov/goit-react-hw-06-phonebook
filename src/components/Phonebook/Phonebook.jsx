import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Label, Input, Submit } from './Phonebook.styled';
import { itemAdd, getContacts } from 'redux/contactsSlice';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(
        `this number: ${number} is in, you dont want to add one more time.`
      );
    } else {
      const contact = {
        name: name,
        number: number,
        id: nanoid(),
      };
      dispatch(itemAdd(contact));
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Type name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <Input
          value={number}
          onChange={handleInputChange}
          id={numberInputId}
          placeholder="Type number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Submit type="submit"> Add contact </Submit>
    </form>
  );
}
