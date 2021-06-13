import * as React from 'react';
import './Icons.scss';

function SvgVk(props) {
  return (
    <svg
      width={25}
      height={25}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="icon-social"
    >
      <path d="M18.442 15.1c-1.373-1.267-1.189-1.067.468-3.258 1.004-1.334 1.406-2.15 1.28-2.5-.117-.334-.861-.242-.861-.242l-2.46.017s-.184-.025-.318.058c-.134.075-.218.267-.218.267s-.385 1.033-.904 1.908c-1.096 1.85-1.53 1.95-1.715 1.833-.418-.266-.31-1.075-.31-1.65 0-1.8.277-2.541-.535-2.741-.268-.067-.469-.109-1.146-.117-.879-.008-1.624 0-2.042.208-.276.142-.494.442-.368.459.159.025.535.1.728.366.25.342.242 1.109.242 1.109s.151 2.108-.334 2.375c-.335.183-.787-.184-1.766-1.867a15.224 15.224 0 01-.878-1.808s-.076-.175-.201-.275c-.16-.117-.377-.159-.377-.159l-2.334.009s-.352 0-.477.15c-.117.133-.008.391-.008.391S5.74 13.85 7.807 16c1.9 1.967 4.058 1.75 4.058 1.75h.979s.293.058.443-.1c.143-.15.134-.333.134-.333s-.016-1.309.594-1.5c.603-.192 1.372 1.266 2.192 1.816.62.425 1.088.334 1.088.334l2.184-.034s1.146-.066.603-.966c-.059-.067-.335-.65-1.64-1.867zm6.535-2.6c0 6.833-5.565 12.375-12.426 12.375S.125 19.333.125 12.5 5.69.125 12.551.125 24.977 5.667 24.977 12.5z" />
    </svg>
  );
}

export default SvgVk;