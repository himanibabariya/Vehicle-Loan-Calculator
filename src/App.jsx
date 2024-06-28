import './App.css'

function App() {

  return (
    <>
      <h1 className='text-3xl text-center'>Vehicle Loan Calcuator</h1>

      <div className='flex max-w-7xl justify-center mx-auto mt-10'>
        <div className=''>
          <label htmlFor="">Vehicle Loan Amaount</label>
          <input type="number" name="" id="" />

          <label htmlFor="">Down Payment</label>
          <input type="number" name="" id="" />

          <label htmlFor="">Interest rate</label>
          <input type="number" name="" id="" />

          <label htmlFor="">Pay it off on...</label>
          <input type="number" name="" id="" />
          <label htmlFor="">Months</label>

          <input type="range" name="" id="" />
        </div>

        <div>
          <p>Based on what you entered, your vehicle loan monthly payment is</p>
        </div>

      </div>

    </>
  )
}

export default App
