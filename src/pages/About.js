import React, { Component } from 'react';
import "./About.css";
import pfp from "../assets/pfp.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img className="profile_image" src={pfp} alt="Profile Pic"></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Saahil Singh</div>
            <div className="brief_description"> 
              I am a sophomore studying Computer Science at the University of Maryland - College Park (GPA - 3.87). I am striving towards a career in software development. When working on projects, I can leverage my skills in Artificial Intelligence and front end development which I gained through my education and further developed through passion projects. Through these skills I hope to develop software that can improve the lives of people. Ideally in my career, I am looking to find the cross section between computer science and music. 
              If you would like to contact me, I can be reached via email at: saahilsingh360@gmail.com
            </div>
          </div>
        </div>
      </div>
    )
  }
}