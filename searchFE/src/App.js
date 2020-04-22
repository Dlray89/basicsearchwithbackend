import React from 'react';
import ProjectList from "./component/ProjectList"
import Search from "./component/search-filter"
import NavBar from "./component/NavBar"

const App = () => {
  return (
    <div>
      <NavBar />
      <Search />
      {/* <ProjectList /> */}
    </div>
  )
}

export default App;
