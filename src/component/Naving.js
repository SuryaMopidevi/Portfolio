import React from 'react';
// import Project from './component/projects';
// import Home from './component/Home';
// import {BrowserRouter,Routes,Route,Switch,Link} from 'react-router-dom';

function Naving(props) {
  return (
    <div>
      <header className='header'>
        <a className='logo'  href='http://localhost:3000/#' alt=''><img 
        style={{
          width:"30px"
        }}
        src='logo.jpeg' /><span>M</span>surya</a> 
        <nav className='navbar'>
          <a href='http://localhost:3000/#' alt='home'>Home</a>
          <a href='http://localhost:3000/#' alt='Project' onClick={props.func} >Projects</a>
          <a href='https://github.com/SuryaMopidevi/resume/blob/main/Resume.pdf' alt='Resume' >Resume</a>
          <a href='http://localhost:3000/#' alt='contact' onClick={props.func}>Contact</a>
        </nav>
      </header>
    </div>
  )
}

export default Naving