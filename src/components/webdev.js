import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';
import Card from './card';

class WebDevelopment extends Component{
    render(){ 
        const header= {
            heading:'WEB DEVELOPMENT',
            caption:'INSERT SOME CAPTION HERE'
        }

        const cards= [
            {
                color:3,
                link: 'https://github.com/Yavnikaa/teams-clone',
                organisation: 'MICROSOFT INDIA',
                project: 'Building teams clone',
                logo:'',
                desc:"As you explore other people's React apps, keep an eye out for common JavaScript patterns.",
                timeperiod:'MAY-JUNE 2021',
            },
            {
                color:3,
                link: 'https://github.com/Yavnikaa/teams-clone',
                organisation: 'Microsoft',
                project: 'Building teams clone',
                logo:'',
                desc:'Hello testing please',
                timeperiod:'MAY-JUNE 2021',
            },
            {
                color:3,
                link: 'https://github.com/Yavnikaa/teams-clone',
                organisation: 'Microsoft',
                project: 'Building teams clone',
                logo:'',
                desc:'Hello testing please',
                timeperiod:'MAY-JUNE 2021',
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

export default WebDevelopment;