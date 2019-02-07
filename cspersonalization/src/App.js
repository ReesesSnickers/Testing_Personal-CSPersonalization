import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HuePicker}  from 'react-color';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      color1: "#D9DCD6",
      color2: "#3A7CA5",
      color3: "#16425B",
      customColor1: "#FFF",
      customColor2: "#FFF",
      customColor3: "#FFF",
      customColorString: "",
      hueColor: "",
      optionChoice: "",
      displayPicker: "none"
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

  handleHueChange = (color) => {
    console.log(color.hex)
    this.setState({
      hueColor: color.hex,
    })
    this.setState({
      [this.state.optionChoice]: this.state.hueColor
    })
  }

  handleCustomToggle = (toggledValue) => {
    this.setState({
      optionChoice: toggledValue,
      displayPicker: ""
    })
  }

  handleCustomToggleOff = () => {
    this.setState({
      optionChoice: "",
      displayPicker: "none",
      customColorString: " " + this.state.customColor1 + " " + this.state.customColor2 + " " + this.state.customColor3
    })
  }

  render() {
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
            <div className="playground_optioncontainer">
              <input type="radio" name="color" value={this.state.customColorString} onChange={this.handleColorChoice} />
              <div className="playground_coloroption" style={{backgroundColor: this.state.customColor1}} onClick={() => this.handleCustomToggle("customColor1")} ><p className="custom">+</p></div>
              <div className="playground_coloroption" style={{backgroundColor: this.state.customColor2}} onClick={() => this.handleCustomToggle("customColor2")} ><p className="custom">+</p></div>
              <div className="playground_coloroption" style={{backgroundColor: this.state.customColor3}} onClick={() => this.handleCustomToggle("customColor3")} ><p className="custom">+</p></div>
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
        <div className="color_picker" style={{display: this.state.displayPicker}}>
          <h2>Choose a color</h2>
          <HuePicker color={ this.state.hueColor } onChange={ this.handleHueChange }/>
          <button onClick={() => this.handleCustomToggleOff()}>Okay</button>
        </div>
      </div>
    );
  }
}

export default App;
