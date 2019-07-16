// Usage:
//   create component file (e.g. BlockiesIdenticon.js) using uncommented code below
//   npm install blockies-identicon
//   in the file you want to use the component (e.g. BlockiesIdenticon.js):
//   import Blockies from "./path/to/BlockiesIdenticon.js";
//   <Blockies opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}}/>

import React from 'react';
import blockies from "blockies-identicon";

export default class BlockiesIdenticon extends React.Component {
  constructor(props) {
    super(props);
  }
  getOpts () {
    return {
      seed: this.props.opts.seed || "foo",
      color: this.props.opts.color || "#dfe",
      bgcolor: this.props.opts.bgcolor || "#a71",
      size: this.props.opts.size || 15,
      scale: this.props.opts.scale || 3,
      spotcolor: this.props.opts.spotcolor || "#000"
    };
  }
  componentDidMount() {
    this.draw();
  }
  draw() {
    blockies.render(this.getOpts(), this.canvas);
  }
  render() {
    return React.createElement("canvas", {ref: canvas => this.canvas = canvas});
  }
}