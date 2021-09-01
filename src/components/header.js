import React, {Component} from 'react';
import '../index.css';
import {Link} from "react-router-dom";
import circle from '../assets/margin_image.svg';

class Header extends Component{
    render(){
        return ( 
            <div className='header-container'>
                <img src={circle}/> 
                <div className='header-box'>
                <Link to='./yav-portfolio-website' className='header-title'> HOME </Link>
                <Link to='./webd' className='header-title'> WEB DEVELOPMENT </Link>
                <Link to='./websites' className='header-title'> WEBSITE DESIGN </Link>
                <Link to='./uxdesign' className='header-title'> UI/UX DESIGN </Link>
                <Link to='./about' className='header-title'> ABOUT ME </Link>
                </div>
                <div className='button'>
                    <a href="mailto:yavnikagarg3435@gmail.com" className='contact-button'> CONTACT ME </a>
                </div>
            </div>
        )
    }
}

export default Header