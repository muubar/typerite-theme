import React from "react";
import { NavLink, Link } from "react-router-dom";
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
        <Link to="/" className="header__logo-container">
          <img src={logoIcon} alt="typerite's logo" className="header__logo" />
        </Link>
        <Hamburger onClick={this.handleClick} isNavVisible={this.state.isNavVisible} />
        <NavMenu isNavVisible={this.state.isNavVisible} />
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
    const links = ["home", "posts", "about", "contact"].map((val) => {
      return (
        <li key={val}>
          <NavLink to={`${val === "home" ? "/" : val}`} exact className="header__nav-list-link" activeClassName="header__nav--current-page">
            {val[0].toUpperCase() + val.substr(1)}
          </NavLink>
        </li>
      )
    });

    return (
      <nav className={`header__nav ${this.props.isNavVisible ? "header__nav--visible" : ""}`}>
        <ul className="header__nav-list">
          {
            links.map((elem) => {
              if (elem.key === "posts") {
                return (
                  <li key={elem.key}
                    className={`${elem.props.className ? elem.props.className : ''} header__nav-sublist-head 
                  ${this.state.isSublistVisible ? "header__nav-sublist-head--open" : ""}`} onClick={this.handleClick}>
                    posts
                <ul className={`header__nav-sublist ${this.state.isSublistVisible ? "header__nav-sublist--visible" : ""}`}>
                      {
                        ["standard post", "video post", "audio post", "gallery post"].map((val) => {
                          return (
                            <li key={val}>
                              <NavLink to={`/posts/${urlify(val)}`} className="header__nav-list-link" activeClassName="header__nav--current-page">
                                {val}
                              </NavLink>
                            </li>
                          )
                        })
                      }
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
      <li><Link to="/" className="header__social-icon header__social-icon--facebook"></Link></li>
      <li><Link to="/" className="header__social-icon header__social-icon--twitter"></Link></li>
      <li><Link to="/" className="header__social-icon header__social-icon--dribble"></Link></li>
      <li><Link to="/" className="header__social-icon header__social-icon--pinterest"></Link></li>
    </ul>
  )
}

function urlify(str) {
  const spaceIdx = str.indexOf(" ");
  return str.slice(0, spaceIdx) + "-" + str.slice(spaceIdx + 1);
}