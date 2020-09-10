import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SkillsSection from "./Sections/SkillsSection.js";
import ExperienceSection from "./Sections/ExperienceSection.js";
import LatestUpdates from "./Sections/LatestUpdates.js";
import ContactSection from "./Sections/ContactSection.js";
import styles from "../../assets/jss/material-kit-react/views/components.js";
import Scroll from "react-scroll";
const useStyles = makeStyles(styles);


export default function Components(props) {
  var Element  = Scroll.Element;
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
                <h2 className={classes.title} style={{marginLeft:"25%", fontFamily:"Arial"}}>Tanishq Sandhu</h2>
              </div>
            </GridItem>
            
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} style={{fontFamily:"Arial", font:"darkgrey"}}>
        <Element name="about"><SectionBasics/></Element>
        <Element name="updates"><LatestUpdates /></Element>
        <Element name="skills"><SkillsSection /></Element>
        <Element name="experience"><ExperienceSection /></Element>
        <Element name="contact"><ContactSection/></Element>
      </div>
      <Footer />
    </div>
  );
}
