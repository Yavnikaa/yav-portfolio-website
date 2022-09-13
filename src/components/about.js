import React, {Component} from 'react'
import '../index.css';
import '../index.scss';
import SubHeader from './sub-header';

import me from '../assets/me.png';
import about_one from '../assets/about_one.png'
import about_two from '../assets/about_two.png'
import about_three from '../assets/about_three.png'

class About extends Component{
    render(){ 
        const header= {
            heading:'ABOUT ME',
            caption:' I THINK AND THEREFORE I AM.'
        }

        return (
            <div>
                <SubHeader headerData={header}/>
                <div className='about-container'> 
                <img src={me} max-height="200px"/> 
                <div className='about-page-text'> At the very outset, I like to describe myself as a chirpy hustler. Word is I am a geek lost in the vanity of technology, travel and food. Currently, I am pursuing my BTech from IIT Roorkee, and have completed my summer internship in 2022 with Microsoft, India. In my college, I am part of IMG, a technical group that strives to lead in innovation and make the digital stay at IITR as comfortable as possible, as the Chief of Design. If you do not find me being nitpicky about pixels or trying out a new framework, I would probably be playing board games, or watching an animated movie while devouring on a dessert. I am a vocal observant while having a flexible lifestyle. If you are here, thanks for visiting my space. Looking forward to share and build more stories with you!</div>
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
                        <div>

                        <div className='heading-about'> I KEEP FIDDLING AROUND! </div>
                        <div className='random-container'>
                        <div>
                        <img src={about_one} className='about_image'/>
                        <div className='about-card'> 
                        <div className='about-card-header'> I am fond of content creation. </div>
                        <div className='about-card-text'> Often, I take a break by doodling digitally or writing witty one-liners, to channelise my creativity. Let me know if you like them by visiting <a href="https://www.instagram.com/img_iitr/" className='inline-link'> <em> here </em></a> for a sneak-peek. </div>
                        </div>
                        </div>

                        <div>
                        <img src={about_two} className='about_image'/>
                        <div className='about-card-middle'> 
                        <div className='about-card-header'> I like to contribute to open source. </div>
                        <div className='about-card-text'> With the feeling of giving back to the open source communities, I like to do my bit by taking up issues now and then. I have worked with Fedora, UNICEF, Wikimedia and Public Lab. One of my live instance includes <a href="https://dribbble.com/shots/15262920-Ask-Fedora-Logomark" className='inline-link'> <em> this logomark. </em></a></div>
                        </div>
                        </div>

                        <div>
                        <img src={about_three} className='about_image'/>
                        <div className='about-card-three'> 
                        <div className='about-card-header'> I am an avid programmer. </div>
                        <div className='about-card-text'> Challenging my mind with new problems is always inviting for me and therefore I enjoy competitive programming and DSA. I am proficient in C++ and Python.  </div>
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
