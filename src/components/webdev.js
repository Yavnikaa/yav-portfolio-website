import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';

class WebDevelopment extends Component{
    render(){ 
        const header= {
            heading:'WEB DEVELOPMENT',
            caption:'INSERT SOME CAPTION HERE'
        }
        return (
            <div>
                <SubHeader headerData={header}/>
            </div>
        )     
    }
}

export default WebDevelopment;