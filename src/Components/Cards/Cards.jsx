import Card from "./Card";

const cardsData = [
  {
    name: "Example 1",
    url: "https://example1.com",
    username: "user1",
    password: "pass1",
  },
  {
    name: "Example 2",
    url: "https://example2.com",
    username: "user2",
    password: "pass2",
  },
  {
    name: "Example 3",
    url: "https://example3.com",
    username: "user3",
    password: "pass3",
  },
  {
    name: "Example 4",
    url: "https://example4.com",
    username: "user4",
    password: "pass4",
  },
  {
    name: "Example 5",
    url: "https://example5.com",
    username: "user5",
    password: "pass5",
  },
  {
    name: "Example 6",
    url: "https://example6.com",
    username: "user6",
    password: "pass6",
  },
  {
    name: "Example 7",
    url: "https://example7.com",
    username: "user7",
    password: "pass7",
  },
  {
    name: "Example 8",
    url: "https://example8.com",
    username: "user8",
    password: "pass8",
  },

  {
    name: "Example 9",
    url: "https://example9.com",
    username: "user9",
    password: "pass9",
  },
  {
    name: "Example 10",
    url: "https://example10.com",
    username: "user10",
    password: "pass10",
  },
  {
    name: "Example 11",
    url: "https://example11.com",
    username: "user11",
    password: "pass11",
  },
  {
    name: "Example 12",
    url: "https://example12.com",
    username: "user12",
    password: "pass12",
  },
  {
    name: "Example 13",
    url: "https://example13.com",
    username: "user13",
    password: "pass13",
  },
  {
    name: "Example 14",
    url: "https://example14.com",
    username: "user14",
    password: "pass14",
  },
  {
    name: "Example 15",
    url: "https://example15.com",
    username: "user15",
    password: "pass15toujoursbienlong",
  },
  {
    name: "Example 16",
    url: "https://example16.com",
    username: "user16",
    password: "pass16",
  },
];

const Cards = () => {
  function pasteHandler() {
    navigator.clipboard.writeText(pwd);
    setPopupSuccess(true);
    setTimeout(() => {
      setPopupSuccess(false);
    }, 3000);
  }

  return (
    <div className="flex justify-center flex-wrap">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          url={card.url}
          username={card.username}
          password={card.password}
          onClick={pasteHandler}
        />
      ))}
    </div>
  );
};

export default Cards;
