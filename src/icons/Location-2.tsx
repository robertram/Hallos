import React from "react";

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 23.5C11 23.5 12.183 21.921 7.253 19.465C6.98291 19.3302 6.72081 19.18 6.468 19.015C4.015 17.419 2.5 14.5 2.5 11.358C2.5 6.19 6.753 2 12 2C17.247 2 21.5 6.19 21.5 11.357C21.5 14.819 19.656 18.014 16.755 19.461C11.82 21.92 13 23.5 12 23.5ZM12 15.11C14.111 15.11 15.8 13.438 15.8 11.405C15.8 9.372 14.111 7.7 12 7.7C9.889 7.7 8.2 9.372 8.2 11.405C8.2 13.438 9.889 15.11 12 15.11Z"
        fill="#1A82FE"
      />
    </svg>
  );
};

export default LocationIcon;
