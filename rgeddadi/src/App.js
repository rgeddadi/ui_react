import React, { Component } from 'react';
import Projects from './Projects';
import Social from './Social.js';
import Raj from './Assests/profile.jpeg';
import profileImg from './index.css';

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
      <p> My self Raj Geddadi, I am in process of Learning React and looking for a good opprtunity to work on this technology</p>
      <p>To know more about Raj Geddadi, please click below</p>
      
      <h2>My Bio</h2>
      {this.state.displayBio ?
      (
        <div>
          
        <p> I'm a Master degree holder in Infroamtion Technology, I migrated from India to Us to persue my dream of becoming a sowtware engineer</p>
        <p> I love playing outdoor game like cricket, badminton and basketball</p>
        <p> I would love spend my time by trecking or long road trips along my camping equipment</p>
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