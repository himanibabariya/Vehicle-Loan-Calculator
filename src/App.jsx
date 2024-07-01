import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [loanAmount, setLoanAmount] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [payoffMonths, setPayoffMonths] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(()=>{
    calculateMonthlyPayment();
  }, [loanAmount, downPayment, interestRate, payoffMonths]);

  const calculateMonthlyPayment = () =>{
    const principal = loanAmount - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = payoffMonths;

    if (numberOfPayments === 0) {
      setMonthlyPayment(0);
      return;
    }

    if(monthlyInterestRate === 0){
      setMonthlyPayment(principal/numberOfPayments)
    }
    else{
      const monthlyPayment = (principal * monthlyInterestRate) / 
         (1 - Math.pow((1+monthlyInterestRate), -numberOfPayments));
         setMonthlyPayment(monthlyPayment)
    }
  };

  const handleInterestRateChange = (e) => {
    let rate = e.target.value;
    if (rate === '' || (parseFloat(rate) >= 0 && parseFloat(rate) <= 100)) {
      setInterestRate(parseFloat(rate));
    }
  };

  return (
    <>
      <h1 className='text-3xl text-center mt-16 text-customRed'>Vehicle Loan Calcuator</h1>

      <div className='flex gap-x-10 flex-wrap max-w-7xl justify-center mx-auto mt-20'>
        <div className=''>
          <div className='my-6 flex flex-wrap'>
            <label htmlFor="loanAmount" className='w-72 inline-block text-xl '>Vehicle Loan Amount</label>
            <input 
              placeholder='0' 
              type="number" 
              name="loanAmount" 
              value={loanAmount} 
              onChange={(e) => setLoanAmount(Number(e.target.value))} 
              className='input dollar h-11 border text-right border-gray-400 text-customRed hover:border-customRed ' />
          </div>
          <hr className=' border-gray-400' />

          {/* Down Payment  */}
          <div className='my-6'>
            <label htmlFor="downPayment" className='w-72 inline-block text-xl '>Down Payment</label>
            <input
              placeholder='0'
              type="number" 
              name="downPayment" 
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))} 
              className='input h-11 border text-right border-gray-400 text-customRed dollar' />
          </div>
          <hr className='border-gray-400'/>

          {/* Interest Rate  */}
          <div className='my-6'>
            <label htmlFor="interestRate" className='w-72 inline-block text-xl'>Interest rate</label>
            <input 
              placeholder='0.00'
              type="number" 
              name="interestRate" 
              value={interestRate}
              onChange={handleInterestRateChange}
              className='input h-11 border text-right border-gray-400 text-customRed percentage' />
          </div>
          <hr className='border-gray-400'/>

          {/* Months  */}
          <div className='my-6'>
            <label htmlFor="payoffMonths" className='w-72 inline-block text-xl'>Pay it off in...</label>
            <input 
              type="number" 
              name="payoffMonths" 
              value={payoffMonths}
              onChange={(e) => setPayoffMonths(Number(e.target.value))} 
              className='input h-11 w-24 text-right border border-gray-400 text-customRed' />
            <label htmlFor="" className='ml-6'>Months</label>
          </div>

          <input 
          type="range"
          min="6" 
          max='84' 
          value={payoffMonths}
          onChange={(e) => setPayoffMonths(Number(e.target.value))} 
          className='range-input' />
        </div>

        <div className='w-px h-74 bg-gray-400'></div>

        <div>
          <p className='mx-20 mt-24 max-w-sm text-center '>Based on what you entered, your vehicle loan monthly payment is</p>
          <p className='text-center text-5xl mt-6 text-customRed'>${monthlyPayment.toFixed(2)}</p>
        </div>

      </div>

    </>
  )
}

export default App
