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
                desc:"As a part of Microsoft Engage, I developed a simple video calling application using Node, React, Websockets and MongoDB.",
                timeperiod:'MAY-JUNE 2021',
            },
            {
                color:3,
                link: 'https://github.com/Yavnikaa/yav-portfolio-website',
                organisation: 'PERSONAL PROJECT',
                project: 'My Portfolio Website',
                desc:'This is my online identity and a glimpse of who I am. With a minimalist design, it is built completely with React. ',
                timeperiod:'AUG-SEP 2021',
            },
            {
                color:3,
                link: 'https://github.com/Yavnikaa/BugFeed',
                organisation: 'IMG, IIT ROORKEE',
                project: 'An internal bug-tracking application',
                desc:'I worked on Bugfeed using Django, React and Oauth, to aid the testing process in the product cycle at IMG. ',
                timeperiod:'MAY-JULY 2020',
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