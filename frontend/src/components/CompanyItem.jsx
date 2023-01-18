import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './CompanyItem.module.scss' 
import Edit from './Edit' 



function CompanyItem({ title, personnelQ, address, id }) {

const isActive = ({ isActive }) => {
  return {
    background: isActive? 'rgba(106, 255, 44, .8)' : ''
  }
}
  return (
    <div className={styles.link}>
    <NavLink style={isActive} to={`/${id}`}>
      <span>{title}</span>
      <span>{personnelQ}</span>
      <span>{address}</span>
    </NavLink>
    <Edit />
    </div>

  )
}

export default CompanyItem