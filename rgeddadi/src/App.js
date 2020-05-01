import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component {
  state={displayBio: false}
        // constructor(){
        //   super();
        //   this.state={displayBio: false};
        //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
        // }
  toggleDisplayBio = () => {
     this.setState({displayBio: !this.state.displayBio});
  }

 
  render(){
return( 
    <div>
      <h1> Hello</h1>
      <p> My self Raj Geddadi, I am in process of Learning React and looking for a good opprtunity to work on this technology</p>
      <p>To know more about Raj Geddadi, please click below</p>
      
      {this.state.displayBio ?
      (
        <div>
          <h2>My Bio</h2>
        <p> I'm a Master degree holder in Infroamtion Technology, I migrated from India to Us to persue my dream of becoming a sowtware engineer</p>
        <p> I love playing outdoor game like cricket, badminton and basketball</p>
        <p> I would love spend my time by trecking or long road trips along my camping equipment</p>
        <button onClick={this.toggleDisplayBio}> Close Bio </button>
        </div>
      ) : <div>
        <button onClick={this.toggleDisplayBio}> Read Bio </button>
      </div>
      }
      <hr />
      <Projects />
      </div>
)
}
}
export default App;