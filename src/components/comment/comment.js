import React from "react";
import "./comment.scss";

export default function Comment({ name, date, body, avatar }) {
  return (
    <>
      <div className="comment__avatar-container">
        <img src={avatar} className="comment__avatar"></img>
      </div>
      <div className="comment__container">
        <div className="comment__title">
          <div className="comment__name">{name}</div>
          <div>
            <time className="comment__date">{date}</time>
            <a className="comment__reply">reply</a>
          </div>
        </div>
        <p className="comment__p">{body}</p>
      </div>
    </>
  )
}