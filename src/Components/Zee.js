import React, { Component } from "react";

export default class Zee extends Component {
  render() {
    return (
      <div className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="section-content" id={this.props.id}>
          <h1>{"zee"}</h1>
          <p>{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}
