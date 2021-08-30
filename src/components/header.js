import React, {Component} from 'react'
import '../index.css';
import circle from '../assets/margin_image.svg';

class Header extends Component{
    render(){
        return ( 
            <div className='header-container'>
                <img src={circle}/> 
                <div className='header-box'>
                <a href='./' className='header-title'> HOME </a>
                <a href='./webd' className='header-title'> WEB DEVELOPMENT </a>
                <a href='./websites' className='header-title'> WEBSITE DESIGN </a>
                <a href='./uxdesign' className='header-title'> UI/UX DESIGN </a>
                <a href='./about' className='header-title'> ABOUT ME </a>
                </div>
                <div className='button'>
                    <a href="mailto:yavnikagarg3435@gmail.com" className='contact-button'> CONTACT ME </a>
                </div>
            </div>
        )
    }
}

export default Header