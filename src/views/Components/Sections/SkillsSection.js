import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import progressBar from "../../../assets/css/progress-bar.css";
import carouselHover from "../../../assets/css/carouselHover.css";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
const useStyles = makeStyles(styles);

export default function SkillsSection() {
  const classes = useStyles();
  function changeTechText(text){
    document.getElementById("techText").innerHTML = text;
  };

  return (
    <div className={classes.section}>
      
      <div  style={progressBar} className={classes.container}>
        <div id="container nav-tabs">
          <h2><b>Skills Overview</b></h2>
          <hr  style={{borderTop:"1px solid #bbb", borderRadius:"5px"}}/>
          <h3 style={{paddingTop:"50px"}}><b>Languages/Frameworks:</b></h3>
          
              <div class="row" style={{width:"100%", paddingTop:"10px"}}>
                  <div class="col-md-6">
                      <div class="progress lightblue" style={{}}>
                          <h3 class="progress-title" >Java</h3>
                          <div class="progress-bar" style={{width:"90%", background:"#add8e6"}}>
                              <div class="progress-value">Professional</div>
                          </div>
                      </div>
          
                      <div class="progress darkblue">
                          <h3 class="progress-title">Python</h3>
                          <div class="progress-bar" style={{width:"75%", background:"#003366"}}>
                              <div class="progress-value">Advanced</div>
                          </div>
                      </div>

                      <div class="progress grey1">
                          <h3 class="progress-title">Node.js</h3>
                          <div class="progress-bar" style={{width:"75%", background:"#708090"}}>
                              <div class="progress-value">Advanced</div>
                          </div>
                      </div>

                      <div class="progress grey">
                          <h3 class="progress-title">React</h3>
                          <div class="progress-bar" style={{width:"50%", background:"grey"}}>
                              <div class="progress-value">Intermediate</div>
                          </div>
                      </div>

                      <div class="progress airforceblue">
                          <h3 class="progress-title">Javascript/HTML/CSS</h3>
                          <div class="progress-bar" style={{width:"75%", background:"#5d8aa8"}}>
                              <div class="progress-value">Advanced</div>
                          </div>
                      </div>

                      
                  </div>
                  <div class="col-md-6">
                  <div class="progress grey">
                          <h3 class="progress-title">Linux</h3>
                          <div class="progress-bar" style={{width:"50%", background:"grey"}}>
                              <div class="progress-value">Intermediate</div>
                          </div>
                      </div>

                      <div class="progress grey1">
                          <h3 class="progress-title">SQL</h3>
                          <div class="progress-bar" style={{width:"50%", background:"#708090"}}>
                              <div class="progress-value">Intermediate</div>
                          </div>
                      </div>
                      <div class="progress airforceblue">
                          <h3 class="progress-title">Git</h3>
                          <div class="progress-bar" style={{width:"50%", background:"#5d8aa8"}}>
                              <div class="progress-value">Intermediate</div>
                          </div>
                      </div>

                      <div class="progress darkblue">
                          <h3 class="progress-title">ML/AI</h3>
                          <div class="progress-bar" style={{width:"30%", background:"#003366"}}>
                              <div class="progress-value">Novice</div>
                          </div>
                      </div>
                      <div class="progress lightblue">
                          <h3 class="progress-title">Cloud</h3>
                          <div class="progress-bar" style={{width:"30%", background:"#add8e6"}}>
                              <div class="progress-value">Novice</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div style={carouselHover} class="row">
              <h3 style={{paddingTop:"50px"}}><b>Technologies/Software:</b></h3>
              <div class="row" style={{paddingLeft:"5%"}}>
              <div ><img class="tile" onMouseOver={() => changeTechText("Bootstrap (A Popular User Interface Framework)")} onMouseLeave={() => changeTechText("")} alt="" src={require("../../../assets/img/icons/bootstrap.png")}></img></div>
              <div><img class="tile" onMouseOver={() => changeTechText("Bitbucket (Enterprise-level Repository Hosting Service)")} onMouseLeave={() => changeTechText("")} alt="" src={require("../../../assets/img/icons/bitbucket.png")}></img></div>
              <div><img class="tile" onMouseOver={() => changeTechText("Docker (Application Deployment Tool Using Containers)")} onMouseLeave={() => changeTechText("")} alt="" src={require("../../../assets/img/icons/docker.png")}></img></div>
              <div><img class="tile" onMouseOver={() => changeTechText("Github (Popular Git Repository Hosting Service)")} onMouseLeave={() => changeTechText("")} alt="" src={require("../../../assets/img/icons/github.png")}></img></div>
              <div><img class="tile" onMouseOver={() => changeTechText("Memcached (Memory-Chaching System for Decreasing Latency in DB-Driven Applications)")} onMouseLeave={() => changeTechText("")} alt="" src={require("../../../assets/img/icons/memcached.png")}></img></div>
              <div><img class="tile" onMouseOver={() => changeTechText("Material UI (A Popular React User Interface Framework)")} onMouseLeave={() => changeTechText("")} alt="" src={require("../../../assets/img/icons/materialui.svg")}></img></div>
  {/*<div><img class="tile" onMouseOver={() => changeTechText("Kubernetes (An Open-Source Container Orchestration System For Deployment Automation)")} onMouseLeave={() => changeTechText("")} alt="" src={require("../../../assets/img/icons/kubernetes.png")}></img></div>*/}
              <div><img class="tile" onMouseOver={() => changeTechText("MongoDB (A Popular NoSQL Databse)")} onMouseLeave={() => changeTechText("")} alt="" src={require("../../../assets/img/icons/mongo.png")}></img></div>
              <div><img class="tile" onMouseOver={() => changeTechText("Postman (A Widely-Used Tool for API Testing)")} onMouseLeave={() => changeTechText("")} alt="" src={require("../../../assets/img/icons/postman.png")}></img></div>
              <div><img class="tile" onMouseOver={() => changeTechText("Amazon Web Services (Amazon's Cloud Service)")} onMouseLeave={() => changeTechText("")} alt="" src={require("../../../assets/img/icons/aws.png")}></img></div>
              </div></div>  
              <div class="row" style={{paddingTop:"50px", paddingLeft:"20%"}}>
                <h3 style={{}} id="techText">
                </h3>
                </div>       
        </div>
      </div>
    </div>
  );
}
