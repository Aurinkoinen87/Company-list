import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { companySelector } from '../redux/slices/companySlice'
import Table from './Table'






function Companies() {

  const { companies } = useSelector(companySelector)
  const titles = ['title', 'personnel', 'address']

  return (
    <>
      <Table data={companies} name={'Company'} titles={titles} />
    </>
  )
}

export default Companies