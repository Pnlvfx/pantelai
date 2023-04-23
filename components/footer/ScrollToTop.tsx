'use client';
import { ArrowUp } from '../utils/SVG/ArrowUp';

const ScrollToTop = () => {
  const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button onClick={scrollToTop} aria-label="Back to top" className="inline-block relative">
      <span className="flex items-center">
        <span className="underline decoration-transparent underline-offset-4 text-[16px] leading-[130%] hover:decoration-white">Back to top</span>
        <ArrowUp className="top-[0.05em] relative ml-2 -mr-4 w-4 h-4 leading-[130%] text-[16px]" />
      </span>
    </button>
  );
};

export default ScrollToTop;
