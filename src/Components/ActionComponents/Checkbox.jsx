import PropTypes from "prop-types";

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

Checkbox.propTypes = {
  string: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};
