import { useRef, useCallback } from "react";


export default function useDebounce(fn, delay, args) {
  let selector = useRef();
  return useCallback(() => {
    if (selector.current) {
      clearTimeout(selector.current);
    }
    selector.current = setTimeout(() => {
      fn(...args)
    }, delay);
  }, [fn, delay])

};