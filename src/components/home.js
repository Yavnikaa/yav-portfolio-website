import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';

class Home extends Component{
    render(){ 
        const header= {
            heading:'YAVNIKA GARG',
            caption:'TESTING'
        }
        return (
            <div>
                <SubHeader headerData={header}/>
            </div>
        )     
    }
}

export default Home;