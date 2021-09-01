import React, {Component} from 'react'
import {Link} from "react-router-dom";
import '../index.css'
import single_wave from '../assets/footer_wave.svg'
import fb_logo from '../assets/fb_logo.svg'
import github_logo from '../assets/github_logo.svg'
import linkedin_logo from '../assets/linkedin_logo.svg'
import mail_logo from '../assets/mail_logo.svg'
import twitter_logo from '../assets/twitter_logo.svg'

class Footer extends Component{
    render(){
        return (
            <div className="footer-container">
                <div className="restrict"> 
                <div className='about-text'> As you explore other people's React apps, keep an eye out for common JavaScript patterns. 
                You should start to recognize some of the concepts you've learned. </div>
                <div className="center">
                <Link to='./about' className="button-main"> KNOW ALL ABOUT ME </Link>
                <img src={single_wave}/>
                <div className="social-bar">
                    <a href="https://www.facebook.com/yavnika.garg.3" className="social-icon"> <img src={fb_logo}/> </a>
                    <a href="mailto:yavnikagarg3435@gmail.com" className="social-icon"> <img src={mail_logo}/> </a>
                    <a href="https://www.linkedin.com/in/yavnika-garg-494580135/" className="social-icon"> <img src={linkedin_logo}/> </a>
                    <a href="https://github.com/Yavnikaa" className="social-icon"> <img src={github_logo}/> </a>
                    <a href="https://twitter.com/yavnikaaa?lang=en" className="social-icon"> <img src={twitter_logo}/> </a>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Footer