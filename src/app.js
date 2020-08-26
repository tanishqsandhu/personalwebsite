import React, { Component } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
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