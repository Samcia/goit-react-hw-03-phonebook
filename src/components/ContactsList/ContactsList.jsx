import './ContactsList.css';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, filter, deleteContact }) => {
  const filteredArray = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="contacts">
      {filteredArray.map(({ id, name, number }) => (
        <li key={id} className="contacts__item">
          <p className="contacts__name"> {name} </p>
          <p className="contacts__number">{number} </p>

          <button
            className="contacts__button"
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  filteredArray: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
