import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header/header";
import PostsGrid from "./components/postsGrid/postsGrid";
import PagesNav from "./components/PagesNav/PagesNav";
import SmoothScroll from "./components/smoothScroll/smoothScroll";
import Footer from "./components/footer/footer";

import posts from "./posts";


function Home() {
  return (
    <>
      <Header currentPage="Home" />
      <PostsGrid posts={posts} />
      <PagesNav pagesNum={5} currentPage={2} />
      <SmoothScroll />
      <Footer />
    </>
  )
}

ReactDOM.render(<Home />, document.getElementById("root"));