import React from "react";
import "./contactPage.scss";

import Header from "../header/header";
import Footer from "../footer/footer";

import lowImg from "../../assets/contact/contact-500.jpg";
import medImg from "../../assets/contact/contact-1000.jpg";
import highImg from "../../assets/contact/contact-2000.jpg";

export default function contactPage() {
  return (
    <>
      <Header />
      <main>
        <img srcSet={`${highImg} 2000w, ${medImg} 1000w, ${lowImg} 500w`} sizes="(max-width: 2000px) 100vw, 2000px"
          src={medImg} alt="mail box" />
        <h1>Get In Touch.</h1>
        <p className="title_p">Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.</p>

        <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint</p>
        <div className="msgs-container">
          <div className="msg">
            <h4>Where to Find Us</h4>
            <address>
              1600 Amphitheatre Parkway <br />
              Mountain View, CA <br />
              94043 US
          </address>
          </div>
          <div className="msg">
            <h4>Contact Info</h4>
            <address>sayhello@typerite.com <br />
              info@typerite.com <br />
              Phone: +197 543 2345 </address>
          </div>
        </div>
        <form>
          <fieldset>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required maxLength="16" placeHolder="John Doe" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required placeHolder="john@example.com" />
            <label htmlFor="text">Website:</label>
            <input type="text" id="text" name="text" required placeHolder="john-doe.co.uk" />
            <label htmlFor="text">Message:</label>
            <textarea name="msg" id="msg" required />
          </fieldset>
        </form>
      </main>
      <Footer />
    </>
  )
}

