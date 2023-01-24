import React from 'react'
import styles from './Edit.module.scss' 
import SvgSelector from './SvgSelector'

function Edit({ setEdit }) {

  return (
    <div className={styles.edit} onClick={()=> setEdit(true)}>
      <SvgSelector name={'pencil'} />
    </div>
  )
}

export default Edit