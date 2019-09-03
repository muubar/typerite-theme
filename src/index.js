import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header/header";
import PostCard from "./components/postCard/postCard";
import PostsGrid from "./components/postsGrid/postsGrid";
import PagesNav from "./components/PagesNav/PagesNav";

import beetleLow from "./assets/posts/beetle-600.jpg"
import beetleHigh from "./assets/posts/beetle-1200.jpg"
import cookiesLow from "./assets/posts/cookies-600.jpg"
import cookiesHigh from "./assets/posts/cookies-1200.jpg"
import dewLow from "./assets/posts/dew-600.jpg"
import dewHigh from "./assets/posts/dew-1200.jpg"


function Home() {
  const post1 = <PostCard 
  images = {[Image(beetleLow, beetleHigh, "beetle"), Image(cookiesLow, cookiesHigh, "cookies"), Image(dewLow, dewHigh, "dew plant")]}
  link="standard-post.html" 
  postType="gallery" 
  title="Throwback To The Good Old Days" 
  date="APR 24, 2019" 
  categories={["lifestyle", "family"]} 
  text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor
          nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..."
          />
          
  const post2 = <PostCard 
  images = {[Image(beetleLow, beetleHigh, "beetle")]}
  link="standard-post.html"
  title="Single image" 
  date="APR 24, 2019" 
  categories={["lifestyle"]} 
  text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor
          nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..."
          />

    const post3 = <PostCard 
  images = {[Image(cookiesLow, cookiesHigh, "cookies")]}
  link="standard-post.html"
  title="a video post" 
  postType="audio"
  date="APR 24, 2019" 
  categories={["lifestyle"]} 
  text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor
          nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..."
          />

            const post4 = <PostCard 
  images = {[Image(beetleLow, beetleHigh, "beetle"), Image(cookiesLow, cookiesHigh, "cookies"), Image(dewLow, dewHigh, "dew plant")]}
  link="standard-post.html" 
  postType="gallery" 
  title="Throwback To The" 
  date="APR 24, 2019" 
  categories={["lifestyle"]} 
  text="Lorem"
          />

              const post5 = <PostCard 
  images = {[Image(cookiesLow, cookiesHigh, "cookies")]}
  link="standard-post.html"
  title="a video post 22" 
  postType="audio"
  date="APR 24, 2019" 
  categories={["lifestyle"]} 
  text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor
          nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliquaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa..."
          />

  const post6 = <PostCard
    images={[Image(beetleLow, beetleHigh, "beetle"), Image(cookiesLow, cookiesHigh, "cookies"), Image(dewLow, dewHigh, "dew plant")]}
    link="standard-post.html"
    postType="gallery"
    title="Throwback To Thas4e"
    date="APR 24, 2019"
    categories={["lifestyle"]}
    text="Loremeasdasxsde"
    />

  return (
    <>
      <Header currentPage="Home" />
      <PostsGrid posts={[post1, post2, post3, post4, post5, post6]}/>
      <PagesNav pagesNum={5} currentPage={2}/>
    </>
  )
}

ReactDOM.render(<Home />, document.getElementById("root"));

function Image(low, high, alt) {
  return {
    original: low,
    originalAlt: alt,
    srcSet: `${low} 1x, ${high} 2x`,
  }
}