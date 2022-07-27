import { useState } from 'react';

export function useHover(delay = 300) {
  const [isHover, setIsHover] = useState(false);
  const [delayCb, setDelayCb] = useState(null);

  const handleMouseEnter = () => {
    setDelayCb(
      setTimeout(() => {
        setIsHover(true);
      }, delay)
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(delayCb);
    setTimeout(() => {
      setIsHover(false);
    }, delay);
  };

  return { handleMouseEnter, handleMouseLeave, isHover };
}
