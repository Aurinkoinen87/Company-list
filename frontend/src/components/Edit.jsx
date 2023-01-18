import React, { useState } from 'react'
import styles from './Edit.module.scss' 
import SvgSelector from './SvgSelector'

function Edit() {

  let[edit, setEdit] = useState(false)

  const onClickHandler = () => {
      setEdit(!edit)
  }

  return (
    <div className={styles.edit} onClick={onClickHandler}>
      {edit? <div></div> : <SvgSelector name={'pencil'} />}
    </div>
  )
}

export default Edit