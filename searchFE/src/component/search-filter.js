import React from 'react';
import { useQuery } from "urql"
import gql from "graphql-tag"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Search = () => {
    const [filter, setFilter] = React.useState('')
}

const search = React.useCallback(() => {}, [])
const products = []

return(
    <div>
         <Autocomplete
      id="combo-box-demo"
      options={products}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
      onChange={e => setFilter(e.target.value)}
    />
    {products.map((product, index) => {
        <Product key={product.id} product={product} index={index} />
    })}
    </div>
)

export default Search