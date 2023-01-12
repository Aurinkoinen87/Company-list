import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ListItem.module.scss' 



function ListItem({ title, personnelQ, address, id }) {
  
  return (
    <Link className={styles.link} to={`/workers/${id}`}>
      <span>{title}</span>
      <span>{personnelQ}</span>
      <span>{address}</span>
    </Link>
  )
}

export default ListItem