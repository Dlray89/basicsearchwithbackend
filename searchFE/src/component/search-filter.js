import React from 'react';
import { useQuery } from "urql"
import gql from "graphql-tag"
import { TextField, makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Project from "./Project"

const useStyles = makeStyles({
  root: {
    margin: "2% auto"
  }
})

const FEED_SEARCH = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
        projects {
            id
            name
            description
        }
    }
}
`

const Search = () => {
  const classes = useStyles()
  const [filter, setFilter] = React.useState('')
  const [result, executeQuery] = useQuery({
    query: FEED_SEARCH,
    variables: { filter },
    pause: true
  })


  const search = React.useCallback(() => {
    executeQuery()
  }, [executeQuery])

  const projects = result.data ? result.data.feed : []

  return (
    <div>
      <Autocomplete
        // onChange={e => setFilter(e.target.value)}
        onChange={e => console.log(e.target.value)}
        id="combo-box-demo"
        options={projects}
        className={classes.root}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search/Filter" variant="outlined" />}

      />
      <div>
        {projects.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>

          {console.log('filterState:', filter)}
    </div>
  )
}

export default Search