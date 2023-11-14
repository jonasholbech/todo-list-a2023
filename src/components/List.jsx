import SubList from "./SubList";
import { Tabs } from "antd";
function List({ items, deleteItem, toggleCompleted }) {
  const tabItems = [
    {
      key: "abc",
      label: "Mine opgaver",
      children: (
        <SubList
          title="Mine opgaver"
          toggleCompleted={toggleCompleted}
          deleteItem={deleteItem}
          items={items.filter((i) => !i.completed)}
        />
      ),
    },
    {
      key: "def",
      label: "Færdige opgaver",
      children: (
        <SubList
          title="Færdige opgaver"
          toggleCompleted={toggleCompleted}
          deleteItem={deleteItem}
          items={items.filter((i) => i.completed)}
        />
      ),
    },
  ];
  return (
    <div>
      <h2>Min todo liste</h2>

      <Tabs items={tabItems} />
    </div>
  );
}

export default List;
