import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
        items:[],
        isLoaded:false,

    }
  }

  componentDidMount(){

    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  }

  render (){

      var {isLoaded,items}= this.state;

      if(!isLoaded){
        return <div>Loading...</div>;
      }else{
        return(
          <div className="App">
       
              <ul>
                {items.map(item => (
                    <li key= {item.id}>
                      {item.name} | Email: :{item.email}
                    </li>
                ))};
              </ul>

          </div>
        );
      }

      
   
  }
   
  
}

export default App;
