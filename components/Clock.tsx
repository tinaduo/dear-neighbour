"use client";

import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000); 

    return () => clearInterval(timerId);
  }, []);

    // change font to mono
    // change format of time to 12-hour format with AM/PM
  return (
    <div>
        <p className="text-4xl text-[#FAF8EF] font-['FavoritMono']">
            {time.toLocaleTimeString()}
        </p>
    </div>
  );
}

export default Clock;
