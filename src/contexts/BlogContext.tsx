import { createContext, PropsWithChildren, useContext, useState } from "react";

export type PostType = {
  id: number;
  title: string;
  content: string;
  author: UserType;
};

export type UserType = {
  id: number;
  name: string;
  email: string;
};

export type LoginInfoType = {
  user: UserType;
  token: string;
};

type BlogContextType = {
  loginInfo: LoginInfoType | null;
  setLoginInfo: (loginInfo: LoginInfoType | null) => void;
};

const BlogContext = createContext<BlogContextType | null>(null);

export function BlogProvider({ children }: PropsWithChildren) {
  const [loginInfo, setLoginInfo] = useState<LoginInfoType | null>(null);
  return (
    <BlogContext.Provider
      value={{
        loginInfo,
        setLoginInfo,
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
