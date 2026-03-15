
import React, { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

const StatCounter: React.FC<StatCounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 1500,
  label,
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      setCount(Math.round(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-[#FAFAFA] mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[#888888] text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
};

export default StatCounter;
