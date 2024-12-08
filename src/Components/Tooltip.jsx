import PropTypes from "prop-types";

function Tooltip({
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
      className={`${bgColor} absolute text-white flex justify-center items-center w-32 px-4 py-2 rounded-md shadow-lg duration-300 ease-in-out transition-opacity ${
        properties.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="">{properties.message}</p>
    </div>
  );
}

export default Tooltip;

Tooltip.propTypes = {
  properties: PropTypes.shape({
    message: PropTypes.string,
    condtion: PropTypes.string,
  }),
};
