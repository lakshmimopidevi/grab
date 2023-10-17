import React from 'react'
import classes from './FourOhFour.module.css'
import Homepage from '../Homepage'
import { useNavigate } from 'react-router-dom'

export const FourOhFour = () => {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div className={classes.oopss}>
    <div className={classes.errorText}>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
        <span>404 PAGE</span>
        <p className={classes.pa}>
           . The page you were looking for could not be found</p>
        {/* <p className={classes.pb}>
            ... Back to previous page
        </p> */}
        <a onClick={handleGoBack} className={classes.back}>... Back to previous page</a>
    </div>
</div>
  )
}
