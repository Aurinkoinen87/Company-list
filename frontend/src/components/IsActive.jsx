import React from 'react'
import Edit from './Edit' 
import EditActive from './EditActive'


function IsActive({ edit, setEdit }) {

  return (
    <>
    { edit? <EditActive setEdit={setEdit} /> : <Edit setEdit={setEdit} /> }  
    </>
  )
}

export default IsActive