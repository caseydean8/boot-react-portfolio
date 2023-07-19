import Submarine from './images-600x338/Submarine.webp';
import ShoppingApp from './images-600x338/shopity.webp';
import BookSafe from './images-600x338/book-safe.webp';
import Crystal from './images-600x338/crystal-vibes.webp';
import ProMgmt from './images-600x338/projectMgmt.webp';
import HonesdaleCC from './images-600x338/honesdale-cc-portfolio.webp';

const data = [
  {
    id: 'submarine',
    image: Submarine,
    link: 'https://blooming-peak-13476.herokuapp.com/',
    title: 'Submarine',
    repo: 'https://github.com/caseydean8/submarine',
    text: 'Submarine is a subscription tracking app built with the react, node, mongo, express, and bootstrap.',
  },
  {
    id: 'honesdale-cc',
    image: HonesdaleCC,
    link: 'https://www.honesdalecc.org/',
    title: 'Honesdale Community Church',
    repo: 'https://github.com/caseydean8/honesdale-cc-next',
    text: "Website of the Honesdale Community Church that utilizes Hygraph's CMS to allow church admins to update the event page. Built with Next.js and Bootstrap.",
  },
  {
    id: 'shopping-app',
    image: ShoppingApp,
    link: 'https://shopity.herokuapp.com/',
    title: 'Shopity',
    repo: 'https://github.com/caseydean8/shopity-app',
    text: 'Shopity is helpful shopping assistant that allows users to login and create a list of pantry items, which can then be added to an active shopping list and finally a virtual cart. Shopity was created with the Pug, SQL, and express.',
  },
  {
    id: 'graphql-mgmt',
    image: ProMgmt,
    link: 'https://graphql-mgmt.herokuapp.com/',
    title: 'GraphQL MGMT',
    repo: 'https://github.com/caseydean8/GraphQL-MGMT-App',
    text: 'GraphQL MGMT is a full stack application using the GraphQL query management system. Users can create, update, and delete clients as well as their related projects. Built with React, Express, MongoDB, Apollo, and Bootstrap 5. ',
  },
  {
    id: 'book-safe',
    image: BookSafe,
    link: 'https://book-safe-react.herokuapp.com/',
    title: 'Book Safe',
    repo: 'https://github.com/caseydean8/book-safe',
    text: 'Book Safe is a full stack MERN application that allows the user to search for a book title and retrieve information including the author, a thumbnail of the cover, and a link to google books. The user can then save that information for future reference.\n \n The application utilizes the following technologies: \n React \n Node \n Express \n MongoDB \n Heroku \n axios \n bootstrap',
  },
  {
    id: 'crystal-vibes',
    image: Crystal,
    link: 'https://caseydean8.github.io/crystal-vibes/',
    title: 'Crystal Vibes',
    repo: 'https://github.com/caseydean8/crystal-vibes',
    text: 'This app utilizes jQuery to render a number guessing game. \n A random number is displayed, and each of four crystal buttons is assigned a secret value. \n Click a button and that value is added to your score. If you can match the target number, praise an adulation commence. If not . .  .',
  },
  // {
  //   id: "",
  //   image: "",
  //   link: ""
  //   title: "",
  //   repo: "",
  //   text: ""
  // },
];

export default data;
