import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from './Profiles.module.css'
import * as profileService from '../../services/profileService'

const Profiles = ({ profile, handleAddChild }) => {
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
    goal: '',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
    console.log(form)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddChild(form)
    console.log('Submit:', form)
  }

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profile.length ?
        <>
          {profile.map(profile =>
            // Use this link later to replace fixed profile link that currently leads to all profiles
            //Users should have only one profile and right now we can see all profiles created
            <Link to={`/profiles/${profile._id}`}>
              <p className={styles.link} key={profile._id}>{profile.name}</p>
            </Link>
          )}
        </>
        :
        <p>No profiles yet</p>
      }

      <h1>{profile.name}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name-input'>Name</label>
        <input
          id='name-input'
          onChange={handleChange}
          name="name"
          type="text"
          value={form.name}
        />
        <label htmlFor='avatar-select'>Avatar:</label>
        <input
          id='avatar-select'
          onChange={handleChange}
          name="avatar"
          type="text"
          value={form.avatar}
        />
        <label htmlFor='score-input'>Score:</label>
        <input
          id='score-input'
          onChange={handleChange}
          name="score"
          type="number"
          value={form.score}
        />
        <label htmlFor='goal-input'>Goal:</label>
        <input
          id='goal-input'
          onChange={handleChange}
          name="goal"
          type="text"
          value={form.goal}
        />

        <button type='submit'>Add Child For real</button>

        {/* <input id="submit" type="submit" value="Add Child"/> */}
      </form>
    </>
  )
}

export default Profiles