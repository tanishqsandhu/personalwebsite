/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

//pages
import SectionBasics from "views/Components/Sections/SectionBasics.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
const scroll = Scroll.animateScroll;
export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
         <Link className={classes.navLink} onClick={() => {scroll.scrollTo(740)}} ><h4>Recent Activity</h4></Link>
            
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} onClick={() => {scroll.scrollTo(1380)}} ><h4>About</h4></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link className={classes.navLink} onClick={() => {scroll.scrollTo(2020)}} ><h4>Skills</h4></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link className={classes.navLink} onClick={() => {scroll.scrollTo(3150)}} ><h4>Experience</h4></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link className={classes.navLink} onClick={() => {scroll.scrollToBottom()}} ><h4>Contact</h4></Link>
      </ListItem>
    </List>
  );
}
