import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

// async function getAllProfiles() {
//   const res = await fetch(BASE_URL, {
//     headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
//   })
//   return await res.json()
// }

async function show(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}


async function create(profileData) {
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


const update = async (profileId, profileData) => {
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
  show,
  create,
  update
}
