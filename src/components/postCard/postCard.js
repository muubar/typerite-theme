import React from "react";
import "./postCard.scss";

export default class PostCard extends React.Component {
  render() {
    return (
      <article>
        <CardImage images={this.props.images} link={this.props.link} postType={this.props.postType} />
        <CardTitle title={this.props.title} categories={this.props.categories} date={this.props.date} />
        <p>
          {this.props.text}
        </p>
      </article>
    )
  }
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

function CardTitle() {
  return (
    <header>
      <h2></h2>
      <div>
        <span></span>
        <time></time>
      </div>
    </header>
  )
}