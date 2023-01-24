import React, { useState }  from 'react'
import { NavLink } from 'react-router-dom'
import styles from './CompanyItem.module.scss'  
import IsActive from './IsActive' 





function CompanyItem({ title, personnelQ, address, id }) {

let[edit, setEdit] = useState(false)
let[active, setActive] = useState(false)

const isActive = ({ isActive }) => {
  if(isActive){
    setActive(true)
   } else {
    setActive(false)
    setEdit(false)
   }
  return {
    background: isActive? 'rgba(106, 255, 44, .8)' : '',
    width: edit? '75%' : '92%'
  }
}

  return (
    <div className={styles.link}>
    <NavLink style={ isActive } to={`/${id}`}>
      <span>{title}</span>
      <span>{personnelQ}</span>
      <span>{address}</span>
    </NavLink>
    {active && <IsActive setEdit={setEdit} edit={edit} />}
    </div>

  )
}

export default CompanyItem