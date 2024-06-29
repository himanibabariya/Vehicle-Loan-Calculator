import './App.css'

function App() {

  return (
    <>
      <h1 className='text-3xl text-center mt-11'>Vehicle Loan Calcuator</h1>

      <div className='flex gap-x-10 max-w-7xl justify-center mx-auto mt-10'>
        <div className=''>
          <div className='my-6'>
            <label htmlFor="" className='w-72 inline-block text-xl '>Vehicle Loan Amaount</label>
            <input data-tip='doller' type="number" name="" id="" className='h-9 border border-gray-400' />
          </div>
          <hr className=' border-gray-400' />

          <div className='my-6'>
            <label htmlFor="" className='w-72 inline-block text-xl '>Down Payment</label>
            <input type="number" name="" id="" className='h-9 border border-gray-400' />
          </div>
          <hr className='border-gray-400'/>

          <div className='my-6'>
            <label htmlFor="" className='w-72 inline-block text-xl'>Interest rate</label>
            <input type="number" name="" id="" className='h-9 border border-gray-400' />
          </div>
          <hr className='border-gray-400'/>

          <div className='my-6'>
            <label htmlFor="" className='w-72 inline-block text-xl'>Pay it off on...</label>
            <input type="number" name="" id="" className='h-9 border border-gray-400' />
            <label htmlFor="">Months</label>
          </div>

          <input type="range" name="" id="" className='range-input' />
        </div>

        <div className='w-px h-74 bg-gray-400'></div>

        <div>
          <p className='mx-20 mt-24 max-w-sm text-center '>Based on what you entered, your vehicle loan monthly payment is</p>
          <p className='text-center text-5xl mt-6'>$50.00</p>
        </div>

      </div>

    </>
  )
}

export default App
