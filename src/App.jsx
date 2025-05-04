import React, { useState } from 'react';
import './index.css';

function App() {
  const [clickedLinks, setClickedLinks] = useState({
    articulate: false,
    adobe: false,
    figma: false,
  });
  const [coinInserted, setCoinInserted] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);

  const handleClick = (link) => {
    setClickedLinks((prev) => ({
      ...prev,
      [link]: true,
    }));
  };

  const allLinksClicked = Object.values(clickedLinks).every(Boolean);

  const handleInsertCoin = () => {
    setCoinInserted(true);
  };

  const handlePressStart = () => {
    window.open(
      'https://docs.google.com/document/d/1znBtm6Bb2Bj90b09BEfSNDV9LFmhMSP5JLrnByWeRsE/edit?usp=sharing',
      '_blank'
    );
    setTimeout(() => setShowGameOver(true), 3000);
  };

  return (
    <div className="main-screen">
      {!showGameOver ? (
        <>
          <header>
            <h1 className="title">✨ Michelle Patricia Quinn ✨</h1>
            <p className="subtitle">
              I’m a Content Designer & Instructional Designer focused on intuitive storytelling, UX clarity, and bold ideas.
            </p>
          </header>

          <nav className="project-links">
            <a
              href="/projects/articulate/index.html"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick('articulate')}
            >
              🕹️ Interactive e-Learning Content
            </a>

            <a
              href="/adobe/Quick%20StartUp%20Guide.png"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick('adobe')}
            >
              🕹️ Quick Start-Up Guide
            </a>

            <a
              href="https://youtube.com/shorts/_qTP2OXC2tc?si=Uaq2WGOtNY_4fYoP"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={() => handleClick('figma')}
            >
              📼 Video Tutorial
            </a>
          </nav>

          {allLinksClicked && !coinInserted && (
            <button onClick={handleInsertCoin} className="insert-coin-button">
              INSERT COIN
            </button>
          )}

          {coinInserted && (
            <div className="bonus-content">
              <h2 className="bonus-title">✨ Bonus Content Unlocked ✨</h2>
              <button className="press-start-button" onClick={handlePressStart}>
                👾 Press Start to View Resume
              </button>
            </div>
          )}

          {!coinInserted && (
            <footer className="footer">
              <p className="footer-text">INSERT COIN TO CONTINUE</p>
            </footer>
          )}
        </>
      ) : (
        <div className="game-over">
          <h1 className="game-over-text">GAME OVER</h1>
          <a href="/" className="play-again-button">
            🕹️ PLAY AGAIN?
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
