import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      names: 'nagesh kumar',
      studentDetails: [
        {
          id: 1,
          name: 'Nagesh T',
          age: 39,
          skills: [
            {
             tool: 'HTML'
            },
            {
             tool: 'CSS'
            },
            {
             tool: 'JavaScript'
            },
            {
             tool: 'Bootstrap'
            }
          ]
        },{
          id: 2,
          name: 'Arun Mohanty',
          age: 20,
          skills: [
            {
            tool: 'CorelDraw'
            },
            {
            tool: 'PhotoShop'
            },
            {
            tool: 'AdobeXD'
            }
          ]
        },{
          id: 3,
          name: 'Vasanta Senapati',
          age: 66,
          skills: [
            {
            tool: 'AJAX'
            },
            {
            tool: 'JSON'
            },
            {
            tool: 'ReactJS'
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <div>        
        <h1>
          Nested Object Map Function
        </h1>        
          <p>{ this.state.names }</p>
          <p>{ this.state.studentDetails[2].age }</p>
          <div>
          {
            this.state.studentDetails.map( student => { return ( <div><p> { student.name } </p>             
            { student.skills.map ( skill => { return ( <p>{ skill.tool }</p>) })}            
            </div> ) } )
          }
          </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));