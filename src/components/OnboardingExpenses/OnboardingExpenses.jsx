const OnboardingExpenses = () => {

  return (
    <>
      <h1>Expenses Form</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="income">Rent</label>
          <input
            type='number'
            autoComplete="off"
            value={formData.rent}
            onChange={handleChange}
            name='rent'
          >
          </input>
        </div>
        <div>
          <label htmlFor="utilities">Utilities</label>
          <input
            type='number'
            autoComplete="off"
            value={formData.utilities}
            onChange={handleChange}
            name='utilities'
          >
          </input>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type='number'
            autoComplete="off"
            value={formData.phone}
            onChange={handleChange}
            name='phone'
          >
          </input>
        </div>
        <div>
          <label htmlFor="internet">Internet</label>
          <input
            type='number'
            autoComplete="off"
            value={formData.internet}
            onChange={handleChange}
            name='internet'
          >
          </input>
        </div>
        <div>
          <label htmlFor="investment">Investment</label>
          <input
            type='number'
            autoComplete="off"
            value={formData.investment}
            onChange={handleChange}
            name='investment'
          >
          </input>
        </div>
        <div>
          <label htmlFor="food">Food</label>
          <input
            type='number'
            autoComplete="off"
            value={formData.food}
            onChange={handleChange}
            name='food'
          >
          </input>
        </div>
        <div>
          <label htmlFor="entertainment">Entertainment</label>
          <input
            type='number'
            autoComplete="off"
            value={formData.entertainment}
            onChange={handleChange}
            name='entertainment'
          >
          </input>
        </div>
        <div>
          <label htmlFor="transportation">Transportation</label>
          <input
            type='number'
            autoComplete="off"
            value={formData.transportation}
            onChange={handleChange}
            name='transportation'
          >
          </input>
        </div>
        <div>
          <label htmlFor="misc">Misc</label>
          <input
            type='number'
            autoComplete="off"
            value={formData.misc}
            onChange={handleChange}
            name='misc'
          >
          </input>
        </div>
        <div>
          <label htmlFor="children">Children</label>
          <input
            type='number'
            autoComplete="off"
            value={formData.children}
            onChange={handleChange}
            name='children'
          >
          </input>
        </div>
        <div>
          <label htmlFor="pets">Pets</label>
          <input
            type='number'
            autoComplete="off"
            value={formData.pets}
            onChange={handleChange}
            name='pets'
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

export default OnboardingExpenses;