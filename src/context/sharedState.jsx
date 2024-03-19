import React, { useState } from 'react'
import SharedContext from './SharedContext'

const SharedState = (props) => {

  const [loader, setLoader] = useState(false);
  const [roleType, setRoleType] = useState("");

  return (
    <SharedContext.Provider value={{ 'loader': loader, 'setLoader': setLoader, 'roleType': roleType, 'setRoleType': setRoleType }}>{
      props.children
    }</SharedContext.Provider>
  )
}

export default SharedState