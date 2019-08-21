import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import PostCard from "./components/postCard/postCard";
import PostsGrid from "./components/postsGrid/postsGrid";

import beetleLow from "./assets/posts/beetle-600.jpg"
import beetleHigh from "./assets/posts/beetle-1200.jpg"
import cookiesLow from "./assets/posts/cookies-600.jpg"
import cookiesHigh from "./assets/posts/cookies-1200.jpg"
import guitaristLow from "./assets/posts/guitarist-600.jpg"
import guitaristHigh from "./assets/posts/guitarist-1200.jpg"



function Home() {
  const post1 = <PostCard images={[[beetleLow, beetleHigh, "beetle"], [cookiesLow, cookiesHigh, "cookies"], [guitaristLow, guitaristHigh, "guitarist"]]} link="standard-post.html" postType="audio" title="Throwback To The Good Old Days" date="APR 24, 2019" categories={["lifestyle", "family"]} text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor
          nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..."/>

  return (
    <div>
      <Header currentPage="Home" />
      <PostsGrid posts={[post1]} />
    </div>
  )
}

ReactDOM.render(<Home />, document.getElementById("root"));