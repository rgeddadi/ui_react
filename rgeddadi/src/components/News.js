import React, {Component} from 'react';


class News extends Component {
        state ={ NEWS: [], newsindex: 0,title: null};
        
      

      componentDidMount (){

        fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-09&sortBy=publishedAt&apiKey=91cad257527345c9a53b22d787cc90df')
                          .then(response => response.json())
                          .then(json =>{this.setState({NEWS: json.articles})})
                         this.newsTimeOut();
                }
                        
          newsTimeOut=()=>{
           { {setInterval(()=>{
              const index= (this.state.newsindex+1)% this.state.NEWS.length;
              this.setState({newsindex: index});
              console.log('ifloop', this.state.newsindex);
              let RAJ = this.state.NEWS[this.state.newsindex];
              console.log('raj',RAJ);
              return(RAJ);
                 }, 2000)
                
                 } 
              } 
           
            }
              
            

            
                      render(){
                
                 //console.log('final',RAJ);
                 // const {title}=this.state.NEWS[this.state.newsIndex];
                        
                  return(
                    <div>
                  
                                 </div>
                  )
            }
}
          
export default News;

                            