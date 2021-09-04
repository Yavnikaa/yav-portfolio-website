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
                link: 'https://yavnikagarg3435.medium.com/ui-ux-case-study-designing-a-gamified-self-learning-portal-174b6db7c981',
                organisation: 'NEWTON SCHOOL',
                project: 'Designing a gamified self learning portal',
                desc:'This platform is focussed on cultivating the art of googling to students while learning SQL in a gamified environment.',
                timeperiod:'FEB-MAR 2021',
            },
            {
                color:2,
                link: 'https://medium.com/@yavnikagarg3435/razorpay-design-assignment-ce5d9b426464',
                organisation: 'RAZORPAY DESIGN ASSIGNMENT',
                project: 'Introducing scheduling and subscription to Zomato',
                desc:'This captures pre-ordering in the Zomato app while ensuring flexibility, ease of payment and comfortable food choices and timings for the user.',
                timeperiod:'APRIL 2021',
            },
            {
                color:2,
                link: 'https://github.com/Yavnikaa/teams-clone',
                organisation: 'IMG, IIT ROORKEE',
                project: 'Designing a component managament system for IITR Website',
                desc:'This application is used to manage the entire website of IIT Roorkee allowing users to create, edit and deploy web pages.',
                timeperiod:'AUG-SEPT 2021',
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