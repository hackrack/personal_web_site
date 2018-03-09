import React, { Component } from "react";
import image from "../images/ibrohimov.jpg";

let styles = {
  height: "200px",
  width: "200px"
}
class About extends React.Component {

    render() {
      return(
        <div>
          <h1>About Me</h1>
          <h4>39 Wallis Ave, Jersey City, NJ, 07306</h4>
          <h5>Email: umedjonibrohimov@ac.c4q.nyc</h5>
          <h5>Mobile: 1 (347)-366-6891</h5>
          <h4>
            <a href="https://www.linkedin.com/in/umedjon-ibrohimov/" target="_blank">
              LinkedIn
            </a>{" "}
            <a href="https://github.com/hackrack" target="_blank">GitHub</a>
          </h4>
          <br></br><br></br>
          <img src={image} alt="pic" style={styles} />
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. It was popularised in 
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including 
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      )
    }
}

export default About;
