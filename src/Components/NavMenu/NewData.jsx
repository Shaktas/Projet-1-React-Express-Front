import PropTypes from "prop-types";

function NewData({ clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className="flex justify-center items-center bg-blue-6 text-blue-12 mb-4 py-1 px-8 rounded-3xl"
    >
      <span className="flex justify-center items-center mr-1 text-blue-12 text-xl">
        +
      </span>{" "}
      Nouveau
    </button>
  );
}

export default NewData;

NewData.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
