import React from 'react';
import { Switch, Route} from "react-router-dom"
import Welcome from "./component/Welcome"
import ReactJS from "./Languages/React"
import Apollo from "./Languages/Apollo"
import GraphQL from "./Languages/GraphQL"
import Prisma from "./Languages/Prisma"
import NavBar from "./component/NavBar"


const App = () => {
    return(
       <>
       <NavBar />
<Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/React" component={ReactJS}/>
    <Route eaxact path="/Apollo" component={Apollo}    />
    <Route exact path="/GraphQL" component={GraphQL}    />
    <Route exact path="/Prisma" component={Prisma}    />
</Switch>
       </>
    )
}

export default App;
