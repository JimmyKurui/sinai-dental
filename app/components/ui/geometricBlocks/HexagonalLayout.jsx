import './HexagonalLayout.scss';
import HexagonalLayoutClient from './HexagonalLayoutClient';

const hexBlocks = [
  { title: 'Block 1', description: 'Description for Block 1' },
  { title: 'Block 2', description: 'Description for Block 2' },
  { title: 'Block 3', description: 'Description for Block 3' },
  { title: 'Block 4', description: 'Description for Block 4' },
  { title: 'Block 5', description: 'Description for Block 5' },
  { title: 'Block 6', description: 'Description for Block 6' },
];

const HexagonSection = ({ textBlocks = hexBlocks }) => {
  const activeIdx = 3;

  return (
    <section className="hexagon-section">
      <div className="hexagon-layout" role="tablist" aria-label="Hexagonal-Layout">
        {textBlocks.map((block, idx) => (
          <div
            className={`hex-pair`}
            aria-labelledby={`hex-title`}
            aria-describedby={`hex-block-text`}
            key={idx}
          >
            <div id={`block-${idx + 1}`}
                className={`hex-block pos-${idx + 1}`}
                aria-controls={`block-text-${idx + 1}`}
              >
              <div
                className="hex-block-inner"  
              >
                <span className="hex-title">{block.title}</span>
              </div>
            </div>
            <span
              id={`block-text-${idx + 1}`}
              className="hex-block-text"
              aria-labelledby={`block-${idx + 1}`}
            >
              {block.description}
            </span>
          </div>
        ))}
      </div>
      <HexagonalLayoutClient />
    </section>
  );
};

export default HexagonSection; 