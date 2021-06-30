import React from 'react';
import Vk from '../../Icons/Vk';
import Ig from '../../Icons/Ig';
import Tg from '../../Icons/Tg';
import './Social.scss';

export default function Social({ fill }) {
  return (
    <ul className="icons-wrapper">
      <li className="nav-item">
        <a href="https://vk.com/" target="_blank" rel="noreferrer noopener">
          <Vk fill={fill} />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Ig fill={fill} />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://telegram.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Tg fill={fill} />
        </a>
      </li>
    </ul>
  );
}
