import ContactForm from "./components/contactForm";
import Filter from "./components/filter";
import ContactList from "./components/contactList";
import { useSelector } from "react-redux";
import { getContactsLoading } from "./redux/selectors";

function App() {
  const isLoading = useSelector((state) => getContactsLoading(state));
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>{" Loading... "}</p>}
      <ContactList />
    </div>
  );
}

export default App;
