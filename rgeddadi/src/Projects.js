import React,{ Component } from 'react';
import PROJECTS from './Data/project';

class Project extends Component{
      render(){
        
          const { title, discription, image}=this.props.Project;
          return(
            <div style={{display: 'inline-block', width: 300, height: 130}}>
                    <h3>  {title} </h3>
                    <img src={image} style={{width: 250, height: 130, margin: 5}}/>
          <p style={{fontFamily: 'Times New Roman', fontStyle: 'italic'}}> {discription} </p>
            
             </div>
          )
      }
}

class Projects extends Component{
      render(){
            return(
                  <div>
                    <h2>My Projects</h2><div>
                      {
                      PROJECTS.map(x => {
                      return(
                        <Project key={x.id} Project={x}> </Project>
                        );
                      })
                  }
                    </div>
                  </div>

            )
      }

}

export default Projects;