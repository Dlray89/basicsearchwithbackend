import React from 'react';
import { Switch, Route} from "react-router-dom"
import Welcome from "./component/Welcome"
import TechDocs from "./Languages/techDocs"

import NavBar from "./component/NavBar"


const App = () => {
    return(
       <>
       <NavBar />
<Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/React" component={TechDocs}/>
</Switch>
       </>
    )
}

export default App;
