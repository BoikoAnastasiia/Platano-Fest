import AppBar from '../../Сomponents/AppBar';
import MainContainer from '../../Сomponents/MainContainer';
import Header from '../../Сomponents/Header';

export default function Contacts() {
  return (
    <div
      style={{
        backgroundColor: '#1F1F1F',
        height: '100vh',
        backgroundSize: 'cover',
        color: 'white',
      }}
    >
      <AppBar />
      <MainContainer>
        <Header text="контакты" color="#fff" />
      </MainContainer>
    </div>
  );
}
