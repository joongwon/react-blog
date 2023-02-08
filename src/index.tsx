import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostCreateForm } from "./pages/PostCreateForm";
import { PostListView } from "./pages/PostListView";
import { BlogProvider } from "./contexts/BlogContext";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PostPage } from "./pages/PostPage";
import { RootLayout } from "./pages/RootLayout";
import { QueryClientProvider, QueryClient } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BlogProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<AboutPage />} />
              <Route path="/post" element={<PostListView />} />
              <Route path="/post/create" element={<PostCreateForm />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BlogProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
