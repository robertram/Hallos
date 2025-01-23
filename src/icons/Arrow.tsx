import type { FC, SVGProps } from 'react'

const ArrowTip: FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path 
      d="M12 4 L20 12 M12 4 L4 12" 
      stroke="#E4E4E7" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
)

export default ArrowTip