import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Table from './Table'



function Employees() {

  const dispatch = useDispatch()

  const { id } = useParams()

    
  useEffect(()=> {
    
  },[])

  
  return (
    <>
    <div>{id}</div>
      {/* <Table /> */}
    </>
  )
}

export default Employees
