import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";
import GithubLink from "./components/GithubLink";

function App() {
  return (
    <div>
      <Header />
      <GithubLink />
      <CardsContainer />
    </div>
  );
}

export default App;
