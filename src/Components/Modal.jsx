import PropTypes from "prop-types";

function Modal({
  properties = {
    message: "Hello World",
    condtion: "",
    isVisible: true,
  },
}) {
  let bgColor = "";
  switch (properties.condtion) {
    case "success":
      bgColor = "bg-green-400";
      break;

    case "error":
      bgColor = "bg-red-400";
      break;

    default:
      bgColor = "bg-transparent";
      break;
  }

  return (
    <div
      className={`${bgColor} absolute top-0 right-[2vh] text-white px-4 py-2 rounded-md shadow-lg duration-300 ease-in-out transition-opacity ${
        properties.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p>{properties.message}</p>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  properties: PropTypes.shape({
    message: PropTypes.string,
    condtion: PropTypes.string,
  }),
};
