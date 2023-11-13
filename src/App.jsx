import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
/*
update item (completed)
*/
function App() {
  const [items, setItems] = useState([
    {
      task: "Mælke katten",
      completed: false,
      id: 1,
    },
    {
      task: "Fodre katten",
      completed: true,
      id: 2,
    },
  ]);
  function addItem(newItem) {
    setItems((oldState) => oldState.concat(newItem));
  }
  function deleteItem(id) {
    setItems((old) => old.filter((item) => item.id !== id));
  }
  function toggleCompleted(id) {
    //console.log(id, "skal toggles");
    setItems((old) => {
      return old.map((item) => {
        if (item.id === id) {
          const copy = { ...item };
          copy.completed = !copy.completed;
          return copy;
        }
        return item;
      });
    });
  }
  return (
    <main>
      <Form addItem={addItem} />
      <List
        toggleCompleted={toggleCompleted}
        deleteItem={deleteItem}
        items={items}
      />
    </main>
  );
}

export default App;
