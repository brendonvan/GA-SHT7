import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from './Profiles.module.css'
import * as profileService from '../../services/profileService'

const Profiles = ({profile, handleAddChild}) => {
  // const [profiles, setProfiles] = useState([])

  // useEffect(() => {
  //   const fetchProfiles = async () => {
  //     const profileData = await profileService.getAllProfiles()
  //     setProfiles(profileData)
  //   }
  //   fetchProfiles()
  // }, [])


  // const profile = location.state?.profile

  const [form, setForm] = useState({
    name: '',
    avatar: '',
    score: '',
    Goal: '',
    
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddChild(form)
  }

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profile.length ? 
        <>
          {profile.map(profile =>
          // Use this link later to replace fixed profile link that currently leads to all profiles
          //Users should have only one profile and right now we can see all profiles created
          <Link to ={`/profiles/${profile._id}`}>
          <p className={styles.link} key={profile._id}>{profile.name}</p>
          </Link>
          )}
        </>
      :
        <p>No profiles yet</p>
      }

      <h1>{profile.name}</h1>
      <form onSubmit={handleSubmit}>
      <div>Name</div> 
      <input onChange={handleChange} type="text"></input>
      <div>Avatar:</div>
      <input onChange={handleChange} type="text"></input>
      <div>Score:</div>
      <input onChange={handleChange} type="number"></input>
      <div>Goal:</div>
      <input onChange={handleChange} type="text"></input>
      <div></div>
      <input id="submit" type="submit" value="Add Child"/>
    </form>
    </>
  )
}
 
export default Profiles