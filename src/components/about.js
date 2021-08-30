import React, {Component} from 'react'
import '../index.css';
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
            </div>
        )     
    }
}

export default About;