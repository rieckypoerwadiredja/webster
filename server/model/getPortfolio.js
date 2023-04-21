const portofolio = [
  {
    id: 1,
    type: "Landscapes",
    title:
      "A collection of the most interesting photos and galleries taken during the flights.",
    creator: {
      name: "Andreas Moris",
      desc: "Blog Director",
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "drone",
    },
    background:
      "https://plus.unsplash.com/premium_photo-1674635190997-1dcd4d61db13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
    bgPadding: true,
  },
  {
    id: 2,
    type: "Tutorials",
    title:
      "Top 10 Best equipment for beginners. Selection and advice when buying drone.",
    creator: {
      name: "John Moris",
      desc: "We created diagrams and analyzes",
      src: null,
      alt: "drone",
    },
    background:
      "https://images.unsplash.com/photo-1553165558-424ffa9c4303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    bgPadding: false,
  },
  {
    id: 3,
    type: "Working with technology",
    title:
      "Many honors and awards in photography world. Please check and view our portfolio gallery with detailed descriptions.",
    creator: {
      name: "Vinicius Moreno",
      desc: "Diagrams and analyzes",
      src: null,
      alt: "drone",
    },
    background: null,
    bgPadding: false,
  },
  {
    id: 4,
    type: "Portfolio",
    title: "Portfolio gallery with detailed descriptions.",
    creator: {
      name: "Andreas Moris",
      desc: "Blog Director",
      src: null,
      alt: "drone",
    },
    background: null,
    image:
      "https://images.unsplash.com/photo-1500472880779-eb5d1e15fe65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    bgPadding: false,
  },
];

// eslint-disable-next-line arrow-body-style
const getPortfolio = async () => {
  return portofolio;
};

module.exports = {
  getPortfolio,
};
