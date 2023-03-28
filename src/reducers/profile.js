export const initialState = {
    user: null,
    showOnboarding: true,
    name: '',
    profileAvatar: '/assets/Circle.png'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return { ...state, 
                profile: action.payload.profile }
        case 'SET_CURRENTUSER':
            return { ...state ,
                user: action.payload.user}
        case 'SET_ONBOARDING':
            return { ...state ,
                showOnboarding: action.payload.showOnboarding}
        case 'SET_AVATAR':
            return {...state,
            profileAvatar: action.payload.profileAvatar }
        case 'SET_NAME':
            return {...state,
                name: action.payload.name }
        default: 
            return state;
    }
}

export default profileReducer;