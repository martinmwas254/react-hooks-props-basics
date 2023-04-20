import React from "react";

function Comment(props) {
  return <div>{props.text}</div>;
}

function BlogPost() {
  return (
    <div>
      <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
      <Comment text="I agree with this statement. - Angela Merkel" />
      <Comment text="A universal truth. - Noam Chomsky" />
      <Comment text="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

export default BlogPost;
