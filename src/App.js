import React, { Component } from "react";
import Shape from "./shape.js";

class Selector extends Component {
  constructor(){
    super();
    this.state = {
      selectedShape: "Nothing",
    }
  }

  selectShape = (shapeName) =>{
    this.setState({
      selectedShape: shapeName,
    })
  }
  render() {
    return (
      <main className="container">
        <section>
          <div className="selectedBar">
            <p>
              You Selected: <span>{this.state.selectedShape}</span>
            </p>
          </div>
        </section>
        <section className="shapeList">
          <Shape shape="circle" selectShape={this.selectShape}/>
          <Shape shape="triangle" selectShape={this.selectShape}/>
          <Shape shape="square" selectShape={this.selectShape}/>
          <Shape shape="star" selectShape={this.selectShape}/>
        </section>
      </main>
    );
  }
}

export default Selector;
