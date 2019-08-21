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

function CardImage(props) {
  return (
    <a href={props.link} className="post-card__img-container">
      {
        Array.isArray(props.images[0]) ? props.images.map(([imgLow, imgHigh, alt]) => <img className="post-card__img" key={alt} srcSet={`${imgLow} 1x, ${imgHigh} 2x`} src={imgLow} alt={alt} />) :
          <img src={props.images[0]} srcSet={`${props.images[0]} 1x, ${props.images[1]} 2x`} alt={props.images[2]} />
      }
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