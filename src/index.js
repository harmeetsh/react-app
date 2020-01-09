import React from "react";
import { render } from "react-dom";
import s from "./app.component.css";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello World! </h1>{" "}
      </div>
    );
  }
}

render(<Hello />, document.getElementById("app"));
