import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import socialStyle from "assets/css/socials.css";
import Zoom from '@material-ui/core/Zoom';
const useStyles = makeStyles(styles);
const socialStyles = makeStyles(socialStyle);
export default function ContactSection() {
    const classes = useStyles();
    const social = socialStyles();

    return (
        <div style={{ background: "white" }} className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.title}>
                </div>
                <div className="row" style={{paddingLeft:"10%"}}>
                    <div className="social" style={social}>
                        <ul>
                            <li><Tooltip TransitionComponent={Zoom} placement="top-end" title="Call me!" arrow><a href="Tel: 770-570-6737"><i class="fab fa-viber" aria-hidden="true"></i></a></Tooltip></li>
                            <li><Tooltip TransitionComponent={Zoom} placement="top-end" title="Email me!" arrow><a href="mailto:tanishqsandhu99@gmail.com?Subject=Hello%20Tanishq"><i class="fab fa-telegram-plane" aria-hidden="true"></i></a></Tooltip></li>
                            <li><Tooltip TransitionComponent={Zoom} placement="top-end" title="LinkedIn" arrow><a href="https://www.linkedin.com/in/tanishqsandhu/"><i class="fab fa-linkedin" aria-hidden="true"></i></a></Tooltip></li>

                            <li><Tooltip TransitionComponent={Zoom} placement="top-end" title="VSCO" arrow><a href="https://vsco.co/tanishqsandhu/images"><img style={{ width: "55%", marginTop: "20%" }} src={require("../../../assets/img/icons/vsco.png")} alt="VSCO Logo" /></a></Tooltip></li>
                            <li><Tooltip TransitionComponent={Zoom} placement="top-end" title="Instagram" arrow><a href="https://instagram.com/tanishq.jpeg?igshid=v641smjwre38"><i class="fab fa-instagram" aria-hidden="true"></i></a></Tooltip></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
