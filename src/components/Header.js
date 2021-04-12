import React from 'react';
import logo from '../assets/logo.svg'
import './Header.css';
import Search from './Search'

const Header = () => {
    return (
        <div className="ui secondary pointing menu main">
            <img className="logo" src={logo} alt={logo}></img>
            <div className="menu avatar"><img src="https://react.semantic-ui.com/images/wireframe/square-image.png" class="ui avatar image" alt=""/><span>Username</span></div>
            <div className="right menu">
                <div className="right-menu">
                    <Search />
                </div>
                <div className="icon-menu">
                    <i className="bell outline icon"></i>
                </div>
                <div className="icon-menu">
                    <i className="setting icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Header;