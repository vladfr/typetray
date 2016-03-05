import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

import FilteredFontList from '../containers/FilteredFontList'
import Filters from './Filters'
import FontDetails from './FontDetails'

class App extends Component {

  render() {
    return (
      <Flex auto={true}>
        <Box p={2} col={2}>
          <Filters />
        </Box>
        <Box p={2} col={3}>
          <FilteredFontList />
        </Box>
        <Box p={2} col={7}>
          <p>Details</p>
        </Box>
      </Flex>
    )

  }

}
  
export default App