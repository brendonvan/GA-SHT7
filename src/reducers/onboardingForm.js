const onboardingForm = (state = null, action) => {
  switch (action.type) {
    case 'SUBMIT':
      console.log('submit')
      return state

    default :

      return state
  }
}

export default onboardingForm;