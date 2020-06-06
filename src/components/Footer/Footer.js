import React, { Fragment } from 'react'
import { Typography, Tooltip } from '@material-ui/core'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <Fragment>
      <Tooltip title="ReactJs Developer">
        <Typography className={styles.name} color="textPrimary">
          Developed By: Shehbaz Ansari
        </Typography>
      </Tooltip>
      <Tooltip title="Contact: 9137625108">
        <Typography className={styles.email}>
          Email: reactjs5622@gmail.com
      </Typography>
      </Tooltip>
    </Fragment>
  )
}
export default Footer
