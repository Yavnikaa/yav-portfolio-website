import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';
import Card from './card';

class UXDesign extends Component{
    render(){ 
        const header= {
            heading:'UX DESIGN',
            caption:'I THINK ALOT, SO THAT YOU HAVE TO THINK LESS'
        }

        const cards= [
            {
                color:2,
                link: 'https://yavnikagarg3435.medium.com/ui-ux-case-study-designing-a-gamified-self-learning-portal-174b6db7c981',
                organisation: 'NEWTON SCHOOL',
                project: 'Designing a gamified self learning portal',
                desc:'This platform is focussed on cultivating the art of googling to students while learning SQL in a gamified environment.',
                timeperiod:'FEB-MAR 2021',
            },
            {
                color:2,
                link: 'https://www.behance.net/gallery/106310643/Daily-UX-Writing-Challenge',
                organisation: 'PERSONAL PROJECT',
                project: 'Daily UX Writing Challenge',
                desc:'This captures an attempt to a popular prompt from https://dailyuxwriting.com/ , to curate the best possible designs with the right choice of words.',
                timeperiod:'NOVEMBER 2020',
            },
            {
                color:2,
                link: 'https://channeli.in/r_care',
                organisation: 'IMG, IIT ROORKEE',
                project: 'R-Care: Request emergency covid related help for IITR residents',
                desc:'This application is used to get verified leads and all covid related resources with an integrated notification management system to help in time of distress.',
                timeperiod:'FEBRUARY 2021',
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