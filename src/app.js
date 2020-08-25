import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import SectionBasics from "views/Components/Sections/SectionBasics.js";
import SkillsSection from "views/Components/Sections/SkillsSection.js";
import ExperienceSection from "views/Components/Sections/ExperienceSection.js";
import LatestUpdates from "views/Components/Sections/LatestUpdates.js";
import ContactSection from "views/Components/Sections/ContactSection.js";
var hist = createBrowserHistory();

class App extends Component {
render(){
return(
<div>
<Router history={hist}>
<Switch>
    <Route path="/" component={Components} />
    

</Switch>

</Router>
      

</div>
)


}}
export default App;