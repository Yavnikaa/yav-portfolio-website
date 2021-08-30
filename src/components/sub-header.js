import React, {Component} from 'react'
import '../index.css';
import line from '../assets/line.svg';
import waves from '../assets/waves.svg';

const Title = (props) => {
    const value = props.headerData
      return (
          <div className='main-container'> 
          <div className='subheader-container'>
              <div className='line'> <img src={line}/> </div>
              <div className='heading'>{value.heading}</div>
              <div className='caption'> {value.caption}</div>
          </div>
          <div className='waves'> <img src={waves}/> </div>
          </div>
      )
}

class SubHeader extends Component{
    render(){
        const {headerData}= this.props;
        return (
            <div>
                <Title headerData={headerData}/>
            </div>
        )
    }
}

export default SubHeader;