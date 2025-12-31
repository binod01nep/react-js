import React from 'react'
import { MoveRight } from 'lucide-react'
import RightCardContents from './RightCardContents'
const RightCard = (props) => {
  return (

    <div className='h-full  shrink-0 w-60 rounded-4xl relative overflow-hidden'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContents color={props.color}id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard