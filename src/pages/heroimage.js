import { useEffect, useRef } from 'react';
import { animate, svg, stagger } from 'https://esm.sh/animejs';
import HeroSVG from '../assets/Hero Image ER.svg';

function HeroImage() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path');
      
      animate(svg.createDrawable(paths), {
        draw: ['0 0', '0 1', '1 1'],
        ease: 'inOutQuad',
        duration: 2000,
        delay: stagger(100),
        loop: true
      });
    }
  }, []);

  return (
    <div ref={svgRef}>
      <img src={HeroSVG} alt="Hero" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}

export default HeroImage;
