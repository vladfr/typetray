import React, { PropTypes } from 'react'
import { VirtualScroll } from 'react-virtualized';
import Font from './Font'

const FontList = ( {fonts} ) => {
  return(
    <VirtualScroll
      rowsCount={fonts.length}
      rowHeight={20}
      width={100}
      height={100}
      rowRenderer={
        index => <Font font={fonts[index]} />
      }
    />
  )
}

export default FontList;