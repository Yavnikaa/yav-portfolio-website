import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';
import yav_blue from '../assets/yav_blue.png'
import yav_yellow from '../assets/yav_yellow.png'
import yav_pink from '../assets/yav_pink.png'

class Home extends Component{
    render(){ 
        const header= {
            heading:'YAVNIKA GARG',
            caption:'TESTING'
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
                <div className='box-text'> As you explore other people's React apps, keep an eye out for common JavaScript patterns. 
                You should start to recognize some of the concepts you've learned. </div>
                <a href='./webd' className='box-button'> VIEW ALL </a>
                </div>
                </div>

                <div className='strip-two'>
                <div className='blue-box'>
                    <img src={yav_yellow} className='img-box-two'/>
                </div>
                <div className='strip-text-two'>
                <div className='box-heading'> WEBSITE DESIGN </div>
                <div className='box-text'> As you explore other people's React apps, keep an eye out for common JavaScript patterns. 
                You should start to recognize some of the concepts you've learned. </div>
                <a href='./webd' className='box-button'> VIEW ALL </a>
                </div>
                </div>

                <div className='strip-three'>
                <div className='blue-box'>
                    <img src={yav_pink} className='img-box-three'/>
                </div>
                <div className='strip-text-three'>
                <div className='box-heading'> UX DESIGN </div>
                <div className='box-text'> As you explore other people's React apps, keep an eye out for common JavaScript patterns. 
                You should start to recognize some of the concepts you've learned. </div>
                <a href='./webd' className='box-button'> VIEW ALL </a>
                </div>
                </div>

            </div>
        )     
    }
}

export default Home;