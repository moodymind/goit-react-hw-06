import { useSelector } from "react-redux";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import "./App.css";
import { selectContacts } from "./redux/selectors";

function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 && <SearchBox />}
      <ContactList />
    </div>
  );
}

export default App;
