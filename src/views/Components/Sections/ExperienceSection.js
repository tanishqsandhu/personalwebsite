import React from 'react';
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Chip, Avatar } from '@material-ui/core';
import { FaReact, FaFlask, FaLaptopCode, FaCloud, FaHistory } from 'react-icons/fa';

const useStyles = makeStyles(styles);

export default function ExperienceSection(props) {
  const classes = useStyles();
  

  return (
    <div style={{ background:"linear-gradient(to bottom, rgb(238, 238, 238), #fff 100%)" }} className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h2><b>Experience</b></h2>
            <hr style={{ borderTop: "1px solid #bbb", borderRadius: "5px" }} />
          </div>
          <VerticalTimeline >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2020 - Present"
              iconStyle={{ background: '#003366', color: '#fff' }}
              icon={<FaReact />}
            >
              <div style={{ paddingLeft: "10px" }} className="row">
                <Chip color="default" style={{ fontSize: "15px", margin: "1%" }} label="React" size="small" avatar={<Avatar src={require("../../../assets/img/icons/react.png")} />} />
                <Chip color="default" style={{ fontSize: "15px", margin: "1%" }} label="MongoDB" size="small" avatar={<Avatar src={require("../../../assets/img/icons/mongo.png")} />} />
                <Chip color="default" style={{ fontSize: "15px", margin: "1%" }} label="Node.js" size="small" avatar={<Avatar src={require("../../../assets/img/icons/nodejslogo.png")} />} />
                <Chip color="default" style={{ fontSize: "15px", margin: "1%" }} label="Express.js" size="small" avatar={<Avatar src={require("../../../assets/img/icons/express.jpg")} />} />

              </div>
              <div style={{ paddingLeft: "5%" }} className="row">
                <h3 style={{ paddingTop: "20px", fontSize: "20px" }} className="vertical-timeline-element-title">Web Development Intern</h3> 
              </div>
              <div style={{ paddingLeft: "2%" }}>
              <h2 style={{ fontSize: "18px" }} className="vertical-timeline-element-subtitle"><b>The 808 Wave</b></h2>
              </div>
              <div style={{paddingTop:"8%"}}>
              <button  class="btn btn-outline-primary" data-toggle="modal" data-target="#modal1">
                  More Details  <i class="fas fa-info-circle"></i>
              </button>
              <img style={{ width: "30%", height: "100%", float: "right", bottom: "0", right: "0" }} alt="" src={require("../../../assets/img/icons/808.webp")}></img>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="January 2020 - Present"
              iconStyle={{ background: '#003366', color: '#fff' }}
              icon={<FaFlask />}

            >
              
              <div style={{ paddingLeft: "10px" }} className="row">
              <Chip color="#87CEEB" style={{ fontSize: "15px", margin: "1%" }} label="Genetic Programming" size="small" avatar={<Avatar src={require("../../../assets/img/icons/dna.jpg")} />} />
                <Chip color="#87CEEB" style={{ fontSize: "15px", margin: "1%" }} label="Machine Learning" size="small" avatar={<Avatar src={require("../../../assets/img/icons/ml.jpg")} />} />

              </div>
              <div style={{ paddingLeft: "5%" }} className="row">
                <h3 style={{ paddingTop: "20px", fontSize: "20px" }} className="vertical-timeline-element-title">Student Researcher with Automated Algorithm Design</h3> 
              </div>
              <div style={{ paddingLeft: "2%" }}>
              <h2 style={{ fontSize: "18px" }} className="vertical-timeline-element-subtitle"><b>Georgia Tech VIP Research</b></h2>
              </div>
              <div style={{paddingTop:"8%"}}>
              <button  class="btn btn-outline-primary" data-toggle="modal" data-target="#modal2">
                  More Details  <i class="fas fa-info-circle"></i>
              </button>
              <img style={{ width: "60%", height: "100%", float: "right", bottom: "0", right: "0" }} alt="" src={require("../../../assets/img/icons/VIP.png")}></img>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="January 2020 - May 2020"
              iconStyle={{ background: '#003366', color: '#fff' }}
              icon={<FaLaptopCode />}

            >
              <div style={{ paddingLeft: "10px" }} className="row">
              <Chip color="#87CEEB" style={{ fontSize: "15px", margin: "1%" }} label="Node.js" size="small" avatar={<Avatar src={require("../../../assets/img/icons/nodejslogo.png")} />} />
                <Chip color="#87CEEB" style={{ fontSize: "15px", margin: "1%" }} label="Postman" size="small" avatar={<Avatar src={require("../../../assets/img/icons/postman.png")} />} />
                <Chip color="#87CEEB" style={{ fontSize: "15px", margin: "1%" }} label="Express.js" size="small" avatar={<Avatar src={require("../../../assets/img/icons/express.jpg")} />} />
                <Chip color="#87CEEB" style={{ fontSize: "15px", margin: "1%" }} label="Rest APIs" size="small" avatar={<Avatar src={require("../../../assets/img/icons/api.png")} />} />
              </div>
              <div style={{ paddingLeft: "5%" }} className="row">
                <h3 style={{ paddingTop: "20px", fontSize: "20px" }} className="vertical-timeline-element-title">Technical Analyst Intern, Technical Services</h3> 
              </div>
              <div style={{ paddingLeft: "2%" }}>
              <h2 style={{ fontSize: "20px" }} className="vertical-timeline-element-subtitle"><b>Manhattan Associates</b></h2>
              </div>
              <div style={{paddingTop:"10%", marginBottom:"0%"}}>
              <button style={{float:"bottom"}} class="btn btn-outline-primary" data-toggle="modal" data-target="#modal3">
                  More Details  <i class="fas fa-info-circle"></i>
              </button>
              <img style={{ width: "15%", height: "20%", float: "right", bottom: "0", right: "0" }} alt="" src={require("../../../assets/img/icons/Manhattan.png")}></img>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2019 - August 2019"
              iconStyle={{ background: '#003366', color: '#fff' }}
              icon={<FaCloud />}

            >
              <div style={{ paddingLeft: "10px" }} className="row">
              <Chip color="#87CEEB" style={{ fontSize: "15px", margin: "1%" }} label="Python" size="small" avatar={<Avatar src={require("../../../assets/img/icons/python.png")} />} />
                <Chip color="#87CEEB" style={{ fontSize: "15px", margin: "1%" }} label="IBM MQ" size="small" avatar={<Avatar src={require("../../../assets/img/icons/ibmmq.png")} />} />
                <Chip color="#87CEEB" style={{ fontSize: "15px", margin: "1%" }} label="Linux" size="small" avatar={<Avatar src={require("../../../assets/img/icons/linux.jpg")} />} />
              </div>
              <div style={{ paddingLeft: "5%" }} className="row">
                <h3 style={{ paddingTop: "20px", fontSize: "20px" }} className="vertical-timeline-element-title">Technical Analyst Intern, Cloud Services</h3> 
              </div>
              <div style={{ paddingLeft: "2%" }}>
              <h2 style={{ fontSize: "20px" }} className="vertical-timeline-element-subtitle"><b>Manhattan Associates</b></h2>
              </div>
              <div style={{paddingTop:"10%", marginBottom:"0%"}}>
              <button style={{float:"bottom"}} class="btn btn-outline-primary" data-toggle="modal" data-target="#modal4">
                  More Details  <i class="fas fa-info-circle"></i>
              </button>
              <img style={{ width: "15%", height: "20%", float: "right", bottom: "0", right: "0" }} alt="" src={require("../../../assets/img/icons/Manhattan.png")}></img>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Before 2019"
              iconStyle={{ background: '#003366', color: '#fff' }}
              icon={<FaHistory />}

            >
    
              <div style={{ paddingLeft: "5%" }} className="row">
                <h3 style={{ paddingTop: "20px", fontSize: "20px" }} className="vertical-timeline-element-title">Previous Experiences:</h3> 
              </div>
              <div style={{ paddingLeft: "2%" }}>
              <h2 style={{ fontSize: "20px" }} className="vertical-timeline-element-subtitle"><b>Project Management & Technology Intern at Georgia Tech, 2x Cisco Intern</b></h2>
              </div>
              <div style={{paddingTop:"10%", marginBottom:"0%"}}>
              <img style={{ width: "15%", height: "20%", float: "right", bottom: "0", right: "0" }} alt="" src={require("../../../assets/img/icons/cisco.webp")}></img>
              </div>
            </VerticalTimelineElement>

          </VerticalTimeline>

        </div>
        <div className="modal" data-backdrop="false" style={{zIndex:"0", top:"100px", backgroundColor:"rgba(0, 0, 0, 0.5)"}} id="modal1" role="dialog">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title" style={{ fontSize: "20px", paddingLeft:"5%" }} id="exampleModalLabel"><b>Web Development Intern at The 808 Wave</b></h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                  <h4><ul>The 808 Wave is a Georgia Tech-based start up working to provide a music networking platform for underground, undiscovered, up and coming music creatives to connect and collaborate.
                  </ul></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal" size="lg" data-backdrop="false" style={{zIndex:"0", top:"100px", backgroundColor:"rgba(0, 0, 0, 0.5)"}} id="modal2" role="dialog">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title" style={{ fontSize: "20px", paddingLeft:"5%" }} id="exampleModalLabel"><b>Student Researcher with Automated Algorithm Design (A Georgia-Tech Vertically Integrated Project</b></h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                  <h4>
                  <ul> - Working on a team to develop an evolutionary Cartesian Genetic Programming framework to automatically optimize neural networks under the guidance of Dr. Greg Rohling and Dr. Jason Zutty</ul>
                  <ul> - Partners/Sponsors: Google, L3Harris Technologies, Georgia Tech Research Institute (GTRI)</ul>
                  </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal" size="lg" data-backdrop="false" style={{zIndex:"0", top:"100px", backgroundColor:"rgba(0, 0, 0, 0.5)"}} id="modal3" role="dialog">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title" style={{ fontSize: "20px", paddingLeft:"5%" }} id="exampleModalLabel"><b>Professional Services Technical Analyst Co-op, Technical Services</b></h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                  <h4>
                  <ul>• Utilized Node.js for aiding in development efforts on an internal tool for Technical Services Dept to manage code extensions
                  </ul>
                  <ul>• Developed REST API’s to integrate MA Store and MySQL Database to keep track of code drops and their respective statuses
                  </ul><ul>• Increased Application performance by integrating cache-filtering to replace traditional database-calls
                  </ul><ul>• Tested API’s using Postman
                  </ul></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal" size="lg" data-backdrop="false" style={{zIndex:"0", top:"100px", backgroundColor:"rgba(0, 0, 0, 0.5)"}} id="modal4" role="dialog">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title" style={{ fontSize: "20px", paddingLeft:"5%" }} id="exampleModalLabel"><b>Professional Services Technical Analyst Co-op, Technical Services</b></h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                  <h4>
                  <ul>• Fulfilled Solution Delivery Notice (SDN) Install requests from Clients (Applying Java Fixpacks, DB Installs, etc.)
                  </ul><ul> • Stretch Project: Worked with team to Automate database logfile exports using Python
                  </ul><ul>  • Corrected Erroneous Customer Inbound Order XML files
                  </ul><ul> • Database deployment/redeployment/refreshes
                  </ul><ul>  • Monitored:
                  </ul><ul>  - Application KPI's (CPU/Storage/Memory/Heap Usage)
                  </ul><ul> - Queue Alerts for Clients in IBM MQ
                  </ul><ul> - DB server resource usage (make space on servers as needed, killing long-running SQL's, etc.)
                  </ul></h4>
                  </div>
                </div>
              </div>
            </div>
        <div>

        </div>

      </div>
      
      
    </div>
  );
}
