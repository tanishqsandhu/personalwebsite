/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
const scroll = Scroll.animateScroll;
var scroller = Scroll.scroller;
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list} style={{font:"Arial"}}>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} onClick={() => {
          scroller.scrollTo("about", {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -20
          })
        }} ><h5>About</h5></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} onClick={() => {
          scroller.scrollTo("updates", {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -70
          })
        }} ><h5>Recent Activity</h5></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} onClick={() => {
          scroller.scrollTo("skills", {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -20
          })
        }} ><h5>Skills</h5></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} onClick={() => {
          scroller.scrollTo("experience", {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -20
          })
        }} ><h5>Experience</h5></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} onClick={() => { scroll.scrollToBottom() }} ><h5>Contact</h5></Link>
      </ListItem>
    </List>
  );
}
