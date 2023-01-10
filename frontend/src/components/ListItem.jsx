import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ListItem.module.scss' 



function ListItem({ id, title, personnelQ, address }) {

  return (
    <Link className={styles.link} to={`/company/${id}`}>
      <span>{title}</span>
      <span>{personnelQ}</span>
      <span>{address}</span>
    </Link>
  )
}

export default ListItem