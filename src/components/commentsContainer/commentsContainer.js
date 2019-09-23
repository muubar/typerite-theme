import React from "react";
import "./commentsContainer.scss";


export default function CommentsContainer({ comments }) {
  return (
    <section className="generic-container">
      <h3 className="post-h3 post-h3--top-border">{`${comments.length} comments`}</h3>
      <ol className="comments-list">
        {
          comments.map((comment, i) => {
            return (
              <li key={i} className="comments-list__item">{comment}</li>
            )
          })
        }
      </ol>
    </section>
  )
}