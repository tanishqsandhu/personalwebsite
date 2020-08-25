import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SkillsSection from "./Sections/SkillsSection.js";
import ExperienceSection from "./Sections/ExperienceSection.js";
import LatestUpdates from "./Sections/LatestUpdates.js";
import ContactSection from "./Sections/ContactSection.js";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        
        brand="Tanishq Sandhu"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/dubai.JPG")}>
        <div className={classes.container}>
          <GridContainer style={{alignContent:"center"}}>
            <GridItem  >
              
              <div style={{}} className={classes.brand}>
                <img src={require("../../assets/img/Headshot.jpg")} style={{height:"50%", width:"25%", borderRadius:"50%", border: "3px solid white"}}></img>
                <br></br>
                <h1 className={classes.title}>Tanishq Sandhu</h1>
              </div>
            </GridItem>
            
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <LatestUpdates />
        <SectionBasics id="#about"/>
        <SkillsSection />
        <ExperienceSection />
        <ContactSection/>
      </div>
      <Footer />
    </div>
  );
}
