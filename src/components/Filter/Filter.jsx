import PropTypes from 'prop-types';
import './Filter.css';

export const Filter = ({ filterContacts }) => {
  return (
    <div className="filter">
      <p>Find contacts by name</p>
      <input
        className="filter__input"
        type="text"
        onChange={filterContacts}
        placeholder="Contact name"
      ></input>
    </div>
  );
};

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};
