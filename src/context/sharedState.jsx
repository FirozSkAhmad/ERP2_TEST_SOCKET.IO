import React, { useState } from 'react'
import SharedContext from './SharedContext'

const SharedState = (props) => {

  const [loader, setLoader] = useState(false);

  return (
    <SharedContext.Provider value={{ 'loader': loader, 'setLoader': setLoader }}>{
      props.children
    }</SharedContext.Provider>
  )
}

export default SharedState