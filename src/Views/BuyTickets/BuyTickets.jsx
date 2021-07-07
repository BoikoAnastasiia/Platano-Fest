import React from 'react';
import AppBar from '../../Сomponents/AppBar';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';

export default function Contacts() {
  return (
    <div
      style={{
        backgroundColor: '#FFC64F',
      }}
    >
      <AppBar />

      <MainContainer>
        <Header text="купить билеты" />
        <div className="tickets-wrapper">
          <p className="tickets-intro">
            Цены увеличиваются по датам и квотам. На каждую ценовую категорию
            выделено ограниченное колличество билетов. Как только билеты в
            категории заканчваются — цена увеличивается.
          </p>
          <ul className="tickets-list">
            <li className="tickets-list-item">
              <div className="left-side-ticket">
                <p className="ticket-date">2 июня / дюрсо</p>
                <div className="middle-left-ticket-wrapper">
                  <h2 className="ticket-header">базовый один день</h2>
                  <p className="ticket-descr">
                    кемпинг / 1 мастер-класс / 1 квест
                  </p>
                </div>
                <p className="secondary-ticket-descr">
                  *возможна аренда палатки
                </p>
              </div>
              <div className="right-side-ticket">
                <a href="https://platanos.ru/#tickets" className="tickets-btn ">
                  купить билеты
                </a>
                <p className="buy-text-active">ДО 30.05 — 1 000 ₽</p>
                <p className="buy-text-passive">ДО 30.05 — 1 000 ₽</p>
                <p className="buy-text-passive">ДО 30.05 — 1 000 ₽</p>
              </div>
            </li>
          </ul>
        </div>
      </MainContainer>
    </div>
  );
}
