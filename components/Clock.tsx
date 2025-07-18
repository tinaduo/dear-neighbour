'use client';

import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div>
      <p className="text-4xl text-[#FAF8EF] font-['FavoritMono']">
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default Clock;