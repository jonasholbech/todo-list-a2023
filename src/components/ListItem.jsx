import { Button, Tabs } from "antd";

import styles from "./ListItem.module.css";

function ListItem({ completed, id, task, deleteItem, toggleCompleted }) {
  function deleteThis() {
    deleteItem(id);
  }
  return (
    <li className={completed ? styles.completed : ""}>
      {task}
      <Button type="primary" onClick={() => toggleCompleted(id)}>
        {completed ? "Undo" : "FÆRDIG!"}
      </Button>
      <Button type="primary" danger onClick={deleteThis}>
        Slet
      </Button>
    </li>
  );
}

export default ListItem;
