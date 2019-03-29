import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Image(props) {
  return (
    <div>
      <label>Round the corners on {props.name}</label>
      <br />
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

function NameTheBeast(props) {
  return (
    <div>
      <h1>{props.name ? props.name : "________________"} </h1>
      <label>Guess what the beasts name is: </label>
      <input placeholder={"type name here"} onChange={props.handleNameChange} />
    </div>
  );
}

class Thing extends React.Component {
  state = {
    name: "________________",
    imgRadius: 0
  };

  handleNameChange = e => {
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
        <NameTheBeast
          name={this.state.name}
          handleNameChange={this.handleNameChange}
        />
        <Image
          handleImgRadius={this.handleImgRadius}
          imgRadius={this.state.imgRadius}
          name={this.state.name}
        />
      </div>
    );
  }
}

ReactDOM.render(<Thing />, document.getElementById("root"));
