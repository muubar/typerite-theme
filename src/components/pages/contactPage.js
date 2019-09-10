import React from "react";
import "./pages-base.scss";

import Header from "../header/header";
import Footer from "../footer/footer";

import lowImg from "../../assets/contact/contact-500.jpg";
import medImg from "../../assets/contact/contact-1000.jpg";
import highImg from "../../assets/contact/contact-2000.jpg";

export default function contactPage() {
  return (
    <>
      <div className="post--white-background">
        <Header />
        <main className="post-container">
          <img className="post-header__img" srcSet={`${highImg} 2000w, ${medImg} 1000w, ${lowImg} 500w`} sizes="(max-width: 2000px) 100vw, 2000px"
            src={medImg} alt="mail box" />
          <h1 className="post-header__title">Get In Touch.</h1>
          <p className="post-header__p">Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.</p>

          <p className="post-p">Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint</p>
          <div className="msgs-container">
            <div className="msg">
              <h4 className="post-h4">Where to Find Us</h4>
              <address className="post-address">
                1600 Amphitheatre Parkway <br />
                Mountain View, CA <br />
                94043 US
          </address>
            </div>
            <div className="msg">
              <h4 className="post-h4">Contact Info</h4>
              <address className="post-address">sayhello@typerite.com <br />
                info@typerite.com <br />
                Phone: +197 543 2345 </address>
            </div>
          </div>
          <h3 className="post-h3">Say Hello</h3>
          <form id="form" className="form">
            <fieldset className="form__fieldset">
              <div className="form__input-group">
                <label htmlFor="name">Name:</label>
                <input className="form__input" type="text" id="name" name="name" required maxLength="16" placeholder="John Doe" />
              </div>
              <div className="form__input-group">
                <label htmlFor="email">Email:</label>
                <input className="form__input" type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>
              <div className="form__input-group">
                <label htmlFor="text">Website:</label>
                <input className="form__input" type="text" id="text" name="text" required placeholder="john-doe.co.uk" />
              </div>
              <div className="form__input-group">
                <label htmlFor="msg">Message:</label>
                <textarea name="msg" className="form__textarea" id="msg" required />
              </div>
            </fieldset>
            <button className="form__button" type="submit" form="form">send Message</button>
          </form>
        </main>
        <Footer />
      </div>
    </>
  )
}

