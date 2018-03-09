import React, { Component } from "react";
import video from "../video/video2.mp4";
import '../App.css';

class Home extends React.Component {
    render() {
      return(
        <div>
          <h1>Umedjon Ibrohimov</h1>
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

        </div>
      )
    }
}

export default Home;
