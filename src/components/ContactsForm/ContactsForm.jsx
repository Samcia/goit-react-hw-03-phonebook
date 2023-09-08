import PropTypes from 'prop-types';
import './ContactsForm.css';

export const ContactsForm = ({ addContact }) => {
  return (
    <form onSubmit={addContact} className="form">
      <label>
        Name
        <input
          className="form__input"
          type="text"
          name="name"
          id=""
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Your name"
        />
      </label>
      <label>
        Number
        <input
          className="form__input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Your number"
        />
      </label>
      <button className="form__button" type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
