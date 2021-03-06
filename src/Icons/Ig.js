import * as React from 'react';
import './Icons.scss';

function SvgIg(props) {
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
        d="M13 14.675a2.181 2.181 0 01-2.184-2.175c0-1.2.97-2.175 2.184-2.175 1.197 0 2.184.975 2.184 2.175 0 1.2-.979 2.175-2.184 2.175zm0-5.5A3.323 3.323 0 009.67 12.5 3.334 3.334 0 0013 15.825 3.336 3.336 0 0016.34 12.5 3.336 3.336 0 0013 9.175zM16.674 7.967a.766.766 0 100 1.533.766.766 0 100-1.533z"
      />
      <path
        fill={props.fill}
        d="M19.418 15.217c0 2.016-1.657 3.666-3.698 3.666h-5.44c-2.04 0-3.698-1.65-3.698-3.658V9.767C6.582 7.75 8.24 6.1 10.281 6.1h5.439c2.041 0 3.698 1.65 3.698 3.667v5.45zM13 .125C6.14.125.575 5.667.575 12.5S6.139 24.875 13 24.875c6.861 0 12.426-5.542 12.426-12.375S19.86.125 13 .125z"
      />
    </svg>
  );
}

export default SvgIg;
