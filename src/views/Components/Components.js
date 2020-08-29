import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
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
    <div style={{background:"linear-gradient(to bottom, black, #fff 100%)"}}>
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
      <Parallax image={"https://personalwebsiteimages.s3.us-east-2.amazonaws.com/atl.jpg"} >
        <div className={classes.container} style={{justifyItems:"center"}}>
          <GridContainer >
            <GridItem  >
              
              <div style={{}} className={classes.brand}>
                <img src={"https://personalwebsiteimages.s3.us-east-2.amazonaws.com/Headshot.jpg"} alt="" style={{height:"50%", width:"25%", borderRadius:"50%", border: "3px solid white", marginLeft:"35%"}}></img>
                <br></br>
                <h1 className={classes.title} style={{marginLeft:"25%"}}>Tanishq Sandhu</h1>
              </div>
            </GridItem>
            
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} >
        <SectionBasics/>
        <LatestUpdates />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection/>
      </div>
      <Footer />
    </div>
  );
}
