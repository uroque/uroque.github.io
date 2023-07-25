import { useEffect, useRef } from 'react';

import './Cursor.css';

const Cursor = () => {
  const innerCursorRef = useRef(null);
  // const outterCursorRef = useRef(null);

  const moveCursor = (e) => {
    let x = e.clientX;
    let y = e.clientY;

    const innerCursorWidth = innerCursorRef.current.offsetWidth;
    const innerCursorHeight = innerCursorRef.current.offsetHeight;
    // const outerCursorWidth = outterCursorRef.current.offsetWidth;
    // const outerCursorHeight = outterCursorRef.current.offsetHeight;

    const innerCursorX = x - innerCursorWidth / 2;
    const innerCursorY = y - innerCursorHeight / 2;
    // const outerCursorX = x - outerCursorWidth / 2;
    // const outerCursorY = y - outerCursorHeight / 2;

    // innerCursorRef.current.style.left = `${x}px`;
    // innerCursorRef.current.style.top = `${y}px`;
    // outterCursorRef.current.style.left = `${x}px`;
    // outterCursorRef.current.style.top = `${y}px`;

    innerCursorRef.current.style.transform = `translate(${innerCursorX}px, ${innerCursorY}px)`;
    // outterCursorRef.current.style.transform = `translate(${outerCursorX}px, ${outerCursorY}px)`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', moveCursor);

    const textElements = document.querySelectorAll('p, span, a, h1, h2');

    textElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const handleMouseEnter = () => {
    innerCursorRef.current.classList.add('grow');
  };

  const handleMouseLeave = () => {
    innerCursorRef.current.classList.remove('grow');
  };

  return(
    <>
      {/* <div ref={outterCursorRef} className="outter-cursor" /> */}
      <div
        ref={innerCursorRef}
        className="inner-cursor" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  )
}

export default Cursor