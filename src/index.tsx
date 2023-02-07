import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostCreateForm } from "./pages/PostCreateForm";
import { PostListView } from "./pages/PostListView";
import { BlogProvider } from "./contexts/BlogContext";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RootLayout } from "./pages/RootLayout";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<AboutPage />} />
            <Route path="/post" element={<PostListView />} />
            <Route path="/post/create" element={<PostCreateForm />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  </React.StrictMode>
);
