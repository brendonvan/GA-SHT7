import styles from './CreateKidProfileSetup.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// redux actions
import { setChildName } from '../../actions'

import * as profileService from '../../services/profileService'


const CreateKidProfileSetup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)
  const child = useSelector(state => state.addChildProfileReducer)

  const [firstName, setFirstName] = useState("");

  async function handleNext() {
    try {
      dispatch(setChildName(child, firstName))
      // console.log(firstName)
      // console.log(profile)
      // console.log(child)
      console.log(await profileService.createChild(profile.user.profile, child))
      navigate('/parentprofile')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
        <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate("/createkidprofile")}} />
          <h1 className={styles.header_h1}>Kid Profile</h1>
          <p className={styles.header_p}>Set up this profile with your child</p>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src={ child.avatar } alt={ child.avatar }></img>
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
              <div className={styles.nextBtn} onClick={handleNext}>Next</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateKidProfileSetup
