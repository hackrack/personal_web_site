import React, { Component } from "react";
import resume from "../images/resume-1.png";

let styles =
  {
    height: "700px",
    width: "600px"
  }

class Resume extends React.Component {
  render() {
    return(
      <div>
        <img src={resume} alt="resume" style={styles} />
      </div>
    )
  }
}
export default Resume;
