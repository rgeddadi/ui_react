import React, {Component} from 'react';


const TITLES =[
  'a software engineer',
  'a sports person',
  'a adventure seeker',
  'a movie lover'
]



class Title extends Component {

    state = {titleIndex: 0 , animation: true};
       componentDidMount(){
         setTimeout(()=>{this.setState({animation:false})}, 2000)
        this.animateTitles();
        }

        componentWillUnmount(){
          clearInterval(this.timeInterval);
        }
      
  
  animateTitles=() =>{
     this.timeInterval = setInterval(()=>{
            const titleIndex = (this.state.titleIndex+1) % TITLES.length;
            this.setState({titleIndex , animation: true});
            setTimeout(()=>{this.setState({animation:false})}, 2000)
      },4000);
  
  }


      
      render(){
        const {titleIndex, animation} = this.state;
        const title=TITLES[this.state.titleIndex];
        return(
        <span className={animation ? 'fade-In':'fade-Out'}> I am {title}</span>
        )
      }

}

export default Title;