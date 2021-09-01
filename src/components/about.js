import React, {Component} from 'react'
import '../index.css';
import '../index.scss';
import SubHeader from './sub-header';

class About extends Component{
    render(){ 
        const header= {
            heading:'ABOUT ME',
            caption:'TESTING'
        }

        return (
            <div>
                <SubHeader headerData={header}/>
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
        )     
    }
}

export default About;

//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