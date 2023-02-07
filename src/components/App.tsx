import "./App.css";
import { useRef } from "react";
import { Header } from "./Header";
import { PostListView } from "../pages/PostListView";
import { PostCreateForm } from "../pages/PostCreateForm";

function App() {
  const topRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <main>
        <div ref={topRef} />
        <Header />
        <PostCreateForm />
        <PostListView />
        <button
          className="App__top-button"
          onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
          맨 위로
        </button>
      </main>
    </div>
  );
}

export default App;
