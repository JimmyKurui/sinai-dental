"use client";

import { useEffect } from "react";

const ReviewsSlider = () => {
  useEffect(() => {
    const container = document.querySelector(".reviews-pane");
    if (!container) return;

    const cards = Array.from(container.children);
    const gap = 16; // gap in px (match CSS)
    const cardWidth = cards[0].clientWidth;
    const totalCards = cards.length;

    // seamless scroll
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      container.appendChild(clone);
    });

    const totalScrollWidth = (cardWidth + gap) * totalCards;
    let position = 0;
    let animationFrameId;
    const autoSpeed = 0.5;

    let isDragging = false;
    let dragStartX = 0;
    let dragLastX = 0;

    let longPressTimeout;
    const LONG_PRESS_DELAY = 50; // ms

    let autoScrolling = true;

    function step() {
      if (autoScrolling && !isDragging) {
        position += autoSpeed;
        if (position >= totalScrollWidth) {
          position -= totalScrollWidth;
        }
      }
      // Clamp position in range
      if (position < 0) position += totalScrollWidth;
      if (position >= totalScrollWidth) position -= totalScrollWidth;

      container.style.transform = `translateX(-${position}px)`;
      animationFrameId = requestAnimationFrame(step);
    }

    step();

    function startDrag(clientX) {
      isDragging = true;
      dragStartX = clientX;
      dragLastX = clientX;
      autoScrolling = false;
    }

    function onDrag(clientX) {
      if (!isDragging) return;
      const deltaX = clientX - dragLastX;
      dragLastX = clientX;
      position -= deltaX;

      if (position < 0) position += totalScrollWidth;
      if (position >= totalScrollWidth) position -= totalScrollWidth;
    }

    function endDrag() {
      if (isDragging) {
        isDragging = false;
        autoScrolling = true;
      }
    }

    container.addEventListener("pointerdown", (e) => {
      // Prevent text selection or default gestures
      e.preventDefault();

      longPressTimeout = setTimeout(() => {
        startDrag(e.clientX);
      }, LONG_PRESS_DELAY);
    });

    container.addEventListener("pointermove", (e) => {
      if (isDragging) {
        onDrag(e.clientX);
      } else {
        // Cancel long press if pointer moves before delay
        clearTimeout(longPressTimeout);
      }
    });

    container.addEventListener("pointerup", (e) => {
      clearTimeout(longPressTimeout);
      endDrag();
    });

    container.addEventListener("pointercancel", () => {
      clearTimeout(longPressTimeout);
      endDrag();
    });

    container.addEventListener("pointerleave", () => {
      clearTimeout(longPressTimeout);
      endDrag();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("pointerdown", () => {});
      container.removeEventListener("pointermove", () => {});
      container.removeEventListener("pointerup", () => {});
      container.removeEventListener("pointercancel", () => {});
      container.removeEventListener("pointerleave", () => {});
    };
  }, []);

  return null;
};

export default ReviewsSlider;
