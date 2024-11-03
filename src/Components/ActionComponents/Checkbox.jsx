function Checkbox({ string, id, onChange }) {
  return (
    <div>
      <input type="checkbox" name={id} id={id} onChange={onChange} />
      <label className="ml-1" htmlFor={id}>
        {string}
      </label>
    </div>
  );
}
export default Checkbox;
