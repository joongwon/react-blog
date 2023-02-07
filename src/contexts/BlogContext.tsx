import { createContext, PropsWithChildren, useContext, useState } from "react";

export type PostType = {
  id: number;
  title: string;
  content: string;
};

export type UserType = {
  name: string;
};

type BlogContextType = {
  postList: PostType[];
  loginUser: UserType | null;

  createPost: (title: string, content: string) => void;
  deletePost: (id: number) => void;
  getPost: (id: number) => PostType | null;
  login: (name: string, password: string) => void;
  logout: () => void;
};

const BlogContext = createContext<BlogContextType | null>(null);

function getSavedPostList() {
  const savedPostList = localStorage.getItem("postList");
  if (savedPostList) {
    return JSON.parse(savedPostList);
  }
  return [];
}

function getLoginUser() {
  const savedLoginUser = localStorage.getItem("loginUser");
  if (savedLoginUser) {
    return JSON.parse(savedLoginUser);
  }
  return null;
}

export function BlogProvider({ children }: PropsWithChildren) {
  const [postList, _setPostList] = useState<PostType[]>(getSavedPostList);
  function setPostList(postList: PostType[]) {
    localStorage.setItem("postList", JSON.stringify(postList));
    _setPostList(postList);
  }

  const [loginUser, _setLoginUser] = useState<UserType | null>(getLoginUser);
  function setLoginUser(user: UserType | null) {
    localStorage.setItem("loginUser", JSON.stringify(user));
    _setLoginUser(user);
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

  function login(name: string, password: string) {
    if (name === "joongwon" && password === "1234") {
      setLoginUser({ name });
    } else {
      throw new Error("로그인에 실패했습니다.");
    }
  }

  function logout() {
    setLoginUser(null);
  }

  return (
    <BlogContext.Provider
      value={{
        postList,
        loginUser,
        createPost,
        deletePost,
        getPost,
        login,
        logout,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export const useBlogContext = () => {
  const blog = useContext(BlogContext);
  if (!blog) throw new Error("BlogContext not found");
  return blog;
};
