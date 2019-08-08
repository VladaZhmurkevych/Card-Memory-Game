
const mediumGame = {
  cardsList: [
    {
      name: "1",
      id: 1,
      image: '/images/beach.png'

    },
    {
      name: "2",
      id: 2,
      image: '/images/campsite.png'

    },
    {
      name: "3",
      id: 3,
      image: '/images/cinema.svg'

    },
    {
      name: "4",
      id: 4,
      image: '/images/digital-camera.png'

    },
    {
      name: "5",
      id: 5,
      image: '/images/fishing.png'
    },
    {
      name: "6",
      id: 6,
      image: '/images/hiking.png'

    },
    {
      name: "7",
      id: 7,
      image: '/images/ice-cream.png'

    },
    {
      name: "8",
      id: 8,
      image: '/images/take-off.png'

    },
  ],
  time: 120000,
  title: "medium",
};

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
    let cards = [...mediumGame.cardsList, ...mediumGame.cardsList];
    shuffle(cards);
    const game = {
      cards: cards,
      title: mediumGame.title,
      time: mediumGame.time,
    };
    res.json({
      status: 'OK', game
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