import React from 'react';
import AppBar from '../../Сomponents/AppBar';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';
import './BuyTickets.scss';

export default function BuyTickets() {
  return (
    <div
      style={{
        backgroundColor: '#FFC64F',
        // minHeight: '1400px',
        paddingBottom: 'auto',
      }}
    >
      <AppBar />

      <MainContainer>
        <Header text="купить билеты" />
        <div className="tickets-wrapper">
          <p className="tickets-intro">
            Цены увеличиваются по датам и квотам. На каждую ценовую категорию
            выделено ограниченное количество билетов. Как только билеты в
            категории заканчиваются&nbsp;— цена увеличивается.
          </p>
          <ul className="tickets-list">
            <li className="tickets-list-item">
              <div className="left-side-ticket">
                <p className="ticket-date">2 июня / дюрсо</p>
                <div className="middle-left-ticket-wrapper">
                  <h2 className="ticket-header">базовый один&nbsp;день</h2>
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
            <li className="tickets-list-item">
              <div className="left-side-ticket">
                <p className="ticket-date">2 июня / дюрсо</p>
                <div className="middle-left-ticket-wrapper">
                  <h2 className="ticket-header">ПОЛНЫЙ ОДИН&nbsp;ДЕНЬ</h2>
                  <p className="ticket-descr">
                    ХОСТЕЛ / 2 МАСТЕР-КЛАССА / 1 КВЕСТ
                  </p>
                </div>
                <p className="secondary-ticket-descr">* ВКЛЮЧЕН КЕМПИНГ</p>
              </div>
              <div className="right-side-ticket">
                <a href="https://platanos.ru/#tickets" className="tickets-btn ">
                  купить билеты
                </a>
                <p className="buy-text-active">ДО 30.05 — 2 000 ₽</p>
                <p className="buy-text-passive">ДО 30.05 — 2 500 ₽</p>
                <p className="buy-text-passive">ДО 30.05 — 3 500 ₽</p>
              </div>
            </li>
            <li className="tickets-list-item">
              <div className="left-side-ticket">
                <p className="ticket-date">2-3 ИЮНЯ / ДЮРСО</p>
                <div className="middle-left-ticket-wrapper">
                  <h2 className="ticket-header">
                    базовый <br /> два&nbsp;дня
                  </h2>
                  <p className="ticket-descr">
                    КЕМПИНГ / 3 МАСТЕР-КЛАССА / 1 КВЕСТ
                  </p>
                </div>
                <p className="secondary-ticket-descr">
                  *возможна аренда палатки
                </p>
              </div>
              <div className="right-side-ticket">
                <div className="right-side-wrapper"></div>
                <a href="https://platanos.ru/#tickets" className="tickets-btn ">
                  купить билеты
                </a>
                <p className="buy-text-active">ДО 30.05 — 2 000 ₽ ₽</p>
                <p className="buy-text-passive">ДО 15.06 — 2 500 ₽</p>
                <p className="buy-text-passive">ДО 2.07 — 3 000 ₽</p>
              </div>
            </li>
            <li className="tickets-list-item">
              <div className="left-side-ticket">
                <p className="ticket-date">2-3 ИЮНЯ / ДЮРСО</p>
                <div className="middle-left-ticket-wrapper">
                  <h2 className="ticket-header">базовый один&nbsp;день</h2>
                  <p className="ticket-descr">
                    кемпинг / 1 мастер-класс / 1 квест
                  </p>
                </div>
                <p className="secondary-ticket-descr">* ВКЛЮЧЕН КЕМПИНГ</p>
              </div>
              <div className="right-side-ticket">
                <a href="https://platanos.ru/#tickets" className="tickets-btn ">
                  купить билеты
                </a>
                <p className="buy-text-active">ДО 30.05 — 3 000 ₽</p>
                <p className="buy-text-passive">ДО 15.06 — 3 500 ₽</p>
                <p className="buy-text-passive">ДО 2.07 — 4 000 ₽</p>
              </div>
            </li>
          </ul>
        </div>
      </MainContainer>
    </div>
  );
}
