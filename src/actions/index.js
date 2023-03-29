
// services
import * as authService from '../services/authService'
import * as profileService from '../services/profileService'
import * as childService from '../services/childService'

export const setProfile = ( profile ) => {
    const currentProfile = { profile: profile }
    console.log('here' + profile)
    return {
        type: 'SET_PROFILE',
        payload: currentProfile
    }
}

export const setNavbar = ( showNavbar ) => {
    return {
        type: 'SET_NAVBAR',
        payload: { show: showNavbar }
    }
}

export const setCurrentUser = ( initProfile, user ) => {
    let currentProfile = { ...initProfile, user }
    return {
        type: 'SET_CURRENTUSER',
        payload: currentProfile
    }
}

export const setOnboarding = ( profile, showOnboarding) => {
    let currentProfile = { ...profile, showOnboarding }
    return {
        type: 'SET_ONBOARDING',
        payload: currentProfile
    }
}

export const setProfileAvatar = (profile, profileAvatar) => {
    let currentProfile = { ...profile, profileAvatar }

    // call to profile service
    if(typeof profile == 'string') {
        profileService.update(profile, { avatar: profileAvatar })
    }
    return {
        type: 'SET_AVATAR',
        payload: currentProfile
    }
}

export const setProfileName = (profile, name) => {
    let currentProfile = { ...profile, name }

    // call to profile service
    if(typeof profile == 'string') {
        profileService.update(profile, { name: name })
    }
    return {
        type: 'SET_NAME',
        payload: currentProfile
    }
}

export const setChildAvatar = (child, avatar, childId) => {
    let currentChild = { ...child, avatar, childId }
    return {
        type: 'SET_CHILD_AVATAR',
        payload: currentChild
    }
}

export const setChildName = (childId, name) => {
    let currentChild = { ...childId, name }

    // call to profile service
    childService.update(childId, { name: name })
    return {
        type: 'SET_CHILD_NAME',
        payload: currentChild
    }
}

export const setTasks = (tasks) => {
    return {
        type: 'SET_TASKS',
        payload: tasks
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}
