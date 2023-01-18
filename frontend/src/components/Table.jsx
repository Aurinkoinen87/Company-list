import React from 'react'
import CompanyItem from './CompanyItem'
import WorkerItem from './WorkerItem'
import styles from './Table.module.scss' 
import SvgSelector from './SvgSelector' 

function Table({ data, name, titles }) {

  return (
    <div className={styles.table}>
      <header>
        <h2>{name}</h2>
      </header>
      <ul className={styles.table__titles}>
        {titles.map((title, i) => <li key={i}>{title}</li>)}
      </ul>
      <ul className={styles.table__list}>
        {data.map(item => {        
        return <li className={styles.table__item} key={item.id}>
          {name == 'Company'? <CompanyItem {...item} /> : <WorkerItem {...item} />}
          </li>})}
      </ul>
      <SvgSelector name={'add'} />
    </div>      
  )
}

export default Table