import React,{ Component } from 'react';
import PROJECTS from './Data/project';

class Projects extends Component{
      render(){
            return(
                  <div>
                    <h2>My Project</h2>
                    <div>
                      {
                      PROJECTS.map(x => {
                      return(
                        <div key={x.id}> {x.title} </div>
                        );
                      })
                  }
                    </div>
                  </div>

            )
      }

}

export default Projects;