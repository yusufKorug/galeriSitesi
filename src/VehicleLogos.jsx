import React from 'react'

function VehicleLogos() {
  return (
    <div >
        <div className=' flex items-center  justify-center w-full h-5 mt-24'>
        <h1 className='text-4xl text-transparent bg-gradient-to-r bg-clip-text from-gray-600 to-gray-400 font-bold' >ÇALIŞTIĞIMIZ MARKALAR </h1>
        </div>

      <div className='flex mt-12 -space-x-36' >
         <div className=' w-1/2 ml-72'>
            <img className='' src="/images/markalar2.jpg" alt="" />
         </div>

         <div className='w-1/2'>
            <img className='' src="/images/markalar3.jpg" alt="" />
         </div>
      </div>
    </div>
  )
}

export default VehicleLogos