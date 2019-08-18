import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

class Welcome extends React.Component {
  render() {
    return (
      <h1 className='orange-boy'><span>Hello World homies whats poooopin</span></h1>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));