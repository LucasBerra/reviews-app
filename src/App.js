import { useState } from "react";

import reviews from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const handlePrev = () => {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <main>
      <h1>
        <i className="fas fa-highlighter"></i> Our Reviews :
      </h1>
      <div className="review">
        <div className="photo">
          <img src={image} alt={name} />
          <i className="fas fa-quote-right"></i>
        </div>
        <div>
          <h3>{name}</h3>
          <p>
            <code>{job}</code>
          </p>

          <p className="text">{text}</p>

          <button onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
