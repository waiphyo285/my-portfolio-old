import React from "react";

function TagsListComponent({ tags }) {
  return tags.map((tag, tagIdx) => (
    <code className="mx-1" key={tagIdx}>
      #{tag}
    </code>
  ));
}

export default TagsListComponent;
