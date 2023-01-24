import React from 'react'
import SvgSelector from './SvgSelector'
import styles1 from './EditActive.module.scss'
import styles2 from './Edit.module.scss'


function EditActive({ setEdit }) {
  return (
    <div className={styles1.editActive}>
      <div className={styles2.edit}><SvgSelector name={'change'}/></div>
      <div className={styles2.edit}><SvgSelector name={'bin'}/></div>
      <div className={styles2.edit} onClick={()=> setEdit(false)} ><SvgSelector name={'tick'}/></div>
    </div>
  )
}

export default EditActive

