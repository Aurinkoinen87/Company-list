import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { employeeSelector } from '../redux/slices/employeeSlice'
import Table from './Table'



function Employees() {

  const { employees } = useSelector(employeeSelector)
  const titles = ['surname', 'name', 'position']
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(()=> {

  })

  return (
    <>
      <Table data={employees} name={'Employees'} titles={titles} />
    </>
  )
}

export default Employees
