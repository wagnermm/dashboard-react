import { useState } from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import MainDashboard from './Dashboards/MainDashboard';
import './App.css';

function App() {
  const [active, setActive] = useState("nav-mobile");
  const [toggleIcon, setToggleIcon] = useState("btn-mobile");

  const navToggle = ()=> {
    active === 'nav-mobile' ? setActive('nav-mobile nav-active') : setActive('nav-mobile');
    toggleIcon === 'btn-mobile' ? setToggleIcon('btn-mobile toggle') : setToggleIcon('btn-mobile');
  };
  const [close, setClose] = useState("close-menu");
  const closeMenu=()=> {
    close === "menu-close" ? setClose('menu-close nav__active') : setClose("menu-close");
    active === 'nav-mobile' ? setActive('nav-mobile nav-active') : setActive('nav-mobile');
    toggleIcon === 'btn-mobile' ? setToggleIcon('btn-mobile toggle') : setToggleIcon('btn-mobile');
  }
  return (
    <div className="App">
      <BrowserRouter>
        <header className='header'>
          <nav className='nav'>
            <ul>
              <li><Link to="/"></Link></li>
              <li><Link to="/main-dashboard">Dashboard</Link></li>
            </ul>
          </nav>
          <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
            <nav className={active}>
                <div onClick={closeMenu} className="close-menu">X</div>
              <ul className={close}>
                <li><Link to="/"></Link></li>
                <li><Link to="/main-dashboard">Dashboard</Link></li>
            </ul>
            </nav>
        </header>
        <Routes>
          <Route path='/main-dashboard' element={<MainDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
