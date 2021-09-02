import React, {Component, useEffect, useState } from 'react'
import '../index.css';

const CardContent = (props) => {
  const[pageUrlBackgroundColor, setPageUrlBackgroundColor] = useState('#BDDBE3');
  const getPageUrl = window.location.pathname;

  useEffect(() => {
    if(getPageUrl === './uxdesign'){
      console.log("running")
        setPageUrlBackgroundColor('#FCBBA9');
    }else{
        setPageUrlBackgroundColor('#BDDBE3');
    }
  },[getPageUrl]);

    const data = props.cardData.map((row, index) => {
        return (
          <div key={index}>
            <div className='card-bg' style={{backgroundColor:pageUrlBackgroundColor}}> 
            <div className='org'>{row.organisation}</div>
            <div className='project-title'>{row.project}</div>
            <div> {row.logo} </div>
            <div className='card-desc'> {row.desc} </div>
            <div className='duration'> {row.timeperiod} </div>
            <a href={row.link}> <div> {row.arrow} </div> </a> 
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