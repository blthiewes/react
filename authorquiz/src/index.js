import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import * as serviceWorker from "./serviceWorker";
import { shuffle, sample } from "underscore";
import AddAuthorForm from "./AddAuthorForm";

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
    books: ["Carrie", "It", "The Dark Tower"]
  },
  {
    name: "Charles Dickens",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/200px-Dickens_Gurney_head.jpg",
    imageSource: "Wikimedia Commons",
    books: ["A Christmas Carol", "David Copperfield ", "Oliver Twist"]
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

function reducer(
  state = { authors, turnData: getTurnData(authors), highlight: "" },
  action
) {
  switch (action.type) {
    case "ANSWER_SELECTED":
      const isCorrect = state.turnData.author.books.some(
        book => book === action.answer
      );
      return Object.assign({}, state, {
        highlight: isCorrect ? "correct" : "wrong"
      });
    case "CONTINUE":
      return Object.assign({}, state, {
        highlight: "",
        turnData: getTurnData(state.authors)
      });
    case "ADD_AUTHOR":
      return Object.assign({}, state, {
        authors: state.authors.concat([action.author])
      });
    default:
      return state;
  }
}

let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <BrowserRouter>
    <ReactRedux.Provider store={store}>
      <React.Fragment>
        <Route exact path="/" component={AuthorQuiz} />
        <Route path="/add" component={AddAuthorForm} />
      </React.Fragment>
    </ReactRedux.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
