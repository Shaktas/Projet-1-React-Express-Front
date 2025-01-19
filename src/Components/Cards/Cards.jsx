import { useState } from "react";
import { SearchContext } from "../../Context/SearchContext";
import Card from "./Card";
import { useContext } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { VaultContext } from "../../Context/VaultContext";

//// BUGGGGGGG /////////

const Cards = ({ filter = "" }) => {
  // const { searchTerm } = useContext(SearchContext);
  const { cardsFromVault, actualVaultId } = useContext(VaultContext);
  // const [filterCards, setFilterCards] = useState([]);
  const [vault, setVault] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (cardsFromVault.length > 0) {
      cardsFromVault.find((vault) => {
        console.log(vault.vaultId, actualVaultId);
        if (vault.vaultId === actualVaultId) {
          setVault(vault);
          setCards(vault.data);
          return;
        }
      });
    }
  }, [cardsFromVault, actualVaultId]);
  console.log("vault:", vault, "cards:", cards);

  // useEffect(() => {
  //   const filterCard = (cards) => {
  //     let filtered = [...cards];

  //     if (filter !== "") {
  //       filtered = filtered.filter((card) => card.type === filter);
  //     }

  //     if (searchTerm.length >= 3) {
  //       filtered = filtered.filter(
  //         (card) =>
  //           card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //           card.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //           card.url.toLowerCase().includes(searchTerm.toLowerCase())
  //       );
  //     }
  //     console.log(filtered);

  //     setFilterCards(filtered);
  //   };

  //   filterCard(cardsData);
  // }, [searchTerm, filter]);

  return (
    <>
      <h1>{}</h1>
      <div className="relative flex justify-center items-center flex-wrap">
        {/* {filterCards.map((card, index) => (
          <Card
            key={`${index}-${card.name}`}
            name={card.name}
            url={card.url}
            username={card.username}
            password={card.password}
            type={card.type}
          />
        ))} */}
      </div>
    </>
  );
};

export default Cards;

Cards.propTypes = {
  filter: PropTypes.string,
};
