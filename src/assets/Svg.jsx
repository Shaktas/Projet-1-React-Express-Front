import PropTypes from "prop-types";

export const CopySvg = ({
  color = "fill-current",
  height = "auto",
  width = "auto",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      version="1.1"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
    >
      <path d="M35 270h45v45c0 8.284 6.716 15 15 15h200c8.284 0 15-6.716 15-15V75c0-8.284-6.716-15-15-15h-45V15c0-8.284-6.716-15-15-15H35c-8.284 0-15 6.716-15 15v240c0 8.284 6.716 15 15 15zm245 30H110V90h170v210zM50 30h170v30H95c-8.284 0-15 6.716-15 15v165H50V30z"></path>
      <path d="M155 120c-8.284 0-15 6.716-15 15s6.716 15 15 15h80c8.284 0 15-6.716 15-15s-6.716-15-15-15h-80zM235 180h-80c-8.284 0-15 6.716-15 15s6.716 15 15 15h80c8.284 0 15-6.716 15-15s-6.716-15-15-15zM235 240h-80c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h80c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15z"></path>
    </svg>
  );
};

CopySvg.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export const IconLock = ({
  color = "fill-content",
  width = "auto",
  height = "auto",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="fill-current"
      viewBox="0 0 330 330"
    >
      <path
        fill={color}
        d="M165 330c63.411 0 115-51.589 115-115 0-29.771-11.373-56.936-30-77.379V85c0-46.869-38.131-85-85-85S80.001 38.131 80.001 85v52.619C61.373 158.064 50 185.229 50 215c0 63.411 51.589 115 115 115zm15-110.014V240c0 8.284-6.716 15-15 15s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986 0-13.785 11.215-25 25-25s25 11.215 25 25c0 8.162-3.932 15.421-10 19.986zM110.001 85c0-30.327 24.673-55 54.999-55 30.327 0 55 24.673 55 55v29.029C203.652 105.088 184.91 100 165 100c-19.909 0-38.651 5.088-54.999 14.028V85z"
      ></path>
    </svg>
  );
};

IconLock.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
