import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';
import Card from './card';

class WebsiteDesign extends Component{
    render(){ 
        const header= {
            heading:'WEBSITE DESIGN',
            caption:'I THINK AND CODE VISUALLY'
        }

        const cards= [
            {
                color:1,
                link: 'https://iitr-website.medium.com/',
                organisation: 'IIT ROORKEE',
                project: 'Redesigning IITR Website',
                desc:"This is the revamp of the face of IITR, a premier technical institute in India, to improve accessibility, aesthetics and responsiveness.",
                timeperiod:'SEP-DEC 2020',
                website:'https://iitr.ac.in/',
            },
            {
                color:1,
                link: 'https://github.com/Yavnikaa/yav-portfolio-website',
                organisation: 'PERSONAL PROJECT',
                project: 'Portfolio Website',
                desc:'This is my space on the internet, truly designed and developed by me with love and creative freedom, as a reflection of who I am and what my life looks like.',
                timeperiod:'JUL-AUG 2021',
                website:'https://yavnikaa.github.io/yav-portfolio-website',
            },
            {
                color:1,
                link: 'https://yavnikagarg3435.medium.com/ui-ux-case-study-designing-a-website-for-a-home-interiors-store-491a090c19f',
                organisation: 'AZZO MODERN FURNITURE',
                project: 'Crafting a website for AZZO',
                desc:'A premium home interiors store in Delhi, this website is a digital identity to AZZO energising its bold and vibrant brand language.',
                timeperiod:'AUG-NOV 2020',
                website:'https://azzomodernfurniture.com/',
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