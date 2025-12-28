'use client';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';

const StatsLogic = ({ value, suffix = ""}) => {
    const count = useMotionValue(0);
      const rounded = useTransform(count, latest => Math.floor(latest));
    
      useEffect(() => {
        const controls = animate(count, value, {
          duration: 2, ease: "easeOut",
        });
    
        return controls.stop;
      }, [value]);
  return (
    <motion.span>
      {rounded}
      {suffix}
    </motion.span>
  )
}

export default StatsLogic
