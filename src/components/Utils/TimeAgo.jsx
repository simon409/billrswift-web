import React, { useEffect, useState } from 'react';

// Utility function to calculate the time difference
const timeAgo = (date) => {
  const now = new Date();
  const past = new Date(date);
  const secondsAgo = Math.floor((now - past) / 1000);

  if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) return `${minutesAgo} minutes ago`;
  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) return `${hoursAgo} hours ago`;
  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 7) return `${daysAgo} days ago`;
  const weeksAgo = Math.floor(daysAgo / 7);
  if (weeksAgo < 4) return `${weeksAgo} weeks ago`;
  const monthsAgo = Math.floor(daysAgo / 30);
  if (monthsAgo < 12) return `${monthsAgo} months ago`;
  const yearsAgo = Math.floor(monthsAgo / 12);
  return `${yearsAgo} years ago`;
};

// Example React component that uses the utility function
export const TimeAgo = ({ date }) => {
  const [timeAgoText, setTimeAgoText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgoText(timeAgo(date));
    }, 60000); // Update every minute

    // Initial calculation
    setTimeAgoText(timeAgo(date));

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [date]);

  return <span>{timeAgoText}</span>;
};