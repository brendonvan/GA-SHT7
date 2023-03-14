import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from './Onboarding.module.css'

// import OnboardingExpenses from "../../components/OnboardingExpenses/OnboardingExpenses";


const Onboarding = ({onboardingPage, turnPage, exitOnboarding}) => {
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

      <h1>Onboarding Screen</h1>

      <h1>IMG</h1>

      <h3>Set Goals Together</h3>
      <div className={styles.pageTracker}>
        <div className={styles.page1}></div>
        <div className={styles.page2}></div>
        <div className={styles.page3}></div>
      </div>
      <button onClick={turnPage}>Next</button>
    </div>
    </>
  )
}

export default Onboarding;