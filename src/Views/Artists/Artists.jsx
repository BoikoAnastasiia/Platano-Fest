import React from 'react';
import AppBar from '../../Сomponents/AppBar';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';

export default function Artists() {
  return (
    <div style={{ backgroundColor: '#ffc64f', height: '100vw' }}>
      <AppBar />
      <MainContainer>
        <Header text="хэдлайнеры" />
        <ul className="">
          <li>
            <div>
              <img src="" alt="" />
            </div>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
          </li>
          <li>
            <div>
              <img src="" alt="" />
            </div>
          </li>
        </ul>
      </MainContainer>
    </div>
  );
}
