import "./RootLayout.css";
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout() {
  const topRef = useRef<HTMLDivElement>(null);
  return (
    <div className="RootLayout">
      <main className="RootLayout__main">
        <div ref={topRef} />
        <Header />
        <Outlet />
        <button
          className="RootLayout__top-button"
          onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
          맨 위로
        </button>
      </main>
    </div>
  );
}
