import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className={styles.screen1}>

      <h1>Page 1 Onboarding Screen</h1>

      <h1 className={styles.img}>IMG</h1>

      <h3 className={styles.txt}>Set Goals Together</h3>
      <div className={styles.pageTracker}>
        <div className={styles.dot1}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <button onClick={turnPage}><span className={styles.buttonTxt}>Next</span></button>
    </div>
    <div className={styles.screen2}>

      <h1>Page 2 Onboarding Screen</h1>

      <h1 className={styles.img}>IMG</h1>

      <h3 className={styles.txt}>Stay on Track Together</h3>
      <div className={styles.pageTracker}>
        <div className={styles.dot}></div>
        <div className={styles.dot2}></div>
        <div className={styles.dot}></div>
      </div>
      <button onClick={turnPage}><span className={styles.buttonTxt}>Next</span></button>
    </div>
    <div className={styles.screen3}>

      <h1>Page 3 Onboarding Screen</h1>

      <h1 className={styles.img}>IMG</h1>

      <h3 className={styles.txt}>Celebrate Together</h3>
      <div className={styles.pageTracker}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot3}></div>
      </div>
      <button onClick={turnPage}><span className={styles.buttonTxt}>Next</span></button>
    </div>
    </>
  )
}

export default Onboarding;