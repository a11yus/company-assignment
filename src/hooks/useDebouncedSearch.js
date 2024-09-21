import { useCallback } from 'react';

const useDebouncedSearch = (callback, delay) => {
  const debouncedFn = useCallback(
    (value) => {
      const handler = setTimeout(() => {
        callback(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [callback, delay]
  );

  return debouncedFn;
};

export default useDebouncedSearch;
