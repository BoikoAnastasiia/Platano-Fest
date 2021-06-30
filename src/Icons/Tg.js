import * as React from 'react';
import './Icons.scss';

function SvgTg(props) {
  function changeFillonHover(e) {
    e.target.style.fill = props.hover;
  }
  function changeFillonLeave(e) {
    e.target.style.fill = props.fill;
  }
  return (
    <svg
      onMouseOver={changeFillonHover}
      onMouseLeave={changeFillonLeave}
      width={26}
      height={25}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="icon-social"
    >
      <path
        fill={props.fill}
        d="M20.52 5.792l-2.804 13.125c-.042.25-.334.375-.585.25l-4.31-2.875-2.3 2.166a.366.366 0 01-.586-.166l-1.506-4.667L4.454 12c-.293-.125-.293-.625 0-.75l15.521-5.875c.293-.083.586.125.544.417zM13.448 0C6.504 0 .898 5.583.898 12.5S6.504 25 13.449 25 26 19.417 26 12.5 20.394 0 13.449 0z"
      />
      <path
        fill={props.fill}
        d="M10.395 16.917l.251-2.417 7.029-6.792-8.451 5.542"
      />
    </svg>
  );
}

export default SvgTg;
