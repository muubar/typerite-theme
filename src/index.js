import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";


function Home() {
  return (
    <Header currentPage="Home" />
  )
}

ReactDOM.render(<Home />, document.getElementById("root"));