import React from 'react'
import CompanyItem from './CompanyItem'




function ListItem(props) {


  return (
    <>
    {props.companyId? <CompanyItem {...props} /> : <div></div>}
    </>
  )
}

export default ListItem