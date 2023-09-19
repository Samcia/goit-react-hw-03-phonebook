import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

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
      return alert(contact.name + ' already exist in contacts! :)');
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

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      if (contacts.length === 0) {
        localStorage.removeItem('contacts');
      } else {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    }
  }

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
