import { NavLink } from "react-router-dom";
import { filtres } from "../../libs/var";
import PropTypes from "prop-types";

function Filters() {
  var arg = ["", "website", "application", "other"];

  return (
    <>
      {filtres.map((filtre, index) => (
        <NavLink to={`/${arg[index]}`} key={index + filtre}>
          <div className="flex justify-center text-blue-3 pb-4">{filtre}</div>
        </NavLink>
      ))}
    </>
  );
}

export default Filters;

Filters.propTypes = {
  clickHandler: PropTypes.func,
};
