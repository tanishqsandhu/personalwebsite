import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();


  return (
    <div className={classes.sections} style={{backgroundColor:"white"}}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2 style={{fontFamily:"Arial", font:"darkgrey"}}><b>Brief Introduction</b></h2>
          <hr  style={{borderTop:"1px solid #bbb", borderRadius:"5px"}}/>
        </div>
        <div className="row" style={{display:"flex", font:"darkgrey", fontFamily:"Arial"}}>
          <div class="col">
          <h5>Hi, My name is Tanishq Sandhu.<br></br><br></br>
            
            I am currently pursuing my <b>Bachelor's Degree in Computer Science at the Georgia Institute of Technology</b> with a specialization in Intelligence and Information-Internetworks. I especially enjoy exploring the applications of Computer Science as they are married with cross-functional areas.
            <br></br><br></br> 
            My current affiliations and positions include: <b>(1)</b> serving as the VP for Big Data Big Impact at GT, <b>(2)</b> Web Development at The 808 Wave, <b>(3)</b> Undergraduate Research in the VIP Program on the Automated Algorithm Design with a focus on Stocks, and <b>(4 & 5)</b> Incoming Research Assistants for Dr. Devi Parekh to work under her in her latest Research Area: Creativity + AI  and also Dr. Dhruv Batra to work on his EvalAI Platform. 
            <br></br> <br></br>
            My hobbies include photography, enjoying the outdoors, and traveling (be sure to check out my VSCO and Instagram pages at the bottom of the website)!
          </h5>
            </div> 
            <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="tanishqsandhu"><a  target="_blank" class="LI-simple-link" href='https://www.linkedin.com/in/tanishqsandhu?trk=profile-badge'>Tanishq Sandhu</a></div>
        </div>
      </div>
    </div>
  );
}
