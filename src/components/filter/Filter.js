import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/actions";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = (event) => dispatch(filterContacts(event.target.value));

  return (
    <label className={styles.filter}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={onFilter}
      />
    </label>
  );
};

export default Filter;
