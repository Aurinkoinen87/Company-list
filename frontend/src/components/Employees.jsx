import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchWorkers } from '../redux/slices/employeeSlice'
import { employeeSelector } from '../redux/slices/employeeSlice'
import Table from './Table'



function Employees() {

  const dispatch = useDispatch()
  
  const { id } = useParams()

  useEffect(()=> {
    dispatch(fetchWorkers(id))
  }, [id])

  const titles = ['surname', 'name', 'position']
  const { employees } = useSelector(employeeSelector)

  return (
    <>
      <Table data={employees} name={'Employees'} titles={titles} />
    </>
  )
}

export default Employees
