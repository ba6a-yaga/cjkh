
import React from 'react';
import './App.scss';
import './assets/iconfont/css/fontello.css';
import Logo from './components/logo'
import MainMenu from './components/mainMenu'
import IconSocial from './components/iconSocial'

import data from './AppData';
import MainBanner from './containers/mainBanner';

import Footer from './components/footer';
import Wrapper from './components/wrapper';
import Works from './containers/works';
import Feedback from './containers/feedback';
import Autopark from './containers/autopark';
import Pavilion from './containers/pavilion';
import News from './containers/news';

class App extends React.Component {
  showUpElements = []
  state = {
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollEventHandler, true)
    this.showUpElements = [
      document.querySelector('.App-main-banner'),
      document.querySelector('.App-main-works'),
      document.querySelector('.App-main-feedback'),
      document.querySelector('.App-main-autopark'),
      document.querySelector('.App-main-partners'),
      document.querySelector('.App-main-pavilion'),
      document.querySelector('.App-main-news')
    ]

    this.showUpElements.forEach(elem => {
      if(elem) {
        Array.from(elem.children).forEach(el => {el.style.opacity = 0})
      }
    });
    this.scrollEventHandler()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEventHandler, true)
  }

  isScrolledIntoView(el) {
    let elemTop = el.getBoundingClientRect().top;
    let elemBottom = el.getBoundingClientRect().bottom;
    let isVisible = (elemTop <= window.innerHeight / 3 * 2) //&& (elemBottom <= window.innerHeight);
    return isVisible;
  }

  scrollEventHandler = e => {
    this.showUpElements.forEach(elem => {
      if(elem && this.isScrolledIntoView(elem)) {
        Array.from(elem.children).forEach(el => {
          console.log(el.style.getPropertyValue("animation"))
          if (el.style.getPropertyValue("animation") ===  "")  {
            el.style.setProperty("animation", ".75s ease-in-out forwards show-up-block")
          }
        })
      }
    });
  }
  render() {
    
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
        <Wrapper><MainBanner className="App-main-banner App-main-layout" list={data.main.banners}></MainBanner></Wrapper>
        <Wrapper><Works className="App-main-works App-main-layout App-main-layout-left-extend" data={data.main.works} consult={data.main.consult}></Works></Wrapper>
        <Wrapper><Feedback className="App-main-feedback App-main-layout" data={data.main.feedback} colorize={true} roundImage={true}></Feedback></Wrapper>
        <Wrapper><Autopark className="App-main-autopark App-main-layout" data={data.main.auto} consult={data.main.consult}></Autopark></Wrapper>
        <Wrapper><Feedback className="App-main-partners App-main-layout" data={data.main.partners}></Feedback></Wrapper>
        <Wrapper className="light-bg header-wrapper">
          <Pavilion  className="App-main-pavilion" data={data.main.pavilion}></Pavilion>
        </Wrapper>
        <Wrapper className="show-up dark-bg header-wrapper">
          <News className="App-main-news" data={data.main.news} social={data.main.social} consult={data.main.consult}></News>
        </Wrapper>
        
      </main>
      <Footer></Footer>
      </div>
    );
  }
}


export default App;
