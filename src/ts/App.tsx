import React from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Component } from 'react'
import '../style/css/app.css'

import  Header  from './Header'
import  Menu  from './Menu'
import  Main  from './content/Main'
import  Contacts  from './content/Contacts'
import  Recording  from './content/Recording'
import  DoctorServices  from './content/DoctorServices'
import  Staff  from './content/Staff'

import logo from '../style/img/logo.png'

const MENU_NAMES = [
	{name: 'Головна', path: '/'},
	{name: 'Послуги', path: '/services'},
	{name: 'Персонал', path: '/staff'},
	{name: 'Контакти', path: '/contact'},
	{name: 'Інформація', path: '/info'},
] 

const App: React.FC = () => {
  return (
    <Router>
      <div className='app'>

        <div className='main-main-header'>
          <div className='img-logo'>
            <Link to={MENU_NAMES[0].path} > <img src={logo} alt='' /> </Link>
          </div>
          <div className='main-header'>
            <Header />
          </div>
        </div>

        <div className='navigation'>
          <Menu />
        </div>

        <div className='body'>
          <Route exact path='/' component={Main} />
          <Route path='/services' component={DoctorServices} />
          <Route path='/staff' component={Staff} />
          <Route path='/recording' component={Recording} />
        </div>

      </div>
    </Router>
  );
}

export default App;