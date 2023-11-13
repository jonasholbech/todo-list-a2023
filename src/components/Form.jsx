function Form(props) {
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    props.addItem({
      task: data.get("task"),
      completed: false,
      id: Math.random(),
    });
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="task">Opgave</label>
        <input id="task" name="task" type="text" required />
        <button>Tilføj</button>
      </form>
    </div>
  );
}

export default Form;
