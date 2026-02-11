import { useState, useEffect, useRef } from "react";

export default function Proposal({ onYes }) {
  const [displayedText, setDisplayedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [position, setPosition] = useState({ top: "auto", left: "auto" });
  const [isMoving, setIsMoving] = useState(false);

  const audioRef = useRef(null);

  const fullText = `Loving you has been the most beautiful chapter of my life.

You are not just someone I care about…
you are my comfort, my peace, my safe place.

With you, I feel understood.
With you, I feel complete.

I don’t promise perfection,
but I promise honesty, effort, and love — always.

So tell me…
will you be mine this Valentine’s? 💘`;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTypingComplete(true);

        if (audioRef.current) {
          audioRef.current.volume = 0.25;
          audioRef.current.play().catch(() => {});
        }
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const moveButton = (e) => {
  e.preventDefault();
  e.stopPropagation();

  setIsMoving(true);

  const card = e.currentTarget.closest(".card");
  const cardRect = card.getBoundingClientRect();

  const maxLeft = cardRect.width - cardRect.width * 0.2;
  const maxTop = cardRect.height - cardRect.height * 0.2;

  const randomLeft = Math.random() * (maxLeft - 30) + 30;
  const randomTop = Math.random() * (maxTop - 30) + 30;

  setPosition({
    top: `${randomTop}px`,
    left: `${randomLeft}px`,
  });
};


  return (
    <div className="proposal">
      <div className="card">
        <h1 className="romantic-title">
          Sana <span className="heart">❤️</span>
        </h1>

        <p className="subtitle typing">{displayedText}</p>

        {/* <audio ref={audioRef} src="/music.mp3" loop preload="auto" /> */}

        {typingComplete && (
          <>
            <div className="buttons-row">
              <button className="yes" onClick={onYes}>
                Yes 💖
              </button>

              {!isMoving && (
                <button className="no" onMouseEnter={moveButton}>
                  No 😜
                </button>
              )}
            </div>

            {isMoving && (
              <button
                className="no-floating"
                onMouseEnter={moveButton}
                onMouseMove={moveButton}
                onTouchStart={moveButton}
                style={{
                  top: position.top,
                  left: position.left,
                }}
              >
                No 😜
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
