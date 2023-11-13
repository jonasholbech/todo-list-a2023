import ListItem from "./ListItem";
function SubList({ title, toggleCompleted, deleteItem, items }) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <ListItem
            toggleCompleted={toggleCompleted}
            deleteItem={deleteItem}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </>
  );
}

export default SubList;
