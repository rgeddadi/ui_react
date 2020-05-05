import React,{ Component } from 'react';
import SOCIALS from './Data/socials.js';

class Social extends Component{
  render(){
  const {snap, link} = this.props.Social;
  return(
    <div style={{display:'inline-block'}}>
      <a href={link}> <img src={snap} style={{width:60 , height: 60, margin: 10}}/> </a>

    </div>

  )
}
  
}

class Socials extends Component{
  render(){
    return(
      <div style={ {display: 'block',
        margin: 'auto'
        }}>
        {
             SOCIALS.map( x => {
                  return(
                    <Social key={x.id} Social={x}> </Social>
                  );
               })   
              }
      </div>
    )
  }
}

export default Socials;