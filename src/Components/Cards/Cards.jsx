import { useState } from "react";
import { SearchContext } from "../../Context/SearchContext";
import Card from "./Card";
import { useContext } from "react";
import { useEffect } from "react";

const cardsData = [
  {
    name: "Example 1",
    url: "https://example1.com",
    username: "user1",
    password: "pass1",
    type: "Application",
  },
  {
    name: "Example 2",
    url: "https://example2.com",
    username: "user2",
    password: "pass2",
    type: "Website",
  },
  {
    name: "Example 3",
    url: "https://example3.com",
    username: "user3",
    password: "pass3",
    type: "Other",
  },
  {
    name: "Example 4",
    url: "https://example4.com",
    username: "user4",
    password: "pass4",
    type: "Other",
  },
  {
    name: "Example 5",
    url: "https://example5.com",
    username: "user5",
    password: "pass5",
    type: "Website",
  },
  {
    name: "Example 6",
    url: "https://example6.com",
    username: "user6",
    password: "pass6",
    type: "Application",
  },
  {
    name: "Example 7",
    url: "https://example7.com",
    username: "user7",
    password: "pass7",
    type: "Other",
  },
  {
    name: "Example 8",
    url: "https://example8.com",
    username: "user8",
    password: "pass8",
    type: "Application",
  },
  {
    name: "Example 9",
    url: "https://example9.com",
    username: "user9",
    password: "pass9",
    type: "Website",
  },
  {
    name: "Example 10",
    url: "https://example10.com",
    username: "user10",
    password: "pass10",
    type: "Website",
  },
  {
    name: "Example 11",
    url: "https://example11.com",
    username: "user11",
    password: "pass11",
    type: "Application",
  },
  {
    name: "Example 12",
    url: "https://example12.com",
    username: "user12",
    password: "pass12",
    type: "Website",
  },
  {
    name: "Example 13",
    url: "https://example13.com",
    username: "user13",
    password: "pass13",
    type: "Other",
  },
  {
    name: "Example 14",
    url: "https://example14.com",
    username: "user14",
    password: "pass14",
    type: "Application",
  },
  {
    name: "Example 15",
    url: "https://example15.com",
    username: "user15",
    password: "pass15toujoursbienlong",
    type: "Application",
  },
  {
    name: "Example 16",
    url: "https://example16.com",
    username: "user16",
    password: "pass16",
    type: "Website",
  },
];

const Cards = ({ filter = "" }) => {
  const { searchTerm } = useContext(SearchContext);
  const [filterCards, setFilterCards] = useState([]);

  const filterCard = (cards) => {
    let filtered = [...cards];

    if (filter !== "") {
      filtered = filtered.filter((card) => card.type === filter);
    }

    if (searchTerm.length >= 3) {
      filtered = filtered.filter(
        (card) =>
          card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.url.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    console.log(filtered);

    setFilterCards(filtered);
  };

  useEffect(() => {
    filterCard(cardsData);
  }, [searchTerm, filter]);

  return (
    <>
      <h1>Cards</h1>
      <div className="relative flex justify-center flex-wrap">
        {filterCards.map((card, index) => (
          <Card
            key={`${index}-${card.name}`}
            name={card.name}
            url={card.url}
            username={card.username}
            password={card.password}
            type={card.type}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
