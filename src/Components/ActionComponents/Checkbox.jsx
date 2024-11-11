import PropTypes from "prop-types";

function Checkbox({ string, id, checked, onChange }) {
  return (
    <div>
      <input
        type="checkbox"
        name={id}
        id={id}
        onChange={onChange}
        checked={checked}
      />
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
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
