import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import styles from './Onboarding.module.css'

// redux actions
import { setOnboarding } from '../../actions';

const Onboarding = ({onboardingPage, turnPage}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)

  const handleFinishOnboarding = () => {
    console.log('navigate to /createparentprofile')
    navigate('/createparentprofile')
  }

  return (
    <>
    { onboardingPage === 1 ? (
    <div className={styles.screen1}>
  
      <img src="/assets/Onboarding_1.png" className={styles.img}></img>
      <h1>Teach kids responsibility by making a chore board</h1>
      <button onClick={turnPage}><span className={styles.buttonTxt}>Next</span></button>
      <div className={styles.pageTracker}>
        <div className={styles.dot1}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
    ) : ("")}
    { onboardingPage === 2 ? (
    <div className={styles.screen2}>
      <img src="/assets/Onboarding_2.png" className={styles.img}></img>
      <h1>Help them stay accountable by keeping track</h1>
      <button onClick={turnPage}><span className={styles.buttonTxt}>Next</span></button>
      <div className={styles.pageTracker}>
        <div className={styles.dot}></div>
        <div className={styles.dot2}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
    ) : ("")}
    { onboardingPage === 3 ? (
    <div className={styles.screen3}>
      <img src="/assets/Onboarding_3.png" className={styles.img}></img>
      <h1>Incentivize them to reach their goals through rewards</h1>
      <button onClick={handleFinishOnboarding}><span className={styles.buttonTxt}>Create Profile!</span></button>
      <div className={styles.pageTracker}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot3}></div>
      </div>
    </div>
    ) : ("")}
    </>
  )
}

export default Onboarding;