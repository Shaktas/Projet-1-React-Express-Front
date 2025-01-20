import { useState } from "react";
import { SearchContext } from "../../Context/SearchContext";
import Card from "./Card";
import { useContext } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { VaultContext } from "../../Context/VaultContext";
import card from "../../api/card";

const Cards = ({ filter = "" }) => {
  const { searchTerm } = useContext(SearchContext);
  const { cardsFromVault, actualVaultId } = useContext(VaultContext);
  const [filterCards, setFilterCards] = useState([]);
  const [vault, setVault] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (cardsFromVault.length > 0) {
      cardsFromVault.find((vault) => {
        console.log(vault, actualVaultId);
        if (vault.vaultId === actualVaultId) {
          setVault({ vaultId: vault.vaultId, vaultTitle: vault.vaultTitle });

          for (let [card] of Object.entries(vault.data)) {
            console.log(card, "card", vault.data);
            Object.assign(vault.data[card[0]], { cardId: card[0] });
          }
          setCards(Object.values(vault.data));
        }
      });
    }
  }, [cardsFromVault, actualVaultId]);

  useEffect(() => {
    const filterCard = (cards) => {
      if (filter !== "") {
        cards = cards.filter((card) => card.cardType === filter);
      }

      if (searchTerm.length >= 3) {
        cards = cards.filter(
          (card) =>
            card.cardTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.cardLogin.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.cardUrl.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilterCards(cards);
    };

    filterCard(cards);
  }, [searchTerm, filter, cards]);
  console.log(filterCards, "cards");

  return (
    <>
      <h1>{vault.vaultTitle}</h1>
      <div className="relative flex justify-center items-center flex-wrap">
        {filterCards.map((card, index) => (
          <Card
            key={`${index}-${card.cardTitle}`}
            name={card.cardTitle}
            url={card.cardUrl}
            username={card.cardLogin}
            password={card.cardPassword}
            type={card.cardType}
            cardId={parseInt(card.cardId)}
            vaultId={parseInt(actualVaultId)}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;

Cards.propTypes = {
  filter: PropTypes.string,
};
