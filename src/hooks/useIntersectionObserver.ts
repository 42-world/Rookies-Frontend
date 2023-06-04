import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  options?: IntersectionObserverInit;
  onIntersect: () => void;
}

const defaultOptions: IntersectionObserverInit = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px',
};

export const useIntersectionObserver = <T extends HTMLElement>({
  options = defaultOptions,
  onIntersect,
}: UseIntersectionObserverProps) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect();
          }
        });
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect, options]);

  return { ref };
};
