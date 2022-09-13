import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';
import yav_blue from '../assets/yav_blue.png'
import yav_yellow from '../assets/yav_yellow.png'
import yav_pink from '../assets/yav_pink.png'
import {Link} from "react-router-dom";

class Home extends Component{
    render(){ 
        const header= {
            heading:'YAVNIKA GARG',
            caption:'SENIOR@IIT ROORKEE | DEVELOPER | DESIGNER'
        }
        return (
            <div>
                <SubHeader headerData={header}/>
                <div className='strip'>
                <div className='blue-box'>
                    <img src={yav_blue} className='img-box'/>
                </div>
                <div className='strip-text'>
                <div className='box-heading'> WEB DEVELOPMENT </div>
                <div className='box-text'> I am a keen software enthusiast, who has delivered successful projects on varied Tech Stacks. In my pursuit to acquire skills, I have contributed to open-source communities vis-a-vis.</div>
                <Link to='./webd' className='box-button'> VIEW MORE </Link>
                </div>
                </div>

                <div className='strip-two'>
                <div className='blue-box'>
                    <img src={yav_yellow} className='img-box-two'/>
                </div>
                <div className='strip-text-two'>
                <div className='box-heading'> WEBSITE DESIGN </div>
                <div className='box-text'> I have an eye for good design and like to play with pixels even through my code. I believe that websites are a face to any venture and have spent quite a time building websites for several organisations. </div>
                <Link to='./websites' className='box-button'> VIEW MORE </Link>
                </div>
                </div>

                <div className='strip-three'>
                <div className='blue-box'>
                    <img src={yav_pink} className='img-box-three'/>
                </div>
                <div className='strip-text-three'>
                <div className='box-heading'> UX DESIGN </div>
                <div className='box-text'> Problem solving always intrigues me and hence I dived deep into the principles of product design and psychology of human mind. Give me a project, and see me take ownership right from wireframing to deployment! </div>
                <Link to='./uxdesign' className='box-button'> VIEW MORE </Link>
                </div>
                </div>

            </div>
        )     
    }
}

export default Home;