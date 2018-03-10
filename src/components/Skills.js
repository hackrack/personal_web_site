import React, { Component } from "react";

import javascript from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react2.png";
import sql from "../images/sql2.png";
import postgres from "../images/postgres2.png";
import node from "../images/node2.png";
import express from "../images/express2.png";
import redux from "../images/redux2.png";
import github from "../images/github2.png";
import bootstrap from "../images/bootstrap2.png";
import jquery from "../images/jquery2.png";


let images1 = [ javascript, html, css ];
let images2 = [ react, sql, postgres, node, express, redux, github, bootstrap, jquery ];

let styles =
  {
    height: "128px",
    width: "128px",
    margin: "5px"
  }

  let styles1 =
    {
      height: "103px",
      width: "91px",
      margin: "5px"
    }


class Skills extends React.Component {

    render() {
      return(
        <div>
          <h1>Skills</h1>
            <div>
              {images1.map( (image) => {
                return <img
                    src={image}
                    alt="skills_images"
                    style={styles}
                    key={Math.floor(Math.random() * 1000)}
                  />
              })}<br/>
              {images2.map( (image) => {
                return <img
                    src={image}
                    alt="skills_images"
                    style={styles1}
                    key={Math.floor(Math.random() * 1000)}
                  />
              })}
            </div>
        </div>
      )
    }
}

export default Skills;
