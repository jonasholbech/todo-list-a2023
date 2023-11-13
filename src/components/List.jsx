import SubList from "./SubList";

function List({ items, deleteItem, toggleCompleted }) {
  return (
    <div>
      <h2>Min todo liste</h2>
      <SubList
        title="Mine opgaver"
        toggleCompleted={toggleCompleted}
        deleteItem={deleteItem}
        items={items.filter((i) => i.completed)}
      />
      <SubList
        title="Færdige opgaver"
        toggleCompleted={toggleCompleted}
        deleteItem={deleteItem}
        items={items.filter((i) => !i.completed)}
      />
    </div>
  );
}

export default List;
