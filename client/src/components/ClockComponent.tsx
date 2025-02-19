import React, { useEffect, useState } from "react";

interface ClockProps {
  size?: "small" | "medium" | "large";
  darkMode?: boolean;
}

const Clock: React.FC<ClockProps> = ({ size = "small", darkMode = false }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = days[time.getDay()];
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const sizeClasses = {
    small: "text-xl px-4 py-2",
    medium: "text-2xl px-6 py-3",
    large: "text-4xl px-8 py-4",
  };

  const textColor = darkMode ? "text-white" : "text-[#354F52]";
  const bgColor = darkMode ? "bg-gray-800" : "bg-white";
  const dividerColor = darkMode ? "bg-white" : "bg-[#354F52]";

  return (
    <div className="flex justify-center items-center">
      <div
        className={`flex items-center rounded-lg shadow-md ${bgColor} ${textColor} ${sizeClasses[size]}`}
        style={{ fontFamily: '"Crimson Pro", serif' }}
      >
        <div className="mx-4 text-center">
          <div>{day}</div>
          <div className="mt-1 text-sm uppercase">Day</div>
        </div>

        <div className={`mx-4 h-12 w-0.5 ${dividerColor}`} />

        <div className="mx-4 text-center">
          <div>{hours}</div>
          <div className="mt-1 text-sm uppercase">Hours</div>
        </div>

        <div className={`mx-4 h-12 w-0.5 ${dividerColor}`} />

        <div className="mx-4 text-center">
          <div>{minutes}</div>
          <div className="mt-1 text-sm uppercase">Minutes</div>
        </div>

        <div className={`mx-4 h-12 w-0.5 ${dividerColor}`} />

        <div className="mx-4 text-center">
          <div>{seconds}</div>
          <div className="mt-1 text-sm uppercase">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
