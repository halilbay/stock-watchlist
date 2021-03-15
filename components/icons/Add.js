import * as React from 'react'

function SvgAdd(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="add_svg__iconify add_svg__iconify--ic"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      transform="rotate(360)"
      {...props}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgAdd
