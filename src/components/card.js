import React, {Component, useEffect, useState } from 'react'
import '../index.css';
import arrow from '../assets/arrow.svg'
import launch from '../assets/launch.svg'

const CardContent = (props) => {
    const data = props.cardData.map((row, index) => {
        return (
          <div key={index}>
            <div className='card-bg' style={(row.color==2)? {backgroundColor:"#FCBBA9"}: (row.color==1)? {backgroundColor:"#F3CD82"} : {backgroundColor:"#BDDBE3"} } > 
            <div className='org'>{row.organisation}</div>
            <div className='project-title'>{row.project}</div>
            <a href={row.website}> <img src={launch}/> </a>
            <div className='card-desc'> {row.desc} </div>
            <div className='card-line'>
            <div className='duration'> {row.timeperiod} </div>
            <a href={row.link} target="_blank"> <img src={arrow}/> </a> 
            </div>
            </div>
          </div>
        )
      })
    
      return <div className='card-row'>{data}</div>
}

class Card extends Component{
    render(){
        const {cardData}= this.props;
        return (
            <div>
                <CardContent cardData={cardData}/>
            </div>
        )
    }
}

export default Card;