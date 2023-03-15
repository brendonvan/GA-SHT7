import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from './Profiles.module.css'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
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
    </>
  )
}
 
export default Profiles