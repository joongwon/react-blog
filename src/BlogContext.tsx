import { createContext, PropsWithChildren, useContext, useState } from "react";

export type PostType = {
  id: number;
  title: string;
  content: string;
};

type BlogContextType = {
  postList: PostType[];
  createPost: (title: string, content: string) => void;
  deletePost: (id: number) => void;
};

const BlogContext = createContext<BlogContextType | null>(null);

function getSavedPosts() {
  const savedPosts = localStorage.getItem("postList");
  if (savedPosts) {
    return JSON.parse(savedPosts);
  }
  return [];
}

const postListInit = getSavedPosts();

export function BlogProvider({ children }: PropsWithChildren) {
  const [postList, _setPostList] = useState<PostType[]>(postListInit);
  function setPostList(postList: PostType[]) {
    localStorage.setItem("postList", JSON.stringify(postList));
    _setPostList(postList);
  }
  function deletePost(id: number) {
    setPostList(postList.filter((post) => post.id !== id));
  }
  function createPost(title: string, content: string) {
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
}

export function useBlog() {
  const blog = useContext(BlogContext);
  if (!blog) {
    throw new Error("BlogProvider not found");
  }
  return blog;
}
