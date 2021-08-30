import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';

class UXDesign extends Component{
    render(){ 
        const header= {
            heading:'UX DESIGN',
            caption:'INSERT SOME CAPTION HERE'
        }
        return (
            <div>
                <SubHeader headerData={header}/>
            </div>
        )     
    }
}

export default UXDesign;