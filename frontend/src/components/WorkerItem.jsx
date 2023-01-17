import React from 'react'
import styles from './WorkerItem.module.scss' 
import Edit from './Edit' 

function WorkerItem({ name, surname, jobTitle, id }) {
  
  return (
    <div className={styles.worker}>
      <div className={styles.container}>
      <span>{name}</span>
      <span>{surname}</span>
      <span>{jobTitle}</span>
      </div>
      <Edit />
    </div>
  )
}

export default WorkerItem