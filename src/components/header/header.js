import React from "react";
import "./header.scss";
import logoIcon from '../../assets/logo.svg';


export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { isNavVisible: false }
  }

  handleClick = () => {
    this.setState((prevState) => ({ isNavVisible: !prevState.isNavVisible }));
  }

  render() {
    return (
      <header className={`header ${this.state.isNavVisible ? "header--visible-nav" : ""}`}>
        <a href="index.html" className="header__logo-container">
          <img src={logoIcon} alt="typerite's logo" className="header__logo" />
        </a>
        <Hamburger onClick={this.handleClick} isNavVisible={this.state.isNavVisible} />
        <NavMenu currentPage={this.props.currentPage} isNavVisible={this.state.isNavVisible} />
      </header>
    );
  }
}

function Hamburger(props) {
  return (
    <button className={`hamburger hamburger--spin ${props.isNavVisible ? "is-active" : ""}`} type="button" onClick={props.onClick}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>

  )
}

class NavMenu extends React.Component {
  constructor() {
    super();
    this.state = { isSublistVisible: false };
  }

  handleClick = () => {
    this.setState((prevState) => ({ isSublistVisible: !prevState.isSublistVisible }));
  }


  render() {
    const links = ["Home", "Posts", "About", "Contact"].map((val) => {
      return (
        val === this.props.currentPage ?
          <li key={val} className="header__nav--current-page">
            <a href={`${val === "Home" ? "index" : val}.html`}>{val}</a>
          </li>
          :
          <li key={val}>
            <a href={`${val === "Home" ? "index" : val}.html`}>{val}</a>
          </li>
      )
    });

    return (
      <nav className={`header__nav ${this.props.isNavVisible ? "header__nav--visible" : ""}`}>
        <ul className="header__nav-list">
          {
            links.map((elem) => {
              if (elem.key === "Posts") {
                return (
                  <li key={elem.key}
                    className={`${elem.props.className ? elem.props.className : ''} header__nav-sublist-head 
                  ${this.state.isSublistVisible ? "header__nav-sublist-head--open" : ""}`} onClick={this.handleClick}>
                    Posts
                <ul className={`header__nav-sublist ${this.state.isSublistVisible ? "header__nav-sublist--visible" : ""}`}>
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