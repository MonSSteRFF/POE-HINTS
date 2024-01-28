import React, { useEffect } from 'react';

type T_useClickOutside = (
  ref: Array<React.RefObject<HTMLElement>> | React.RefObject<HTMLElement>,
  func: () => void,
) => void;

const useClickOutside: T_useClickOutside = (ref, func) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (Array.isArray(ref)) {
      if (!ref.some((r) => r.current?.contains(event.target as Node))) {
        func();
      }
    } else {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        func();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, func]);
};

export { useClickOutside };
