import React from 'react'
import ListItem from './ListItem'
import styles from './Table.module.scss' 

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
        return <li className={styles.table__item} key={item.id}><ListItem {...item} /></li>})
}

      </ul>
    </div>      
  )
}

export default Table