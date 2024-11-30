import React from 'react';

const AnimateIntro = ({
  divRef,
}: {
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  React.useEffect(() => {
    const h1Spans = divRef.current
      ?.querySelector('h1')
      ?.querySelectorAll('span');
    const h2 = divRef.current?.querySelector('h2');
    const p = divRef.current?.querySelector('p');
    const div = divRef.current?.querySelector('div');

    if (!h1Spans || !h2 || !p || !div) return;
    const applyAnimation = (
      element: HTMLElement,
      transform: string,
      opacity: string,
      delay: number,
    ) => {
      setTimeout(() => {
        element.style.transform = transform;
        element.style.opacity = opacity;
      }, delay);
    };

    applyAnimation(h1Spans[0], 'translate(0)', 'initial', 400);
    applyAnimation(h1Spans[1], 'translate(0)', 'initial', 600);
    applyAnimation(h2, 'translate(0)', 'initial', 800);
    applyAnimation(p, 'translate(0)', 'initial', 1000);
    applyAnimation(div, 'translate(0)', 'initial', 1200);
  }, [divRef]);

  return null;
};

export default AnimateIntro;
