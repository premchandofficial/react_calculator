import React, { useState } from 'react'

function App() {
  const [value,setValue]=useState('')
  return (
    
      <>
                 <div className='w-full h-screen bg-[#196d77] '>
                                 <div className='flex justify-center py-6 text-4xl text-white'>
                                    <h1>React Calculatar</h1>
                                 </div>
                      
                       <div className='m-auto w-[370px] h-[465px] bg-black'>
              
                          
               
                  <form className=''>
                      <input type="text" value={value} className='w-[370px] bg-gray-800 text-white text-4xl p-4 border-none'/><br />

                      <input type="button" value='1' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      <input type="button" value='2' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      <input type="button" value='3' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      <input type="button" value='4' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      <br />
                      <input type="button" value='5' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      <input type="button" value='6' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      <input type="button" value='7' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      <input type="button" value='8' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                        <br />
                      <input type="button" value='9' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      <input type="button" value='0' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      <input type="button" value='/' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      <input type="button" value='*' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                        <br />
                      <input type="button" value='-' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      <input type="button" value='+' onClick={(e)=>setValue(value+e.target.value)} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2' />
                      
                     
                      <input type="button" value='=' onClick={e=>setValue(eval(value))} className='text-5xl border-spacing-2 rounded border-slate-400 bg-blue-500 px-6 py-2 m-2 w-[166px]' />
                      
                      <input type="button" value='Clear All' onClick={(e)=>setValue('')} className='text-4xl border-spacing-2 rounded border-slate-400 bg-pink-700 px-6 py-2 m-2 w-[343px]' />

                     

                  </form>

           </div>



                 </div>

      
      </>
  )
}

export default App