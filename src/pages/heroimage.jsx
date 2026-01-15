import React, { useEffect, useRef } from 'react';
import { animate, stagger, svg } from 'animejs';

const HeroImage = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      animate(svg.createDrawable('.line'), {
        draw: ['0 0', '0 1', '1 1'],
        ease: 'inOutQuad',
        duration: 2000,
        delay: stagger(100),
        loop: true
      });
    }
  }, []);

  return (
    <div className="hero-image" style={{ overflow: 'hidden', padding: '20px' }}>
      <svg 
        ref={svgRef}
        width="600" 
        height="400" 
        viewBox="0 0 600 400"
        style={{ width: '100%', maxWidth: '600px' }}
      >
        {/* Letter E */}
        <path className="line" d="M100,100 L100,300" stroke="#3b82f6" strokeWidth="4" fill="none" />
        <path className="line" d="M100,100 L200,100" stroke="#3b82f6" strokeWidth="4" fill="none" />
        <path className="line" d="M100,200 L180,200" stroke="#3b82f6" strokeWidth="4" fill="none" />
        <path className="line" d="M100,300 L200,300" stroke="#3b82f6" strokeWidth="4" fill="none" />
        
        {/* Letter R */}
        <path className="line" d="M250,100 L250,300" stroke="#3b82f6" strokeWidth="4" fill="none" />
        <path className="line" d="M250,100 L330,100 Q360,100 360,130 Q360,160 330,160 L250,160" stroke="#3b82f6" strokeWidth="4" fill="none" />
        <path className="line" d="M290,160 L360,300" stroke="#3b82f6" strokeWidth="4" fill="none" />
      </svg>
    </div>
  );
};

export default HeroImage;