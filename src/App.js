
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
import BurgerMenu from './components/burgerMenu';

class App extends React.Component {
  showUpElements = []
  state = {
  }
  burgerMenu = React.createRef()

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
    let isVisible = (elemTop <= window.innerHeight / 3 * 2) //&& (elemBottom <= window.innerHeight);
    return isVisible;
  }

  onMenuItemClick(e, item, index) {
    this.burgerMenu.current.hideMenu()
    
    e.preventDefault();
    
    switch (index) {
      case 0: 
        this.scrollTo("App-main-works")
        break
      case 1:
        this.scrollTo("App-main-feedback")
        break;
      case 2:
        this.scrollTo("App-main-partners")
        break;
      case 3:
        this.scrollTo("App-main-news")
        break;
      default:
        break;
    }
    return false
  }

  scrollTo = (id) => {
    if (window.innerWidth >= 1024) {
      let el = document.querySelector(`#${id}`)
      if (el != null) el.scrollIntoView({behavior: "smooth"})
    } else {
      setTimeout(() => {
        let el = document.querySelector(`#${id}`)
        if (el != null) el.scrollIntoView({behavior: "smooth"})
      }, 400)
    }
  }

  scrollEventHandler = e => {
    this.showUpElements.forEach(elem => {
      if(elem && this.isScrolledIntoView(elem)) {
        Array.from(elem.children).forEach(el => {
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
          <div className="App-menu App-burger-menu">
            <BurgerMenu desktopHidden translateY={240} ref={this.burgerMenu} >
              <div className="logo-container"><Logo /></div>
              <div className="menu-container" ><MainMenu items={data.main.menu} onMenuItemClick={(e, item, index) => {return this.onMenuItemClick(e, item, index)}}/></div>
            </BurgerMenu>
          </div>
          
          <div className="App-social-icons App-header-social-icons">
            {data.main.social.map((item, i) => 
              <IconSocial key={i} social={item.icon} href={item.link} title={item.name}/>
            )}
          </div>
        </header>
      </Wrapper>
        
      
      <main className="App-main">
        <Wrapper id="App-main-banner"><MainBanner className="App-main-banner App-main-layout" list={data.main.banners}></MainBanner></Wrapper>
        <Wrapper id="App-main-works"><Works className="App-main-works App-main-layout App-main-layout-left-extend" data={data.main.works} consult={data.main.consult}></Works></Wrapper>
        <Wrapper id="App-main-feedback"><Feedback className="App-main-feedback App-main-layout" data={data.main.feedback} colorize={true} roundImage={true}></Feedback></Wrapper>
        <Wrapper id="App-main-autopark"><Autopark className="App-main-autopark App-main-layout" data={data.main.auto} consult={data.main.consult}></Autopark></Wrapper>
        <Wrapper id="App-main-partners"><Feedback className="App-main-partners App-main-layout" data={data.main.partners}></Feedback></Wrapper>
        <Wrapper  id="App-main-pavilion"className="light-bg header-wrapper">
          <Pavilion  className="App-main-pavilion" data={data.main.pavilion}></Pavilion>
        </Wrapper>
        <Wrapper  id="App-main-news"className="show-up dark-bg header-wrapper">
          <News className="App-main-news" data={data.main.news} social={data.main.social} consult={data.main.consult}></News>
        </Wrapper>
        
      </main>
      <Footer></Footer>
      </div>
    );
  }
}


export default App;
