import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, // Only animate once when entering view
    margin: '-100px 0px', // Start animation when element is 100px from viewport
    amount: threshold
  });

  return { ref, isInView };
};

export const useStaggeredAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: '-50px 0px',
    amount: threshold
  });

  return { ref, isInView };
};
