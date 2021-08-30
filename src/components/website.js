import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';

class WebsiteDesign extends Component{
    render(){ 
        const header= {
            heading:'WEBSITE DESIGN',
            caption:'INSERT SOME CAPTION HERE'
        }
        return (
            <div>
                <SubHeader headerData={header}/>
            </div>
        )     
    }
}

export default WebsiteDesign;