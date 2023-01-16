import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './CompanyItem.module.scss' 



function CompanyItem({ title, personnelQ, address, id }) {

const isActive = ({ isActive }) => {
  return {
    background: isActive? '#60d144' : ''
  }
}
  return (
    <div className={styles.link}>
    <NavLink style={isActive} to={`/${id}`}>
      <span>{title}</span>
      <span>{personnelQ}</span>
      <span>{address}</span>
    </NavLink>
    <div className={styles.edit}>a</div>
    </div>

  )
}

export default CompanyItem