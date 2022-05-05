import './App.css';
import SideBar from './components/sidebar/SideBar';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';

import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Banner />
        <div className="listcard container">
          <Card icon={icon1} />
          <Card icon={icon2} />
          <Card icon={icon3} />
        </div>
        <Footer />
      </div>
      <SideBar />
    </div>
  );
}

export default App;
