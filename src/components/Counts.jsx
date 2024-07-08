import React from 'react'
import countSlice, { addcount , subcount , resetcount } from '../features/count/countSlice'
import {useDispatch, useSelector } from 'react-redux'

function Counts() {
    const val = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return<>
    <div>
    <h1 className=' text-white text-9xl pt-2.5 text-center'>{val}</h1>
    <div className='flex flex-col sm:flex-row justify-center text-center'>
    <button onClick={() => dispatch(addcount())} className='sm:inline bg-green-600 rounded-md sm:pt-2 text-white px-6 py-2 mr-3 ml-10 '>Add</button>
    <button onClick={() => dispatch(subcount())} className='inline bg-red-600 rounded-md sm:pt-2 text-white px-6 py-2 mx-3' >Subtract</button>
    <button onClick={() => dispatch(resetcount())} className='inline bg-gray-600 rounded-md sm:pt-2 text-white px-6 py-2 mx-3'>Reset</button>
    </div>
    </div>
    </>
    
  
}
export default Counts