import React from "react";
import { Link } from "react-router-dom";
import "./pages-base.scss";
import "./standardPostsPage.scss"

import Header from "../header/header";
import Footer from "../footer/footer";
import CommentsContainer from "../commentsContainer/commentsContainer";
import comments from "./standardPostPage-comments";

import lowImg from "../../assets/standard/standard-500.jpg";
import medImg from "../../assets/standard/standard-1000.jpg";
import highImg from "../../assets/standard/standard-2000.jpg";

import lowWeheel from "../../assets/standard/wheel-500.jpg";
import medWheel from "../../assets/standard/wheel-1000.jpg";
import highWheel from "../../assets/standard/wheel-2000.jpg";

import related1 from "../../assets/posts/lamp-600.jpg"
import related2 from "../../assets/posts/jump-600.jpg"
import related3 from "../../assets/posts/woodcraft-600.jpg"

export default function StandardPost() {
  return (
    <>
      <div className="post--white-background">
        <Header />
        <main className="post-container">
          <img className="post-header__img" srcSet={`${highImg} 2000w, ${medImg} 1000w, ${lowImg} 500w`} sizes="(max-width: 2000px) 100vw, 2000px"
            src={medImg} alt="hotel lobby" />
          <header>
            <h1 className="post-header__title">This Is A Standard Format Post.</h1>
            <ul className="post-meta">
              <li className="post-meta__item">By <Link to="/" className="post-header__author">Johnathan Doe</Link></li>
              <li className="post-meta__item">April 30, 2019</li>
              <li className="post-meta__item">Marketing, Management</li>
            </ul>
          </header>
          <p className="post-header__p">Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.</p>

          <p className="post-p">Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat.</p>

          <img className="post-img" srcSet={`${highWheel} 2000w, ${medWheel} 1000w, ${lowWeheel} 500w`} sizes="(max-width: 2000px) 100vw, 2000px"
            src={medWheel} alt="wheel" />

          <h2 className="post-h2">Large Heading</h2>
          <p className="post-p">Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus <Link to="/" className="post-p__a">omnis voluptas assumenda</Link> est id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.</p>

          <blockquote className="post-blockquote">
            <p className="post-blockquote__p">
              For God so loved the world, that he gave his only Son, that whoever believes in
              him should not perish but have eternal life. For God did not send his Son into
              the world to condemn the world, but in order that the world might be
              saved through him.
                            </p>
            <cite className="post-blockquote__cite">John 3:16-17 ESV</cite>
          </blockquote>
          <p className="post-p">Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>

          <h4 className="post-h4">Smaller Heading</h4>
          <p className="post-p">Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>

          <pre className="post-code">
            <code>
              <div>code 	&#123;</div>
              <div>    font - size: 1.4rem;</div>
              <div>    margin: 0 .2rem;</div>
              <div>    padding: .2rem .6rem;</div>
              <div>    white-space: nowrap;</div>
              <div>    background: #F1F1F1;</div>
              <div>    border: 1px solid #E1E1E1;</div>
              <div>    border-radius: 3px;</div>
              <div>&#125;</div>
            </code>
          </pre>

          <p className="post-p">Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>

          <ul className="post-p post-ul">
            <li>Donec nulla non metus auctor fringilla.
              <ul className="post-p post-ul__nested-list">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </li>
            <li>Donec nulla non metus auctor fringilla.</li>
            <li>Donec nulla non metus auctor fringilla.</li>
          </ul>

          <p className="post-p">Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>
        </main >
        <PostTags />
        <ArticleNav />
        <RelatedArticlesNav />
        <CommentsContainer comments={comments} />
        <section className="post-container">
          <h3 className="post-h3 post-h3--no-top-margin">Add Comment</h3>
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
            <button className="form__button" type="submit" form="form">add comment</button>
          </form>
        </section>
        <Footer />
      </div>
    </>
  )
}

function PostTags() {
  return (
    <div className="generic-container tags">
      <p className="tags__p">Post Tags</p>
      <ul className="tags__list">
        <li><Link to="/" className="tags__list-item">orci</Link></li>
        <li><Link to="/" className="tags__list-item">varius</Link></li>
        <li><Link to="/" className="tags__list-item">lecus</Link></li>
        <li><Link to="/" className="tags__list-item">turpis</Link></li>
      </ul>
    </div>
  )
}

function ArticleNav() {
  return (
    <nav className="generic-container">
      <div className=" article-nav">
        <div className="article-nav__container">
          <span className="article-nav__p">previous post</span>
          <Link to="/" className="article-nav__a">Tips on Minimalist Design</Link>
        </div>
        <div className="article-nav__container">
          <span className="article-nav__p">previous post</span>
          <Link to="/" className="article-nav__a">Less Is More</Link>
        </div>
      </div>
    </nav>
  )
}

function RelatedArticlesNav() {
  return (
    <nav className="generic-container">
      <h3 className="post-h3 post-h3--top-border">Related Articles</h3>
      <div className=" related-nav">
        <Link to="/" className="related-nav__container">
          <img className="related-nav__img" src={related1} alt="lamp" />
          <span className="related-nav__p">Using Repetition and Patterns in Photography.</span>
        </Link>
        <Link to="/" className="related-nav__container">
          <img className="related-nav__img" src={related2} alt="jumping family" />
          <span className="related-nav__p">Health Benefits Of Morning Dew</span>
        </Link>
        <Link to="/" className="related-nav__container">
          <img className="related-nav__img" src={related3} alt="woodcraft" />
          <span className="related-nav__p">The Art Of Visual Storytelling</span>
        </Link>
      </div>
    </nav>
  )
}