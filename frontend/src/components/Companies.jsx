import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { companySelector, fetchCompanies } from '../redux/slices/companySlice'
import Table from './Table'


function Companies() {

  const dispatch = useDispatch()

  useEffect(()=> {
    console.log('1')
    dispatch(fetchCompanies())
  },[])

  const { companies } = useSelector(companySelector)
  console.log(companies)
  const titles = ['title', 'personnel', 'address']

  return (
    <>
      <Table data={companies} name={'Company'} titles={titles} />
    </>
  )
}

export default Companies