import React,{ Component } from 'react';
import PROJECTS from '../Data/project';
import Styles from '../index.css';

class Project extends Component{
      render(){
        
          const { title, discription, image}=this.props.Project;
          return(
                
            <div className={Styles.projectStyle} style={{display: 'inline-block', width: 300, height: 130}}>
                  <h4>Title: {title}</h4>
            <img src={image} style={{width: 250, height: 130, marginRight: 15}}/>
          <p> {discription} </p>
                   
             </div>
          )
      }
}

class Projects extends Component{
      render(){
            return(
                  <div>
                   <div>
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