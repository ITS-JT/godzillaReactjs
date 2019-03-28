import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Images(props) {
  return (
    <div>
      <label>Round this beast up!</label>
      <input
        type={"range"}
        step={1}
        min={0}
        max={100}
        value={props.imgRadius}
        onChange={props.handleImgRadius}
      />
      <div>
        <img
          style={{ borderRadius: props.imgRadius, width: 400 }}
          src="https://wikizilla.org/wiki/images/thumb/c/c5/Godzilla_Earth_infobox.png/300px-Godzilla_Earth_infobox.png"
          alt="godzilla"
        />
      </div>
    </div>
  );
}

class Thing extends React.Component {
  state = {
    name: "_______",
    imgRadius: 0
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleImgRadius = e => {
    console.log(e.target.value);
    this.setState({
      imgRadius: Number(e.target.value)
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name ? this.state.name : "__"} </h1>
        <label>Guess what the beasts name is: </label>
        <input placeholder={"type name here"} onChange={this.handleChange} />
        <Images
          handleImgRadius={this.handleImgRadius}
          imgRadius={this.state.imgRadius}
        />
      </div>
    );
  }
}

ReactDOM.render(<Thing />, document.getElementById("root"));
