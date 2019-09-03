import React from "react";
import "./pagesNav.scss";


export default function pagesNav(props) {
  function generatePagesLinks(num, current) {
    var elems = [];
    elems.push(<li className="prev-button" key={"prev"}><a>{"<"}</a></li>)

    for (let i = 1; i <= num; i++) {
      elems.push(
        <li key={i}>
          {i === current ? <a className="current">{i}</a> : <a>{i}</a>}
        </li>
      )
    }

    elems.push(<li className="next-button" key={"next"}><a>{">"}</a></li>)
    return elems;
  }

  return (
    <nav>
      <ul>
        {generatePagesLinks(props.pagesNum, props.currentPage)}
      </ul>
    </nav>
  )
}