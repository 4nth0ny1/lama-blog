import React from "react";

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1>This is from the blog layout</h1>
      {children}
    </div>
  );
};

export default BlogLayout;
