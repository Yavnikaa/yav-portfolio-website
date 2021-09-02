import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';
import Card from './card';

class UXDesign extends Component{
    render(){ 
        const header= {
            heading:'UX DESIGN',
            caption:'INSERT SOME CAPTION HERE'
        }

        const cards= [
            {
                color:2,
                link: 'https://github.com/Yavnikaa/teams-clone',
                organisation: 'Microsoft',
                project: 'Building teams clone',
                logo:'',
                desc:'Hello testing please',
                timeperiod:'MAY-JUNE 2021',
                arrow:'',
            },
            {
                color:2,
                link: 'https://github.com/Yavnikaa/teams-clone',
                organisation: 'Microsoft',
                project: 'Building teams clone',
                logo:'',
                desc:'Hello testing please',
                timeperiod:'MAY-JUNE 2021',
                arrow:'',
            },
            {
                color:2,
                link: 'https://github.com/Yavnikaa/teams-clone',
                organisation: 'Microsoft',
                project: 'Building teams clone',
                logo:'',
                desc:'Hello testing please',
                timeperiod:'MAY-JUNE 2021',
                arrow:'',
            },
        ]

        return (
            <div>
                <SubHeader headerData={header}/>
                <Card cardData={cards}/>
            </div>
        )     
    }
}

export default UXDesign;