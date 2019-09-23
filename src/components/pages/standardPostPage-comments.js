import React from "react";
import Comment from "../comment/comment";

import avatar1 from "../../assets/avatars/user-01.jpg";
import avatar2 from "../../assets/avatars/user-02.jpg";
import avatar3 from "../../assets/avatars/user-03.jpg";
import avatar4 from "../../assets/avatars/user-04.jpg";

const comment1 = <Comment name="Itachi Uchiha" date="APRIL 30, 2019" avatar={avatar1}
  body="Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate, facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent."
/>

const comment2 = <Comment name="John Doe" date="APRIL 30, 2019" avatar={avatar2}
  body="Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris"
/>

const comment3 = <Comment name="Kakashi Hatake" date="APRIL 26, 2019" avatar={avatar3}
  body="Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem."
/>

const comment4 = <Comment name="Shikamaru Nara" date="APRIL 25, 2019" avatar={avatar4}
  body="Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas semper delicatissimi."
/>

export default [comment1, comment2, comment3, comment4];