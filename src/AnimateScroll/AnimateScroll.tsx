import React from 'react';
import { debounce } from './../debounce';
import { throttle } from '../throttle';

const AnimateScroll = ({
  divRef,
}: {
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  React.useEffect(() => {
    const handleScroll = () => {
      if (!divRef.current) return;
      const windowHeight = innerHeight * 0.8;
      const componentHeight = divRef.current.getBoundingClientRect().top;
      const isVisible = windowHeight > componentHeight;
      const leftAnimes = divRef.current.querySelector<HTMLElement>(
        '[data-set="left-anime"]',
      );
      const rightAnimes = divRef.current.querySelector<HTMLElement>(
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
    };
    handleScroll();
    window.addEventListener('scroll', debounce(handleScroll, 400));
    window.addEventListener('scroll', throttle(handleScroll, 400));

    return () => window.removeEventListener('scroll', handleScroll);
  }, [divRef]);

  return null;
};

export default AnimateScroll;
