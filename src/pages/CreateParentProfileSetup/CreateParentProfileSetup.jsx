import styles from './CreateParentProfileSetup.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// redux actions
import { setProfileName, setOnboarding } from '../../actions';

// services
import * as profileService from '../../services/profileService'

const CreateParentProfileSetup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)

  const [firstName, setFirstName] = useState("");

  function handleNext() {
    dispatch(setProfileName(profile, firstName))
    profileService.createProfile(profile)
    console.log(profile)
    navigate('/parentprofile')
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
        <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate(-1)}} />
          <h1 className={styles.header_h1}>Parent Profile</h1>
          <p className={styles.header_p}>What's your name?</p>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src={profile.profileAvatar} alt={profile.profileAvatar}></img>
          <div>
            <form className={styles.formField}>
              <label className={styles.label}>First Name</label>
              <input
                className={styles.input}
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder=""
                type="text"
                name="firstName"
                required
              />
            </form>
          </div>
        </div>
      </div>
      <div className={styles.nextBtn} onClick={() => handleNext()}>Next</div>
    </div>
  )
}

export default CreateParentProfileSetup
