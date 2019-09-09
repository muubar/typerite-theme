import React from "react";
import "./postsGrid.scss";
import throttle from "lodash-es/throttle";
import chunk from "lodash-es/chunk";


export default class PostsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colCount: 1 };
    this.throttledHandleWindowResize = throttle(this.HandleWindowResize, 200);
  }

  //https://stackoverflow.com/a/44122804
  splitPosts = (posts, num) => {
    if (num === 1) return [posts];
    var postsArrs = [];
    const maxColLength = Math.round(posts.length / num)
    const nestedArray = chunk(posts, maxColLength)
    for (var i = 0; i < num; i++) {
      postsArrs[i] = nestedArray[i] || []
    }
    return postsArrs
  }

  HandleWindowResize = () => {
    if (window.innerWidth >= 1500) {
      return this.setState({ colCount: 3 });
    }
    if (window.innerWidth >= 800) {
      return this.setState({ colCount: 2 });
    }
    else this.setState({ colCount: 1 });
  }

  generateCols = () => {
    let postsArrs = this.splitPosts(this.props.posts, this.state.colCount);
    var elements = [];
    for (let i = 0; i < postsArrs.length; i++) {
      elements.push(
        <div key={i} className="posts-grid__column">
          {postsArrs[i].map((elem) => React.cloneElement(elem, { key: elem.props.title }))}
        </div>
      )
    }
    return elements;
  }

  componentDidMount() {
    window.addEventListener('resize', this.throttledHandleWindowResize);
    this.HandleWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttledHandleWindowResize);
  }


  render() {
    return (
      <main className="posts-grid">
        {this.generateCols()}
      </main>
    )
  }
}