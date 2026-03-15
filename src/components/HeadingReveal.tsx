
import React from 'react';
import { motion } from 'motion/react';

interface HeadingRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const wordVariants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 10 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
};

const HeadingReveal: React.FC<HeadingRevealProps> = ({
  text,
  className = '',
  delay = 0,
}) => {
  const words = text.split(' ');

  return (
    <motion.span
      className={`inline ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.06,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default HeadingReveal;
