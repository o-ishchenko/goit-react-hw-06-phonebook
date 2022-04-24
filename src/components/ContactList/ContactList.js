import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/slice';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onDeleteContact = name => dispatch(deleteContact(name));
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();
  return (
    <ul className={s.list}>
      {visibleContacts.map(({ name, number }) => (
        <li key={name}>
          <ContactItem
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
