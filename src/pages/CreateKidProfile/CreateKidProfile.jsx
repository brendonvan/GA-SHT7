import styles from './CreateKidProfile.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// redux actions
import { setChildAvatar } from '../../actions';

// services
import * as childService from '../../services/childService'

const CreateKidProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const child = useSelector(state => state.addChildProfileReducer)

  const [avatar1, setAvatar1] = useState(`${styles.avatar}`);
  const [avatar2, setAvatar2] = useState(`${styles.avatar}`);
  const [avatar3, setAvatar3] = useState(`${styles.avatar}`);
  const [avatar4, setAvatar4] = useState(`${styles.avatar}`);

  const handleProfileChange = async (child, avatar) => {
    
    // call to profile service
    console.log("Create Child avatar")
    const childId = await childService.create({ avatar: avatar })
    
    dispatch(setChildAvatar(child, avatar, childId._id))
    
    switch (avatar) {
      case "/assets/Kid_1.png":
        setAvatar1(`${styles.avatar} ${styles.active}`)
        setAvatar2(`${styles.avatar}`)
        setAvatar3(`${styles.avatar}`)
        setAvatar4(`${styles.avatar}`)
        break;
      case "/assets/Kid_2.png":
        setAvatar1(`${styles.avatar}`)
        setAvatar2(`${styles.avatar} ${styles.active}`)
        setAvatar3(`${styles.avatar}`)
        setAvatar4(`${styles.avatar}`)
        break;
      case "/assets/Kid_3.png":
        setAvatar1(`${styles.avatar}`)
        setAvatar2(`${styles.avatar}`)
        setAvatar3(`${styles.avatar} ${styles.active}`)
        setAvatar4(`${styles.avatar}`)
        break;
      case "/assets/Kid_4.png":
        setAvatar1(`${styles.avatar}`)
        setAvatar2(`${styles.avatar}`)
        setAvatar3(`${styles.avatar}`)
        setAvatar4(`${styles.avatar} ${styles.active}`)
        break;
      default:
        setAvatar1(`${styles.avatar}`)
        setAvatar2(`${styles.avatar}`)
        setAvatar3(`${styles.avatar}`)
        setAvatar4(`${styles.avatar}`)
        break;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
        <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate("/parentprofile")}} />
          <h1 className={styles.header_h1}>Kid Profile</h1>
          <p className={styles.header_p}>Set up this profile with your child</p>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src={ child.avatar } alt={ child.avatar }></img>
          <div className={styles.availableAvatar}>
            <div className={styles.gridCell}><img className={avatar1} onClick={ () => { handleProfileChange(child, "/assets/Kid_1.png") } } src="/assets/Kid_1.png" alt="choice-1-girl" /></div>
            <div className={styles.gridCell}><img className={avatar2} onClick={ () => { handleProfileChange(child, "/assets/Kid_2.png") } } src="/assets/Kid_2.png" alt="choice-2-boy" /></div>
            <div className={styles.gridCell}><img className={avatar3} onClick={ () => { handleProfileChange(child, "/assets/Kid_3.png") } } src="/assets/Kid_3.png" alt="choice-1-girl" /></div>
            <div className={styles.gridCell}><img className={avatar4} onClick={ () => { handleProfileChange(child, "/assets/Kid_4.png") } } src="/assets/Kid_4.png" alt="choice-2-boy" /></div>
          </div>
          <div className={styles.nextBtn} onClick={() => { navigate('/createkidprofile/setup') }}>Next</div>
        </div>
      </div>
    </div>
  )
}

export default CreateKidProfile
