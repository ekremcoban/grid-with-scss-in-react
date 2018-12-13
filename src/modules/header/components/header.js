import React from 'react';
import './header.scss';
import logoWhite from '../../../assets/img/logo-white.png';

const header = () => {
    return (
        <div className="header">
            <div className="header__logo-box">
                <img src={logoWhite} alt="Logo" className="header__logo"></img>
            </div>
            <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Outdoors</span>
                <span className="heading-primary--sub">is where life happen</span>
            </h1>
            <a href="#" className="btn btn--white btn--animated">Discover out tours</a>
            </div>
        </div>
    );
    
}

export default header;