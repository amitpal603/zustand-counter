import React from 'react'
import { useCounterStore } from '../Stores/counterStore'

function Counter() {
       const  {count,increment,decrement,reset} = useCounterStore()
  return (
    <div className='flex justify-center items-center h-screen bg-amber-200'>
      <div className='border-t-4 border-black rounded-md'>
        <div className='h-30 w-80 bg-white shadow-lg flex-col gap-3 flex'>
            <h1 className='p-4 text-2xl font-bold font-sans'>Count : <span>{count}</span></h1>
            <div className='flex justify-center items-center gap-4'>
                <button 
                onClick={increment}
                className='px-3 py-2 bg-green-500 rounded-md hover:cursor-pointer font-bold hover:scale-95'>Increment</button>
                <button 
                onClick={decrement}
                className='px-3 py-2 bg-red-500 rounded-md hover:cursor-pointer font-bold hover:scale-95'> Decrement </button>
                <button 
                onClick={reset}
                className='px-3 py-2 bg-yellow-500 rounded-md hover:cursor-pointer font-bold hover:scale-95'>Reset</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
