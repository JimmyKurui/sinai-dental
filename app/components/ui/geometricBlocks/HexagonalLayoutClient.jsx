'use client';

import { useEffect, useState } from 'react';

const HexagonLayoutClient = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 576);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // if (isDesktop) {
    const pairs = document.querySelectorAll('.hexagon-layout .hex-pair');
    let activeIdx = 3;

    function setActive(idx) {
      pairs.forEach((pair, i) => {
        const block = pair.querySelector('.hex-block');
        const panel = pair.querySelector('.hex-block-text');
        if (block) {
          if (i === idx) {
            pair.classList.add('active');
            block.setAttribute('aria-selected', 'true');
            block.setAttribute('tabIndex', '0');
            panel.removeAttribute('hidden');
          } else {
            pair.classList.remove('active');
            block.setAttribute('aria-selected', 'false');
            block.setAttribute('tabIndex', '-1');
            panel.setAttribute('hidden', '');
          }
        }
      });
    }

    setActive(activeIdx);


    pairs.forEach((pair, idx) => {
      const block = pair.querySelector('.hex-block');
      const panel = pair.querySelector('.hex-block-text');
      if (block && panel) {
        block.setAttribute('role', 'tab');
        block.addEventListener('mouseenter', () => {
          setActive(idx);
        });
        panel.setAttribute('role', 'tabpanel');
      }
    });

    return () => {
      pairs.forEach((pair, idx) => {
        const block = pair.querySelector('.hex-block');
        const panel = pair.querySelector('.hex-block-text');
        if (block && panel) {
          block.removeEventListener('mouseenter', () => {
            setActive(idx);
          });
          block.removeAttribute('role');
          block.removeAttribute('aria-selected');
          block.removeAttribute('tabIndex');
          panel.removeAttribute('hidden');
        }
      });
    };
    // }
  }, [isDesktop]);

  return null;
};

export default HexagonLayoutClient; 