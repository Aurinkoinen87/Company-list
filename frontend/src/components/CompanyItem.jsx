import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CompanyItem.module.scss' 



function CompanyItem({ title, personnelQ, address, id }) {
  
  return (
    <Link className={styles.link} to={`/${id}`}>
      <span>{title}</span>
      <span>{personnelQ}</span>
      <span>{address}</span>
    </Link>
  )
}

export default CompanyItem