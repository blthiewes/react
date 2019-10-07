import React from "react";
import "./AuthorQuiz.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offeset-1">
        <h1>AuthorQuiz</h1>
        <p>Select the book writeen by the author shown</p>
      </div>
    </div>
  );
}

function Book({title}) {
  return <div className="answer">
    <h4>{title}</h4>
  </div>;
}

function Turn({ author, books }) {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img
          src={author.imageUrl}
          className="authorimage"
          alt="author"
        ></img>
      </div>
      <div className="col-6">
        {books.map(title => (
          <Book title={title} key ={title}></Book>
        ))}
      </div>
    </div>
  );
}

function Continue() {
  return <div></div>;
}

function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from{" "}
          <a href="http://commons.wikimedia.org/wiki/Main" > here</a>
        </p>
      </div>
    </div>
  );
}

function AuthorQuiz({turnData}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData}/>
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
