import React, { useState } from 'react'
import styles from './Edit.module.scss' 
import SvgSelector from './SvgSelector'

function Edit() {

  let[edit, setEdit] = useState(false)

  return (
    <div className={styles.edit} onClick={()=> setEdit(!edit)}>
      {edit? <div></div> : <SvgSelector name={'pencil'} />}
    </div>
  )
}

export default Edit