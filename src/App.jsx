import { useState, useRef, useEffect } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import Proposal from "./Components/Proposal";
import Celebration from "./Components/Celebration";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [accepted, setAccepted] = useState(false);

  const audioRef = useRef(null);


  useEffect(() => {
  const startMusic = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  };

  const handleFirstInteraction = () => {
    startMusic();
    document.removeEventListener("touchstart", handleFirstInteraction);
    document.removeEventListener("click", handleFirstInteraction);
  };

  document.addEventListener("touchstart", handleFirstInteraction);
  document.addEventListener("click", handleFirstInteraction);

  return () => {
    document.removeEventListener("touchstart", handleFirstInteraction);
    document.removeEventListener("click", handleFirstInteraction);
  };
}, []);

  return (
    <>
      {/* Only ONE audio element */}
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && !accepted && <Proposal onYes={() => setAccepted(true)} />}
      {accepted && <Celebration />}
    </>
  );
}

export default App;
