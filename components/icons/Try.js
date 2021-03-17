import * as React from 'react'

function SvgTry(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="TRY_svg__currency-svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M19 12a9 9 0 01-9 9H8v-8.23l-3 1.1v-2.13l3-1.1V8.87L5 9.96V7.84l3-1.1V3h2v3l5-1.8v2.12l-5 1.82v1.78l5-1.82v2.13l-5 1.82V19a7 7 0 007-7h2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgTry
