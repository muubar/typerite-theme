import React from "react";

import Header from "../header/header";
import PostsGrid from "../postsGrid/postsGrid";
import PagesNav from "../PagesNav/PagesNav";
import SmoothScroll from "../smoothScroll/smoothScroll";
import Footer from "../footer/footer";

import posts from "./homePage-posts";


export default function Home() {
  return (
    <>
      <Header />
      <PostsGrid posts={posts} />
      <PagesNav pagesNum={5} currentPage={2} />
      <SmoothScroll />
      <Footer />
    </>
  )
}