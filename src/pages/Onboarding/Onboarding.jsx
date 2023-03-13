import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Onboarding = () => {
  const [formData, setFormData] = useState({
    //? Awaiting backend model
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      //? budgetService not created yet
      await budgetService.create(formData)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="XXX">XXX</label>
          <input
            type='text'
            autoComplete="off"
            value={formData.XXX}
            onChange={handleChange}
            name='XXX'
          >
          </input>
        </div>
      <div>
        <button>
          Submit
        </button>
      </div>
      </form>
    </>
  )
}

export default Onboarding;