import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';
import Card from './card';

class WebsiteDesign extends Component{
    render(){ 
        const header= {
            heading:'WEBSITE DESIGN',
            caption:'INSERT SOME CAPTION HERE'
        }

        const cards= [
            {
                color:1,
                link: 'https://github.com/Yavnikaa/teams-clone',
                organisation: 'MICROSOFT INDIA',
                project: 'Building teams clone',
                desc:"As you explore other people's React apps, keep an eye out for common JavaScript patterns.",
                timeperiod:'MAY-JUNE 2021',
                website:'https://github.com/Yavnikaa/teams-clone',
            },
            {
                color:1,
                link: 'https://github.com/Yavnikaa/teams-clone',
                organisation: 'Microsoft',
                project: 'Building teams clone',
                desc:'Hello testing please',
                timeperiod:'MAY-JUNE 2021',
                website:'',
            },
            {
                color:1,
                link: 'https://github.com/Yavnikaa/teams-clone',
                organisation: 'Microsoft',
                project: 'Building teams clone',
                desc:'Hello testing please',
                timeperiod:'MAY-JUNE 2021',
                website:'',
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

export default WebsiteDesign;