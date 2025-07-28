'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [dots, setDots] = useState('');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide scroll and scrollbar
    const originalOverflow = document.body.style.overflow;
    document.body.classList.add('no-scrollbar');
    document.documentElement.classList.add('no-scrollbar');
    document.body.style.height = '100vh';
    document.documentElement.style.height = '100vh';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.paddingRight = '0px';

    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    // Minimum loading time
    const minTime = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalOverflow;
      document.body.classList.remove('no-scrollbar');
      document.documentElement.classList.remove('no-scrollbar');
      document.body.style.height = '';
      document.documentElement.style.height = '';
      onComplete();
    }, 700);

    return () => {
      clearInterval(interval);
      clearTimeout(minTime);
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalOverflow;
      document.body.classList.remove('no-scrollbar');
      document.documentElement.classList.remove('no-scrollbar');
      document.body.style.height = '';
      document.documentElement.style.height = '';
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ overscrollBehavior: 'none' }}
    >
      <div className="text-center">
        <motion.h2
          className="text-white text-2xl md:text-3xl font-light mb-4 font-space-grotesk"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Calibrating systems
          <span className="inline-block w-8 text-left">{dots}</span>
        </motion.h2>
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-400 to-blue-400"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 