import React from "react"
import ProjectList from "./component/ProjectList"
import Search from "./component/search-filter"
import NavBar from "./component/NavBar"


function Welcome() {
    return(
        <div>
            Welcome
            <NavBar />
         <Search />
            <ProjectList />
        </div>
    )
}