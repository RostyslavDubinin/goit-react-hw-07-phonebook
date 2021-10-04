import shortid from "shortid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { getContactsItems } from "../../redux/selectors";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const contacts = useSelector((state) => getContactsItems(state));
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        console.error();
        return;
    }
  };
  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleAppend = () => {
    if (contacts.find((item) => item.name === name)) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          id={nameInputId}
          onChange={handleChange}
          className={styles.input}
        />
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            id={numberInputId}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
      </label>
      <button type="button" onClick={handleAppend} className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
