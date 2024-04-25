import React, { Component } from "react";

class Form extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
