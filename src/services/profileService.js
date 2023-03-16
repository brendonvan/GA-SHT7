import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

// async function getAllProfiles() {
//   const res = await fetch(BASE_URL, {
//     headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
//   })
//   return await res.json()
// }

async function showProfile(profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

async function createProfile(profileData) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createChild(profileId, childData) {
  try {
    console.log('works here')
    console.log('profileId:', profileId)
    const res = await fetch(`${BASE_URL}/${profileId}/child`, {
      method: "POST",
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(childData)
    })
    console.log('works here 2')
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function showChild(profileId, childId) {
  const res = await fetch(`${BASE_URL}/${profileId}/${childId}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}


const updateProfile = async (profileId,profileData) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  showProfile, 
  addPhoto, 
  createProfile,
  createChild,
  showChild,
  updateProfile
}
