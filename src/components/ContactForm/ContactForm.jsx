import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactFormStyles';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    const numberInput = e.target.value;
    const cleanedNumber = numberInput.replace(/\D/g, '').slice(0, 10);
    setNumber(cleanedNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && number) {
      const newContact = {
        name,
        number,
      };

      dispatch(addContact(newContact));
      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        required
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <Input
        type="tel"
        name="number"
        required
        placeholder="Phone number"
        value={number}
        onChange={handleNumberChange}
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
