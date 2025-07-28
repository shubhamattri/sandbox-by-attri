'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SparkleEffectProps {
  children: ReactNode;
  className?: string;
}

const SparkleEffect = ({ children, className = '' }: SparkleEffectProps) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {children}
      
      {/* Sparkle particles - desktop only */}
      <div className="hidden md:block">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Sparkle 1 */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full"
            variants={{
              initial: { scale: 0, opacity: 0 },
              hover: { 
                scale: [0, 1, 0], 
                opacity: [0, 1, 0],
                x: [0, 10, 20],
                y: [0, -10, -20]
              }
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: 0.2,
              ease: "easeInOut"
            }}
          />
          
          {/* Sparkle 2 */}
          <motion.div
            className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full"
            variants={{
              initial: { scale: 0, opacity: 0 },
              hover: { 
                scale: [0, 1, 0], 
                opacity: [0, 1, 0],
                x: [0, -15, -30],
                y: [0, 15, 30]
              }
            }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity, 
              delay: 0.8,
              ease: "easeInOut"
            }}
          />
          
          {/* Sparkle 3 */}
          <motion.div
            className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
            variants={{
              initial: { scale: 0, opacity: 0 },
              hover: { 
                scale: [0, 1, 0], 
                opacity: [0, 1, 0],
                x: [0, 20, 40],
                y: [0, -5, -10]
              }
            }}
            transition={{ 
              duration: 1.2, 
              repeat: Infinity, 
              delay: 1.4,
              ease: "easeInOut"
            }}
          />
          
          {/* Sparkle 4 */}
          <motion.div
            className="absolute top-1/2 right-1/4 w-1 h-1 bg-yellow-400 rounded-full"
            variants={{
              initial: { scale: 0, opacity: 0 },
              hover: { 
                scale: [0, 1, 0], 
                opacity: [0, 1, 0],
                x: [0, -10, -20],
                y: [0, -15, -30]
              }
            }}
            transition={{ 
              duration: 1.6, 
              repeat: Infinity, 
              delay: 0.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SparkleEffect; 