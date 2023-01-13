import React from 'react'
import styles from './CompanyItem.module.scss' 

function WorkerItem({ name, surname, jobTitle, id }) {
  
  return (
    <div className={styles.link}>
      <span>{name}</span>
      <span>{surname}</span>
      <span>{jobTitle}</span>
    </div>
  )
}

export default WorkerItem