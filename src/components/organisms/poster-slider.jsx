import { useRef, useState, useEffect } from 'react';
import ScrollRightButton from "../atoms/scroll-right-icon";
import ScrollLeftButton from "../atoms/scroll-left-button";
import PosterDefault from "../molecules/poster-default";
import clsx from 'clsx'

const PosterSlider = ({ movies, galleryType, className }) => {
  const scrollContainerRef = useRef(null);
  const itemRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const animationFrameRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Check for mobile and content overflow
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    const checkContentOverflow = () => {
      if (scrollContainerRef.current && itemRef.current) {
        const container = scrollContainerRef.current;
        const itemWidth = itemRef.current.offsetWidth;
        const gap = 16; // space-x-4 = 16px
        const totalContentWidth = movies.length * (itemWidth + gap) - gap;
        
        setShowScrollButtons(totalContentWidth > container.offsetWidth);
      }
    };

    checkIfMobile();
    checkContentOverflow();

    const resizeObserver = new ResizeObserver(checkContentOverflow);
    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current);
    }

    window.addEventListener('resize', checkIfMobile);
    window.addEventListener('resize', checkContentOverflow);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('resize', checkContentOverflow);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [movies.length]);

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    const touch = e.touches[0];
    setStartX(touch.pageX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !scrollContainerRef.current) return;
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const smoothScroll = (distance, duration = 800) => {
    if (!scrollContainerRef.current || isScrolling) return;

    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const start = container.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      container.scrollLeft = start + distance * easedProgress;
      
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    container.scrollLeft = start + distance * 0.05;
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  const handleScrollLeft = () => {
    const itemWidth = itemRef.current?.offsetWidth || 300;
    const gap = 16;
    const scrollAmount = -(itemWidth + gap) * 2;
    smoothScroll(scrollAmount);
  };

  const handleScrollRight = () => {
    const itemWidth = itemRef.current?.offsetWidth || 300;
    const gap = 16;
    const scrollAmount = (itemWidth + gap) * 2;
    smoothScroll(scrollAmount);
  };

  const listItems = movies.map((movie, index) => (
    <li
      key={movie.id}
      className="inline-block flex-shrink-0"
      ref={index === 0 ? itemRef : null}
    >
      <PosterDefault movie={movie} galleryType={galleryType} />
    </li>
  ));

  // const baseStyle="w-full overflow-x-scroll scrollbar-hide py-4 touch-pan-x"
  const baseStyle="w-full py-12 touch-pan-x overflow-x-scroll scrollbar-hide"

  return (
    <div className="relative overflow-visible">
      
      <div 
        ref={scrollContainerRef}
        // className="w-full overflow-x-scroll scrollbar-hide py-4 touch-pan-x"
        className={clsx(baseStyle, className)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <ul className={"flex list-none p-0 whitespace-nowrap" + (galleryType == 'continue' ? '' : ' gap-4')}>
          {listItems}
        </ul>
      </div>
      {!isMobile && showScrollButtons && (
        <>
          <div className="absolute z-20 bottom-1/2 translate-y-1/2 left-0 -translate-x-1/2 transition-opacity duration-300">
            <ScrollLeftButton 
              onClick={(e) => {
                e.stopPropagation();
                handleScrollLeft();
              }}
              className="hover:opacity-80"
            />
          </div>
          <div className="absolute z-20 bottom-1/2 translate-y-1/2 right-0 translate-x-1/2 transition-opacity duration-300">
            <ScrollRightButton 
              onClick={(e) => {
                e.stopPropagation();
                handleScrollRight();
              }}
              className="hover:opacity-80"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PosterSlider;