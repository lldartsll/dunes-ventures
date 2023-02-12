import "@/styles/globals.css";
import { AppHeader } from "@/components/header";
import { ScoreContext } from "@/lib/scoreContext";
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }) {
  const [score, setScore] = useState(0);
  useEffect(() => {
    localStorage.getItem("score") === null
      ? localStorage.setItem("score", 0)
      : null;
    let scr = localStorage.getItem("score");
    setScore(parseInt(scr));
  }, []);
  return (
    <ScoreContext.Provider value={{ score: score, setScore: setScore }}>
      <AppHeader />
      <Component {...pageProps} />
    </ScoreContext.Provider>
  );
}
