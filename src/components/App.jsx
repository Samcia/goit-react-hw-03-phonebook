import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };
    if (
      this.state.contacts.some(
        person => person.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert('{$contact.name} already exist');
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

    event.target.reset();
  };

  filterContacts = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />
        <ContactsList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
export default App;
