import React, {Component} from 'react'
import '../index.css';
import SubHeader from './sub-header';
import Card from './card';

class WebDevelopment extends Component{
    render(){ 
        const header= {
            heading:'WEB DEVELOPMENT',
            caption:'I THINK, I INNOVATE TO LET OTHERS CTRL-C CTRL-V.'
        }

        const cards= [
            {
                color:3,
                link: 'https://hrdatalakeportal.azurewebsites.net/',
                organisation: 'MICROSOFT INDIA',
                project: 'Data dictionary for HR Data Entities ',
                desc:'To enhance the data discovery experience, I crafted a data dictionary to enlist all entities and attributes in the HR Datalake using Azure Purview, .NET and ReactTS.',
                timeperiod:'MAY-JULY 2022',
            },
            {
                color:3,
                link: 'https://github.com/Yavnikaa/teams-clone',
                organisation: 'MICROSOFT INDIA',
                project: 'Building teams clone',
                desc:"As a part of Microsoft Engage, I developed a simple video calling and group chat application using Node, ReactJS, Websockets and MongoDB.",
                timeperiod:'MAY-JUNE 2021',
            },
            {
                color:3,
                link: 'https://medium.com/@yavnikagarg3435/the-making-of-chakra-77f069a25806',
                organisation: 'IMG, IIT ROORKEE',
                project: 'Content Management System:Chakra',
                desc:'This application is used to manage the entire website of IIT Roorkee allowing users to create, edit and deploy web pages, with our home-grown component library.',
                timeperiod:'NOV-FEB 2022',
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