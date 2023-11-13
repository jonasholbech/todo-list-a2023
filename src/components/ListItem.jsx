import styles from "./ListItem.module.css";
function ListItem({ completed, id, task, deleteItem, toggleCompleted }) {
  function deleteThis() {
    deleteItem(id);
  }
  return (
    <li className={completed ? styles.completed : ""}>
      {task}
      <button onClick={() => toggleCompleted(id)}>
        {completed ? "Undo" : "FÆRDIG!"}
      </button>
      <button onClick={deleteThis}>Slet</button>
    </li>
  );
}

export default ListItem;
