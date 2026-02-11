import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Just a moment… ❤️");

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1; // ultra slow

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 1500); // emotional pause
      }

      setProgress(value);

      if (value === 25) {
        setMessage("I’m about to ask you something important… 💌");
      }

      if (value === 50) {
        setMessage("So please read it slowly… 💞");
      }

      if (value === 75) {
        setMessage("And maybe… feel it too ❤️");
      }

      if (value === 95) {
        setMessage("Almost ready… take a deep breath 💖");
      }

    }, 100); // slower interval (~10 seconds total)

    return () => clearInterval(interval);
  }, []);

return (
  <div className="loading-wrapper">
    <div className="loading-card">
      <h2 className="loading-title">{message}</h2>

      <div className="heart-loader">💖</div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="percentage">{progress}%</p>

      <p className="tap-text">
        Tap anywhere to begin ❤️
      </p>
    </div>
  </div>
);

}
