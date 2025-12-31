import React from 'react'
import { BadgeCent, MoveRight } from 'lucide-react'

const RightCardContents = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
      <h2 className='bg-white text-2xl font-semibold rounded-full h-8 w-8 flex justify-center items-center'>
       {props.id+1}
      </h2>

      <div>
        <p className='text-shadow-2xl text-xl text-white mb-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <div className='flex justify-between'>
          <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>
            {props.tag}
          </button>

          <button style={{backgroundColor:props.color}} className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'>
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContents
