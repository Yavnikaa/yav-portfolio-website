import React, {Component} from 'react'
import '../index.css';
import '../index.scss';
import SubHeader from './sub-header';
import me from '../assets/me.png';

class About extends Component{
    render(){ 
        const header= {
            heading:'ABOUT ME',
            caption:' I AM A MEME PAGE.'
        }

        return (
            <div>
                <SubHeader headerData={header}/>
                <div className='about-container'> 
                <img src={me} max-height="200px"/> 
                <div className='about-page-text'> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
                </div>
                <div> 
                    <div className='heading-about'> MEET MY FRIENDS AND MENTORS!</div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="container-general">
                                <div className="gallery-wrap wrap-effect-1">
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                    <div className="item"></div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                        </div>
                        </div>
                        </div>
        )     
    }
}

export default About;
