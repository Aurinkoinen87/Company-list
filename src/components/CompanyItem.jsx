import React from 'react'
import { Link } from "react-router-dom";
import styles from "./CompanyItem.module.scss";


function CompanyItem({ companyId, title, personnelQ, address }) {
  return (
    <>
      <Link className={styles.link} to={`/company/${companyId}`}>
        <span>{title}</span>
        <span>{personnelQ}</span>
        <span>{address}</span>
      </Link>
    </>
  )
}

export default CompanyItem