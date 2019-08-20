import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import logoIcon from './assets/logo.svg';


function Home() {
  return (
    <Header currentPage="Home" />
  )
}

class Header extends React.Component {
  handleClick = (e) => {
    const header = document.getElementsByClassName("header")[0];
    const navMenu = document.getElementsByClassName("header__nav")[0];

    e.currentTarget.classList.toggle("is-active");
    header.classList.toggle("header--visible-nav");
    navMenu.classList.toggle("header__nav--visible");
  }

  render() {
    return (
      <header className="header">
        <a href="index.html" className="header__logo-container">
          <img src={logoIcon} alt="typerite's logo" className="header__logo" />
        </a>
        <Hamburger onClick={this.handleClick} />
        <NavMenu currentPage={this.props.currentPage} />
      </header>
    );
  }
}

function Hamburger(props) {
  return (
    <button className="hamburger hamburger--spin" type="button" onClick={props.onClick}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>

  )
}

class NavMenu extends React.Component {
  handleClick = (e) => {
    const submenu = document.getElementsByClassName('header__nav-sublist')[0];

    e.target.classList.toggle("header__nav-sublist-head--open");
    submenu.classList.toggle("header__nav-sublist--visible");
  }


  render() {
    const links = ["Home", "Posts", "About", "Contact"].map((val) => {
      return val === this.props.currentPage ? <li key={val} className="header__nav--current-page"><a href={`${val === "Home" ? "index" : val}.html`}>{val}</a></li> : <li key={val}><a href={`${val === "Home" ? "index" : val}.html`}>{val}</a></li>
    });

    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          {
            links.map((elem) => {
              if (elem.key === "Posts") {
                return (
                  <li key={elem.key} className={`${elem.props.className ? elem.props.className : ''} header__nav-sublist-head`} onClick={this.handleClick}>
                    Posts
                <ul className="header__nav-sublist">
                      <li key="standard post"><a href="standard-post.html">standard post</a></li>
                      <li key="video gallery"><a href="video-post.html">video gallery</a></li>
                      <li key="audio post"><a href="audio-post.html">audio post</a></li>
                      <li key="gallery post"><a href="gallery-post.html">gallery post</a></li>
                    </ul>
                  </li>
                )
              }
              else return elem;
            })
          }
        </ul>
        <NavSocial />
      </nav>
    )
  }
}

function NavSocial() {
  return (
    <ul className="header__social">
      <li><a href="#" className="header__social-icon header__social-icon--facebook"></a></li>
      <li><a href="#" className="header__social-icon header__social-icon--twitter"></a></li>
      <li><a href="#" className="header__social-icon header__social-icon--dribble"></a></li>
      <li><a href="#" className="header__social-icon header__social-icon--pinterest"></a></li>
    </ul>
  )
}

ReactDOM.render(<Home />, document.getElementById("root"));