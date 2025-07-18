import { useState } from 'react';
import { sculptureList } from './Data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex((prev) => (prev + 1) % sculptureList.length);
  }

  function handlePrevClick() {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }

  function handleMoreClick() {
    setShowMore((prev) => !prev);
  }

  const sculpture = sculptureList[index];
  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
        <button onClick={handlePrevClick} disabled={index === 0}>
          Previous
        </button>
        <button onClick={handleNextClick}>Next</button>
      </div>

      <h2>
        <i>{sculpture.name} </i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        style={{ maxWidth: '100%', marginTop: '1rem' }}
      />
    </>
  );
}
