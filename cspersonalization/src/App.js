import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      color1: "#D9DCD6",
      color2: "#3A7CA5",
      color3: "#16425B"
    }
  }


  handleColorChoice = (e) => {
    let colorObject = e.currentTarget.value
    colorObject = colorObject.split(' ')
    this.setState({
      color1: colorObject[1],
      color2: colorObject[2],
      color3: colorObject[3]
    })
  }

  render() {
    // let test = {color1: "#D9DCD6", color2: "#3A7CA5", color3: "#16425B"}
    const colorPallet1 = " #D9DCD6 #3A7CA5 #16425B"
    const colorPallet2 = " #5F5AA2 #355691 #413F54"
    const colorPallet3 = " #98DFAF #DEEFB7 #5FB49C"
    const colorPallet4 = " #F5EDF0 #886F68 #424C55"
    const colorPallet5 = " #E1E6E1 #E63B2E #9B1D20"
    return (
      <div>
        <div className="playground_container">
          <div style={{display: "flex", flexDirection: "row"}}>
            <div className="playground_optioncontainer">
              <input type="radio" name="color" value={colorPallet1} onChange={this.handleColorChoice} defaultChecked />
              <div className="playground_coloroption" style={{backgroundColor: "#D9DCD6"}}/>
              <div className="playground_coloroption" style={{backgroundColor: "#3A7CA5"}} />
              <div className="playground_coloroption" style={{backgroundColor: "#16425B"}} />
            </div>
            <div className="playground_optioncontainer">
              <input type="radio" name="color" value={colorPallet2} onChange={this.handleColorChoice} />
              <div className="playground_coloroption" style={{backgroundColor: "#5F5AA2"}} />
              <div className="playground_coloroption" style={{backgroundColor: "#355691"}} />
              <div className="playground_coloroption" style={{backgroundColor: "#413F54"}} />
            </div>
            <div className="playground_optioncontainer">
              <input type="radio" name="color" value={colorPallet3} onChange={this.handleColorChoice} />
              <div className="playground_coloroption" style={{backgroundColor: "#98DFAF"}} />
              <div className="playground_coloroption" style={{backgroundColor: "#DEEFB7"}} />
              <div className="playground_coloroption" style={{backgroundColor: "#5FB49C"}} />
            </div>
            <div className="playground_optioncontainer">
              <input type="radio" name="color" value={colorPallet4} onChange={this.handleColorChoice} />
              <div className="playground_coloroption" style={{backgroundColor: "#F5EDF0"}} />
              <div className="playground_coloroption" style={{backgroundColor: "#886F68"}} />
              <div className="playground_coloroption" style={{backgroundColor: "#424C55"}} />
            </div>
            <div className="playground_optioncontainer">
              <input type="radio" name="color" value={colorPallet5} onChange={this.handleColorChoice} />
              <div className="playground_coloroption" style={{backgroundColor: "#E1E6E1"}} />
              <div className="playground_coloroption" style={{backgroundColor: "#E63B2E"}} />
              <div className="playground_coloroption" style={{backgroundColor: "#9B1D20"}} />
            </div>
          </div>
          <h1>Theme Playground</h1>
        </div>
        <div className="main_page">
          <div className="main_navbar" style={{backgroundColor: this.state.color3}} >
            <p>Navbar</p>
          </div>
          <div className="main_body">
            <div className="main_leftside" style={{backgroundColor: this.state.color2}} >
              <p>Left Side</p>
            </div>
            <div className="main_content" style={{backgroundColor: this.state.color1}} >
              <p>Main Content</p>
            </div>
            <div className="main_rightside" style={{backgroundColor: this.state.color2}} >
              <p>Right Side</p>
            </div>
          </div>
          <div className="main_footer" style={{backgroundColor: this.state.color3}} >
            <p>Footer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
