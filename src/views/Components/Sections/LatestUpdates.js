import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Card, Button } from '@material-ui/core';

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import netflixStyles from "../../../assets/css/netflixStyleCarousel.css";

const useStyles = makeStyles(styles);

export default function LatestUpdates() {
  const classes = useStyles();


  return (
    <div className={classes.section} style={{backgroundColor:"rgb(238, 238, 238)"}}>
      <div className={classes.container}>
        <h2 style={{ paddingTop: "40px" }}><b>Recent Activity</b></h2>
        <hr style={{ borderTop: "1px solid #bbb", borderRadius: "5px" }} />
        <div styles={netflixStyles} className="container">
          <div className="box">
            <Card style={{ backgroundColor: "#F4F4F4", height: "350px", width: "300px", textAlign: "center"}}>
              <img src={"https://personalwebsiteimages.s3.us-east-2.amazonaws.com/BDBI.jpeg"} alt="" style={{ width: "150px", paddingTop: "20px", paddingBottom:"5%" }}></img>
              <h5><b>Vice President of</b></h5>
              <h5><b>Big Data Big Impact @ GT</b></h5>
              <div  style={{marginTop:"10%"}}>
              <hr style={{ borderTop: "1px solid #bbb", borderRadius: "5px" }} />
              <Button variant="outlined" color="primary" target="_blank" href="https://gtbigdata.club/">View Website</Button>
              <Button variant="outlined" style={{ marginLeft: "1%" }} target="_blank" href="https://github.com/gt-big-data">View Repository</Button>
            </div>
            </Card>
          </div>
          <div className="box">
            <Card style={{ backgroundColor: "#F4F4F4", height: "350px", width: "300px", textAlign: "center" }}>
              <img src={"https://personalwebsiteimages.s3.us-east-2.amazonaws.com/deviparikh.jpg"} alt="" style={{ width: "150px", paddingTop: "20px", paddingBottom:"5%" }}></img>
              <h5><b>Incoming Research Assistant for Dr. Devi Parikh in her Creativity + AI initiative</b></h5>
              <div style={{marginTop:"5%"}}>
                <hr style={{ borderTop: "1px solid #bbb", borderRadius: "5px" }} />
                <Button variant="outlined" color="primary" target="_blank" href="https://www.cc.gatech.edu/~parikh/">Dr.Parikh's Page</Button>
                {/*<Button variant="outlined" style={{ marginLeft: "1%" }} target="_blank" href="https://github.com/purvaten/feel-the-music">View Repository</Button>*/}
              </div>
            </Card>
          </div>
          <div className="box">

            <Card style={{ backgroundColor: "#F4F4F4", height: "350px", width: "300px", textAlign: "center" }}>
              <img src={"https://personalwebsiteimages.s3.us-east-2.amazonaws.com/VIP.jpg"} alt="" style={{ width: "180px", paddingTop: "25px", paddingBottom:"5%" }}></img>
              <h5><b>Incoming Student Researcher for Automated Algorithm Design (Subteam: Stocks) </b></h5>
              <div style={{marginTop:"8%"}}>
                <hr style={{ borderTop: "1px solid #bbb", borderRadius: "5px" }} />
                <Button variant="outlined" color="primary" target="_blank" href="https://www.vip.gatech.edu/teams/automated-algorithm-design">View Team Page</Button>
                {/*<Button variant="outlined" style={{ marginLeft: "1%" }} target="_blank" href="https://github.com/purvaten/feel-the-music">View Repository</Button>*/}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    );
    {/*<div className="box">

            <Card style={{ backgroundColor: "#F4F4F4", height: "350px", width: "300px", textAlign: "center" }}>
              <img src={require("../../../assets/img/dhruvbatra.jpg")} style={{ width: "150px", paddingTop: "20px" }}></img>
              <h4><b>Incoming Research Assistant for Dr. Dhruv Batra for his EvalAI platform</b></h4>
              <div style={{}}>
                <hr style={{ borderTop: "1px solid #bbb", borderRadius: "5px" }} />
                <Button variant="outlined" color="primary" target="_blank" href="https://www.cc.gatech.edu/~parikh/">Dr.Parikh's Page</Button>
                
                </div>
                </Card>
              </div> */}
  
}
