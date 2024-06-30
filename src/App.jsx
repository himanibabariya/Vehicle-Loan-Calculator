import { useState } from 'react'
import './App.css'

function App() {

  const [loanAmount, setLoanAmount] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setinterestRate] = useState(0);
  const [payoffMonths, setPayoffMonths] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () =>{
    const principal = loanAmount - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = payoffMonths;

    if(monthlyInterestRate === 0){
      setMonthlyPayment(principal/numberOfPayments)
    }
    else{
      const monthlyPayment = (principal * monthlyInterestRate) / 
         (1 - Math.pow((1+monthlyInterestRate), -numberOfPayments));
         setMonthlyPayment(monthlyPayment)
    }
  };

  return (
    <>
      <h1 className='text-3xl text-center mt-16'>Vehicle Loan Calcuator</h1>

      <div className='flex gap-x-10 flex-wrap max-w-7xl justify-center mx-auto mt-20'>
        <div className=''>
          <div className='my-6 relative'>
            <label htmlFor="loanAmount" className='w-72 inline-block text-xl '>Vehicle Loan Amaount</label>
            <i class="fa-solid fa-dollar-sign text-customRed absolute top-2 "></i>
            <input placeholder='0' type="number" name="loanAmount" id="" className='h-9 border text-right border-gray-400 text-customRed hover:border-customRed focus:border-customRed' />
          </div>
          <hr className=' border-gray-400' />

          <div className='my-6'>
            <label htmlFor="downPayment" className='w-72 inline-block text-xl '>Down Payment</label>
            <input placeholder='0' type="number" name="downPayment" id="" className='h-9 border text-right border-gray-400 text-customRed ' />
          </div>
          <hr className='border-gray-400'/>

          <div className='my-6'>
            <label htmlFor="interestRate" className='w-72 inline-block text-xl'>Interest rate</label>
            <input placeholder='0.00' type="number" name="interestRate" id="" className='h-9 border text-right border-gray-400' />
          </div>
          <hr className='border-gray-400'/>

          <div className='my-6'>
            <label htmlFor="payoffMonths" className='w-72 inline-block text-xl'>Pay it off on...</label>
            <input type="number" name="payoffMonths" id="" className='h-9 w-24 text-right<i class="fa-solid fa-dollar-sign"></i> border border-gray-400' />
            <label htmlFor="" className='ml-6'>Months</label>
          </div>

          <input type="range" name="" id="" className='range-input' />
        </div>

        <div className='w-px h-74 bg-gray-400'></div>

        <div>
          <p className='mx-20 mt-24 max-w-sm text-center '>Based on what you entered, your vehicle loan monthly payment is</p>
          <p className='text-center text-5xl mt-6 text-customRed'>$50.00</p>
        </div>

      </div>

    </>
  )
}

export default App
