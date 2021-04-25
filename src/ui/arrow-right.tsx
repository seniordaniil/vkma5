import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={33}
      height={36}
      viewBox="0 0 33 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 18h30m0 0L14 2m16 16L14 34" stroke="#fff" strokeWidth={4} />
    </svg>
  );
}

export default SvgComponent;
