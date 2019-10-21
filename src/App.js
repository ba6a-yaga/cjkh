
import React from 'react';
import './App.scss';
import './assets/iconfont/css/fontello.css';
import Logo from './components/logo'
import MainMenu from './components/mainMenu'
import IconSocial from './components/iconSocial'



import data from './AppData';
import MainBanner from './containers/mainBanner';
import TextBlock from './components/textBlock';
import Consult from './containers/consult';
import TitleBlock from './components/titleBlock';
import InfoBlock from './components/infoBlock';
import CarouselMediaObject from './components/carouselMediaObject';
import Slider from './components/slider';
import Pagination from './components/pagination';

import Footer from './components/footer';
import Wrapper from './components/wrapper';
import Works from './containers/works';
import Feedback from './containers/feedback';
import Autopark from './containers/autopark';
import Pavilion from './containers/pavilion';
import News from './containers/news';
import ContactsPopup from './containers/contactsPopup';
import Popup from './components/popup';
function App() {
  return (
    <div className="App">
    <Wrapper className="light-bg header-wrapper">
      <header className="App-header">
        <div className="App-logo">
          <Logo />
        </div>
        <div className="App-menu">
          <MainMenu items={data.main.menu} />
        </div>
        
        <div className="App-social-icons App-header-social-icons">
          {data.main.social.map((item, i) => 
            <IconSocial key={i} social={item.icon} href={item.link} title={item.name}/>
          )}
        </div>
      </header>
    </Wrapper>
       
    
    <main className="App-main">
      <Wrapper><MainBanner className="App-main-layout" list={data.main.banners}></MainBanner></Wrapper>
      <Wrapper><Works className="App-main-layout App-main-layout-left-extend" data={data.main.works} consult={data.main.consult}></Works></Wrapper>
      <Wrapper><Feedback className="App-main-layout" data={data.main.feedback} colorize={true} roundImage={true}></Feedback></Wrapper>
      <Wrapper><Autopark className="App-main-layout" data={data.main.auto} consult={data.main.consult}></Autopark></Wrapper>
      <Wrapper><Feedback className="App-main-layout" data={data.main.partners}></Feedback></Wrapper>
      <Wrapper className="light-bg header-wrapper">
        <Pavilion  data={data.main.pavilion}></Pavilion>
      </Wrapper>
      <Wrapper className="dark-bg header-wrapper">
        <News data={data.main.news} social={data.main.social} consult={data.main.consult}></News>
      </Wrapper>
      
    </main>
    <Footer></Footer>
    </div>
  );
}


export default App;
