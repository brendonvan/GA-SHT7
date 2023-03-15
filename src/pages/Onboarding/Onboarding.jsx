import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from './Onboarding.module.css'

// import OnboardingExpenses from "../../components/OnboardingExpenses/OnboardingExpenses";


const Onboarding = ({onboardingPage, turnPage}) => {
  // const [formData, setFormData] = useState({
  //   //? Awaiting backend model
  // })

  // const navigate = useNavigate()

  // const handleChange = e => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  // }

  // const handleSubmit = async evt => {
  //   evt.preventDefault()
  //   try {
  //     //? budgetService not created yet
  //     await budgetService.create(formData)
  //     navigate('/')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }



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
      <button onClick={turnPage}><span className={styles.buttonTxt}><Link to = "/createParentProfile">Create Profile!</Link></span></button>
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