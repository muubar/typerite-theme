import React from "react";
import "./pagesNav.scss";


export default function pagesNav(props) {
  function generatePagesLinks(num, current) {
    var elems = [];
    elems.push(<li key={"prev"}><a href="#0" className="pages-nav__page-button pages-nav__page-button--cursor">{"<"}</a></li>)

    for (let i = 1; i <= num; i++) {
      elems.push(
        <li key={i}>
          {i === current ? <a href="#0" className="pages-nav__page-button pages-nav__page-button--current">{i}</a> :
            <a href="#0" className="pages-nav__page-button">{i}</a>}
        </li>
      )
    }

    elems.push(<li key={"next"}><a href="#0" className="pages-nav__page-button pages-nav__page-button--cursor">{">"}</a></li>)
    return elems;
  }

  return (
    <nav>
      <ul className="pages-nav__list">
        {generatePagesLinks(props.pagesNum, props.currentPage)}
      </ul>
    </nav>
  )
}