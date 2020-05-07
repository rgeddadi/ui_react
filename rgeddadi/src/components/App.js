import React, { Component } from 'react';
import Projects from './Projects';
import Social from './Social.js';
import Raj from '../Assets/profile.jpeg';
import profileImg from '../index.css';
import Title from './Title.js'


class App extends Component {
  state={displayBio: false};
        // constructor(){
        //   super();
        //   this.state={displayBio: false};
        //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
        // }
  toggleDisplayBio = () => {
     this.setState({displayBio: !this.state.displayBio});
  }

  state={displayProject: false};
  flipDisplayProject = () => {
    this.setState({displayProject: !this.state.displayProject});
  } 
  render(){
return( 
    <div>
      <img src={Raj} className='profileImg'></img>
      <h1> Hello</h1>
      <p> I'm Raj Geddadi</p> 
      <p> I am in process of Learning React and looking for a good opportunity to work on this technology</p>
      <p>To know more about Raj Geddadi, please click below</p>
      
      <h2>My Bio</h2>
      {this.state.displayBio ?
      (
        <div>
        { this.state.displayBio ? <Title /> :null }
        <p> I'm a master’s degree holder in Information Technology, I have previously six years of experience in software industry working in different position</p>
        <p> I love playing outdoor game like basketball, cricket and badminton </p>
        <p> I would love to spend most of my time by participating in trekking or road trips along with my family and friends</p>

        <button onClick={this.toggleDisplayBio}> Minimize Bio </button>
        </div>
      ) : <div>
        <button onClick={this.toggleDisplayBio}> Read Bio </button>
      </div>
      }
      <hr />
      <div>
      <h2>My Projects</h2>
      { this.state.displayProject ?
      (
        <div> 
      <Projects />
      <button onClick={this.flipDisplayProject}> Minimize Projects</button>
      </div>
      ) : <div>
      <button onClick={this.flipDisplayProject}> Read Projects</button>
      </div>
      }
      </div>
      
      <hr/>
       <h3> Contact Info</h3>
      <Social />
      </div>
)
}
}
export default App;