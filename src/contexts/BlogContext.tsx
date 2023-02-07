import { createContext, useContext, useState } from "react";

const BlogContext = createContext(null);

function getSavedPostList() {
  const savedPostList = localStorage.getItem("postList");
  if (savedPostList) {
    return JSON.parse(savedPostList);
  }
  return [];
}

export const BlogProvider = ({ children }) => {
  const [postList, _setPostList] = useState(getSavedPostList);
  function setPostList(postList) {
    localStorage.setItem("postList", JSON.stringify(postList));
    _setPostList(postList);
  }
  function deletePost(id) {
    setPostList(postList.filter((post) => post.id !== id));
  }
  function createPost(title, content) {
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    setPostList([newPost, ...postList]);
  }

  return (
    <BlogContext.Provider value={{ postList, createPost, deletePost }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const blog = useContext(BlogContext);
  if (!blog) throw new Error("BlogContext not found");
  return blog;
};
