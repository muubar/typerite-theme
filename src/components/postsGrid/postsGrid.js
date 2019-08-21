import React from "react";
import "./postsGrid.scss";

export default function PostsGrid(props) {
  return (
    <main className="posts-grid">
      {props.posts.map((elem) => React.cloneElement(elem, { key: elem.props.title }))}
    </main>
  )
}