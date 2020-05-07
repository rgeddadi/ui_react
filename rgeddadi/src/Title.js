import React, {Component} from 'react';


const TITLES =[
  'a software engineer',
  'a sports person',
  'a adventure seeker',
  'a movie lover'
]



class Title extends Component {

    state = {titleIndex: 0};
       componentDidMount(){
        this.animateTitles();
        }

        componentWillUnmount(){
          clearInterval(this.timeInterval);
        }
      
  
  animateTitles=() =>{
     this.timeInterval = setInterval(()=>{
            const titleIndex = (this.state.titleIndex+1) % TITLES.length;
            this.setState({titleIndex});
  
      },4000);
  
  }


      
      render(){
        const title=TITLES[this.state.titleIndex];
        return(
        <span> I am {title}</span>
        )
      }

}

export default Title;