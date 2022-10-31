import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Table from './Table'






function Companies() {

  const { companies } = useSelector(state=> state.companies)
  const titles = ['title', 'personnel', 'address']
  return (
    <>
      <Table data={companies} name={'Company'} titles={titles} />
    </>
  )
}

export default Companies