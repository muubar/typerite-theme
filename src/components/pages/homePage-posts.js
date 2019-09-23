 import React from "react";
 import PostCard from "../postCard/postCard";

import beetleLow from "../../assets/posts/beetle-600.jpg"
import beetleHigh from "../../assets/posts/beetle-1200.jpg"
import cookiesLow from "../../assets/posts/cookies-600.jpg"
import cookiesHigh from "../../assets/posts/cookies-1200.jpg"
import woodLow from "../../assets/posts/woodcraft-600.jpg";
import woodHigh from "../../assets/posts/woodcraft-1200.jpg";
import rucksackLow from "../../assets/posts/rucksack-600.jpg";
import rucksackHigh from "../../assets/posts/rucksack-1200.jpg";
import jumpLow from "../../assets/posts/jump-600.jpg";
import jumpHigh from "../../assets/posts/jump-1200.jpg";
import guitaristLow from "../../assets/posts/guitarist-600.jpg";
import guitaristHigh from "../../assets/posts/guitarist-1200.jpg";
import lampLow from "../../assets/posts/lamp-600.jpg";
import lampHigh from "../../assets/posts/lamp-1200.jpg";
import slide1Low from "../../assets/posts/gallery/slide-1-600.jpg";
import slide1High from "../../assets/posts/gallery/slide-1-1200.jpg";
import slide2Low from "../../assets/posts/gallery/slide-2-600.jpg";
import slide2High from "../../assets/posts/gallery/slide-2-1200.jpg";
import slide3Low from "../../assets/posts/gallery/slide-3-600.jpg";
import slide3High from "../../assets/posts/gallery/slide-3-1200.jpg";
function Image(low, high, alt) {
  return {
    original: low,
    originalAlt: alt,
    srcSet: `${low} 1x, ${high} 2x`,
  }
}
 
 
const post1 = <PostCard 
images = {[Image(woodLow, woodHigh, "woodcraft")]}
link="standard-post" 
title="Just a Standard Format Post." 
date="APR 24, 2019" 
categories={["design", "photography"]} 
text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..." />
        
const post2 = <PostCard 
images = {[Image(beetleLow, beetleHigh, "beetle")]}
link="standard-post"
title="Throwback To The Good Old Days." 
date="APR 24, 2019" 
categories={["lifestyle"]} 
text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..." />

const post3 = <PostCard 
images = {[Image(cookiesLow, cookiesHigh, "cookies")]}
link="standard-post"
title="a video post" 
postType="video"
date="APR 24, 2019" 
categories={["lifestyle"]} 
text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..." />

const post4 = <PostCard 
images = {[Image(slide1Low, slide1High, "a green plant"), Image(slide2Low, slide2High, "a light green plant"), Image(slide3Low, slide3High, "green leafes")]}
link="standard-post" 
postType="gallery" 
title="The Best Tropical Leaves Images." 
date="APR 24, 2019" 
categories={["vacation"]} 
text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo..." />

const post5 = <PostCard 
images = {[Image(lampLow, lampHigh, "a lamp")]}
link="standard-post"
title="Another Standard Format Post." 
date="APR 24, 2019" 
categories={["design", "photography"]} 
text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi..." />

const post6 = <PostCard
images={[Image(guitaristLow, guitaristHigh, "guitarist")]}
link="standard-post"
postType="audio"
title="What Your Music Preference Says About You and Your Personality."
date="APR 24, 2019"
categories={["lifestyle"]}
text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..." />

const post7 = <PostCard 
images={[Image(rucksackLow, rucksackHigh, "rucksack")]}
link="standard-post"
title="The Art Of Visual Storytelling." 
date="APR 24, 2019" 
categories={["work", "lifestyle"]} 
text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor
nulla sed commodo est ad minim elit reprehenderit nisi..." />

const post8 = <PostCard 
images = {[Image(jumpLow, jumpHigh, "a brother and a sister jumping together")]}
link="standard-post"
title="Create Meaningful Family Moments." 
date="APR 24, 2019" 
categories={["family", "relationships"]} 
text="Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi..." />

export default [post1, post2, post3, post4, post5, post6, post7, post8];