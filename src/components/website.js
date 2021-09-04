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
                link: 'https://iitr-website.medium.com/',
                organisation: 'IIT ROORKEE',
                project: 'Redesigning IITR Website',
                desc:"This is the revamp of the face of IITR, a premier technical institute in India, to improve accessibility, aesthetics and responsiveness.",
                timeperiod:'SEP-DEC 2020',
                website:'https://iitr.ac.in/',
            },
            {
                color:1,
                link: 'https://www.behance.net/gallery/104884515/Designing-a-website-for-prospective-students-of-IITR/modules/610565517',
                organisation: 'GEEK GAZETTE',
                project: 'Rebuilding Expectations Website',
                desc:'This website targets the prospective students and freshers of IITR, serving as a complete guide to make their stay at college comfortable.',
                timeperiod:'MAY-AUG 2020',
                website:'https://expectations.iitr.ac.in/',
            },
            {
                color:1,
                link: 'https://yavnikagarg3435.medium.com/ui-ux-case-study-designing-a-website-for-a-home-interiors-store-491a090c19f',
                organisation: 'AZZO MODERN FURNITURE',
                project: 'Crafting a website for AZZO',
                desc:'A premium home interiors store in Delhi, this website is a digital identity to AZZO reflecting its bold and vibrant brand language.',
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