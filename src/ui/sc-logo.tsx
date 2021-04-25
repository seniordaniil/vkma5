import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={51}
      height={52}
      viewBox="0 0 51 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.475 6l13.712 13.713-4.95 4.95-8.762-8.764L5.025 30.5l-5-5 14.5-14.55L19.475 6zM31.238 45.188L17.525 31.474l4.95-4.95 8.763 8.763 14.45-14.6 5 5-14.5 14.55-4.95 4.95z"
        fill="#DDBF5D"
      />
      <path
        d="M44.713 19.475L31 33.187l-4.95-4.95 8.763-8.762-14.6-14.45 5-5 14.55 14.5 4.95 4.95zM6 31.713L19.713 18l4.95 4.95-8.764 8.763L30.5 46.163l-5 5-14.55-14.5L6 31.712z"
        fill="#5B081C"
      />
    </svg>
  );
}

export default SvgComponent;
