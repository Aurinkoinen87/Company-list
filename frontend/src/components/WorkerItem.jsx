import React, { useState }  from 'react'
import styles from './WorkerItem.module.scss' 
import IsActive from './IsActive' 


function WorkerItem({ name, surname, jobTitle, id }) {

  let[edit, setEdit] = useState(false)
 
  return (
    <div className={styles.worker}>
      <div className={styles.container} style={{ width: edit? '75%' : '92%' }}>
      <span>{name}</span>
      <span>{surname}</span>
      <span>{jobTitle}</span>
      </div>
      <IsActive setEdit={setEdit} edit={edit} />
    </div>
  )
}

export default WorkerItem