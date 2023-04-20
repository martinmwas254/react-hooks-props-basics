import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent
        articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration."
        isPublished={true}
        minutesToRead={1}
      />
      <Comment text="I agree with this statement. - Angela Merkel" />
      <Comment text="A universal truth. - Noam Chomsky" />
      <Comment text="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

export function ChildComponent(props) {
  return (
    <div>
      {props.text} {props.number}
    </div>
  );
}

export default BlogPost;
