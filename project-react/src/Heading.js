import React from "react";

function Heading(props) {
  return <h1 style={{ color: "blue" }}>{props.text}</h1>;
}

function Heading1() {
  return (
    <div>
      <Heading text="Ini adalah judul" />
    </div>
  );
}

export default Heading1;
