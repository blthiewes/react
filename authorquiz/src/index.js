import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import * as serviceWorker from "./serviceWorker";
import { shuffle, sample } from "underscore";

const authors = [
  {
    name: "Mark Twain",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Twain1909.jpg/220px-Twain1909.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      "The Adventures of Huckleberry Finn",
      "Life on the Mississippi",
      "Roughing It"
    ]
  },
  {
    name: "J. K. Rowling",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/220px-J._K._Rowling_2010.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      "Harry Potter and the Philosopher's Stone",
      "Fantastic Beasts and Where to Find Them",
      "The Casual Vacancy"
    ]
  },
  {
    name: "Stephen King",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Stephen_King%2C_Comicon.jpg/220px-Stephen_King%2C_Comicon.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      "Carrie",
      "It",
      "The Dark Tower"
    ]
  },
  {
    name: "Charles Dickens",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/200px-Dickens_Gurney_head.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      "A Christmas Carol",
      "David Copperfield ",
      "Oliver Twist"
    ]
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function(p, c, i) {
    return p.concat(c.books);
  }, []);

  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find(author => author.books.some(title => title === answer))
  };
}

const state = {
  turnData: getTurnData(authors)
};

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
