import React, { useState } from 'react';
import Child from '../childComponent/Child';

const Parent = () => {
  const [login,SetLogin]=useState(false)
  return (
    <>
    <h1>Parent Component</h1>
    {login?<p>You are logged in!</p>:<Child SetLogin={SetLogin} />}
    
    </>
  )
}

export default Parent