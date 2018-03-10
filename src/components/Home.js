import React, { Component } from "react";
import video from "../video/video2.mp4";
import ui from "../images/ui_logo.png";
import '../App.css';
let styles = {
  width: "128px",
  height: "128px"
}
class Home extends React.Component {
    render() {
      return(
        <div id="home" >
        <img src={ui} style={styles} />
        <svg viewBox="0 0 960 300">
    <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="80%">Umedjon Ibrohimov</text>
    </symbol>

    <g class = "g-ants">
        <use href="#s-text" class="text-copy"></use>
        <use href="#s-text" class="text-copy"></use>
        <use href="#s-text" class="text-copy"></use>
        <use href="#s-text" class="text-copy"></use>
        <use href="#s-text" class="text-copy"></use>
        <use href="#s-text" class="text-copy"></use>
        <use href="#s-text" class="text-copy"></use>
        <use href="#s-text" class="text-copy"></use>
    </g>
</svg>
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

        </div>
      )
    }
}

export default Home;
