const cardsList = [
  {
    name: "1"
  },
  {
    name: "2"
  },
  {
    name: "3"
  },
  {
    name: "4"
  },
  {
    name: "5"
  },
  {
    name: "6"
  },
  {
    name: "7"
  },
  {
    name: "8"
  },
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const getCards = async (req, res) => {
  try {
    let cards = [...cardsList, ...cardsList];
    shuffle(cards);
    res.json({
      status: 'OK', cards
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: 'ERROR', error: e
    });
  }
};

module.exports = {
  getCards,
};