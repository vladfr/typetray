import React, { PropTypes } from 'react'

const Font = ( {font} ) => {
  return(
    <p style={{fontFamily: font.name }}>
      {font.name}
    </p>
  )
}

export default Font