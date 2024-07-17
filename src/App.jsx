import { useState } from 'react'
import bg from './assets/bg.png'
import validator from 'validator'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [isStrong, setIsStrong] = useState(false);
  
  const validate = (value) => { 
  
    if (validator.isStrongPassword(value, { 
        minLength: 8
    })) { 
        setMessage('Strong Password');
        setIsStrong(true);
    } else { 
        setMessage('Week Password');
        setIsStrong(false); 
    } 
} 

  return (
    <>
    <div className='flex items-center justify-center h-screen' style={{backgroundImage:`url(${bg})`}}>
      
<div className='w-screen flex items-center justify-center flex-col sm:w-7/12'>
<div className='p-5 font-bold text-xl text-blue-700 md:text-4xl'>Sign in to Your Account</div>
<form className="w-7/12 p-5">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring focus:border-blue-100" placeholder="Email" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring focus:border-blue-100" onChange={(e) => validate(e.target.value)} placeholder="Password" required />
  </div>
  <div className='mt-2 mb-2'>
    <span className={isStrong ? 'text-green-500' : 'text-red-500'}>{message === '' ? null : 
                    <span style={{ 
                        fontWeight: 'bold',  
                    }}>{message}</span>}</span>
    </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
    </div>
    </>
  )
}

export default App
