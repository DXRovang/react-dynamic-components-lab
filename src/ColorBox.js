import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ] 
  }

  render() {
    return (
      <div className="color-box" style={{opacity: 1}}>
         if(this.props.opacity >= 0.2){
            this.props.opacity -= 0.1
            <div className="color-box" style={{opacity: this.props.opacity}}>
          }elsif(this.props.opacity < 0.2){
              return null 
          }
      </div>
    )
  }

}

