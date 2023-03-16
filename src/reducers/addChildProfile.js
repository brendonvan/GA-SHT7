const initialState = {
    name: '',
    avatar: '/assets/Circle.png'
    
}

const addChildProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHILD_AVATAR':
            return {...state,
                avatar: action.payload.avatar }
        case 'SET_CHILD_NAME':
            return {...state,
                name: action.payload.name }
        default: 
            return state;
    }
}

export default addChildProfileReducer;