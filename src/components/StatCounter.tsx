
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
  duration = 1800,
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
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="font-display font-bold text-5xl md:text-6xl text-[#EDE8DE] mb-2 leading-none">
        <span className="text-[#D4A843]">{prefix}</span>
        {count}
        <span className="text-[#D4A843]">{suffix}</span>
      </div>
      <div className="text-[#5A5249] text-xs font-mono uppercase tracking-[0.2em] mt-2">{label}</div>
    </div>
  );
};

export default StatCounter;
