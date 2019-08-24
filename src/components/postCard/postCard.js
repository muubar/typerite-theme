import React from "react";
import "./postCard.scss";
import ImageGallery from 'react-image-gallery';

export default function PostCard(props) {
  return (
    <article className="post-card">
      <CardGallery images={props.images} link={props.link} postType={props.postType} />
      <div className="post-card__title-container">
        <CardTitle title={props.title} categories={props.categories} date={props.date} />
        <p>
          {props.text}
        </p>
      </div>
    </article >
  )
}

function CardGallery(props) {
  if (props.postType === "gallery") {
    return (
      <ImageGallery items={props.images} showThumbnails={false} showBullets={true} showFullscreenButton={false}
        showPlayButton={false} autoPlay={true} />
    )
  }
  return (
    <a href={props.link}>
      <ImageGallery items={props.images} showThumbnails={false} showFullscreenButton={false}
        showPlayButton={false} additionalClass={!props.postType ? "post-card__img" :
          (props.postType === "audio" ? "post-card__img-audio" : "post-card__img-video")} />
    </a>
  )

}


function CardTitle(props) {
  return (
    <header>
      <h2>{props.title}</h2>
      <div>
        <span>{props.categories}</span>
        <time>{props.date}</time>
      </div>
    </header>
  )
}