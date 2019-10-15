
import React from 'react';
import './App.scss';
import './assets/iconfont/css/fontello.css';
import Logo from './components/logo'
import MainMenu from './components/mainMenu'
import IconSocial from './components/iconSocial'



import data from './AppData';
import MainBanner from './containers/mainBanner';
import TextBlock from './components/textBlock';
import Consult from './components/consult';
import TitleBlock from './components/titleBlock';
import InfoBlock from './components/infoBlock';
import CarouselMediaObject from './components/carouselMediaObject';
import Slider from './components/slider';
import Pagination from './components/pagination';
import Footer from './components/footer';
import Wrapper from './components/wrapper';
function App() {
  return (
    <div className="App">
    <Wrapper>
      <header className="App-header">
        <div className="App-logo">
          <Logo />
        </div>
        <div className="App-menu">
          <MainMenu items={data.main.menu} />
        </div>
        
        <div className="App-header-social-icons">
          {data.main.social.map((item, i) => 
            <IconSocial key={i} social={item.icon} href={item.link} title={item.name}/>
          )}
        </div>
      </header>
    </Wrapper>
       
    <Wrapper>
      <main className="App-main">
        <MainBanner className="App-main-layout" list={data.main.banners}></MainBanner>
        <section className="App-works App-main-layout">
          <div className="App-works-art">
              <img src={data.main.works.image.src} alt={data.main.works.image.alt} />
          </div>
          <div className="App-works-info">
              <TextBlock title={data.main.works.title} desc={data.main.works.desc} ></TextBlock>
          </div>
          <div className="App-works-consult">
              <Consult title={data.main.consult.title} button={data.main.consult.button.title} ></Consult>
          </div>
        </section>
        
        <section className="App-feedback">
          <TitleBlock className="App-title-with-divider" text={data.main.feedback.title}><Pagination /></TitleBlock>
          <Slider elementsCount={data.main.feedback.list.length} current>
            {data.main.feedback.list.map((item, index) => 
              <InfoBlock 
                className="App-info-block" 
                image={item.image} 
                title={item.title} 
                desc={item.desc} 
                more={item.place} 
                subtitle={item.position} 
                key={index} 

              ></InfoBlock>
            )}
          </Slider>
        </section>
      </main>
     </Wrapper> 
      <Footer></Footer>
    </div>
  );
}


export default App;
