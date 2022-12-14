import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ListItem.module.scss' 



function ListItem({ companyId, title, personnelQ, address, personId, surname, name, jobTitle }) {

  return (
    <Link className={styles.link} to={`/company/${companyId}`}>
      <span>{title}</span>
      <span>{personnelQ}</span>
      <span>{address}</span>
    </Link>
  )
}

export default ListItem