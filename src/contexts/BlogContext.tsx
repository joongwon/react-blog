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
  getPost: (id: number) => PostType | null;
};

const BlogContext = createContext<BlogContextType | null>(null);

function getSavedPostList() {
  const savedPostList = localStorage.getItem("postList");
  if (savedPostList) {
    return JSON.parse(savedPostList);
  }
  return [];
}

export function BlogProvider({ children }: PropsWithChildren) {
  const [postList, _setPostList] = useState<PostType[]>(getSavedPostList);

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

  function getPost(id: number) {
    return postList.find((post) => post.id === id) ?? null;
  }

  return (
    <BlogContext.Provider value={{ postList, createPost, deletePost, getPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export const useBlogContext = () => {
  const blog = useContext(BlogContext);
  if (!blog) throw new Error("BlogContext not found");
  return blog;
};
