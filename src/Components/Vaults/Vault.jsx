import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { countStrengthPassword } from "../../libs/function";
import PwdLevels from "../Users/PwdLevels";
import { KeyIcon } from "../../assets/Svg";
import card from "../../api/card";

const Vault = ({ cards, passwordCount, userCount, clickHandler }) => {
  const [vaultTitle, setVaultTitle] = useState(cards.vaultTitle);
  const cardsData = Object.values(Object.values(cards)[1]);
  const pwds = cardsData.map((card) => {
    return card.cardPassword;
  });
  console.log(pwds);
  const pwd = countStrengthPassword(pwds);

  return (
    <div className="bg-blue-3 rounded-lg p-4 shadow-lg">
      <div className="flex justify-center items-center">
        <NavLink to="/MyVault">
          <h3 className="relative flex text-xl font-bold mb-3 text-blue-10">
            {vaultTitle}{" "}
            <span className="ml-3">
              <KeyIcon fill="none" />
            </span>
          </h3>
        </NavLink>
      </div>

      <button
        className="flex justify-between items-center w-full hover:font-medium"
        onClick={clickHandler}
      >
        <span className="text-blue-12">Users:</span>
        <span className="font-medium text-blue-12">{userCount}</span>
      </button>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-blue-12">Cards:</span>
          <span className="font-medium text-blue-12">{passwordCount}</span>
        </div>
      </div>
      <PwdLevels pwd={pwd} />
    </div>
  );
};

export default Vault;

Vault.propTypes = {
  cards: PropTypes.object.isRequired,
  passwordCount: PropTypes.number,
  userCount: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
