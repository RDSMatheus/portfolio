import React from 'react';
import { debounce } from '../debounce';

const AnimateScrollArray = ({
  divRef,
}: {
  divRef: React.MutableRefObject<HTMLDivElement[]>;
}) => {
  React.useEffect(() => {
    const handleScroll = () => {
      if (!divRef.current) return;
      const windowHeight = innerHeight * 0.8;

      divRef.current.forEach((element) => {
        const componentHeight = element.getBoundingClientRect().top;
        const isVisible = windowHeight > componentHeight;
        const leftAnimes = element.querySelector<HTMLElement>(
          '[data-set="left-anime"]',
        );
        const rightAnimes = element.querySelector<HTMLElement>(
          '[data-set="right-anime"]',
        );

        const applyAnimation = (
          element: HTMLElement | null,
          translate: string,
          opacity: string,
          visibility: string,
        ) => {
          {
            if (element) {
              element.style.transform = translate;
              element.style.opacity = opacity;
              element.style.visibility = visibility;
            }
          }
        };

        if (isVisible) {
          applyAnimation(leftAnimes, 'translateX(0)', '1', 'visible');
          applyAnimation(rightAnimes, 'translateX(0)', '1', 'visible');
        }
      });
    };
    window.addEventListener('scroll', debounce(handleScroll, 200));

    return () => window.removeEventListener('scroll', handleScroll);
  }, [divRef]);

  return null;
};

export default AnimateScrollArray;
