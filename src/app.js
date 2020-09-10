import React, { Component } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";


// pages for this product
import Components from "./views/Components/Components.js";
var hist = createBrowserHistory();

class App extends Component {
render(){
return(
<div>
<Router history={hist}>
<Switch>
    <Route exact path="/" component={Components} />
</Switch>

</Router>
      

</div>
)


}}
export default App;