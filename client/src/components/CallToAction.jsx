import { Button } from 'flowbite-react'
import React from 'react'

const CallToAction = () => {
  return (
    <div className=" flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center gap-5">
        <div className="flex-1  justify-center flex flex-col ">
            <h2 className='text-2xl'> Want to learn more about JavaScript</h2>
            <p className='text-gray-500 my-2'>Checkout these resources with 100 JavaScript projects</p>
            <Button gradientDuoTone={"purpleToPink"} className='rounded-tl-xl rounded-bl-none'>Learn More</Button>
        </div>
        <div className="flex-1 ">
            <img src="https://wpengine.com/wp-content/uploads/2021/07/jsheader-1024x535.png" alt="" />
        </div>
    </div>
  )
}

export default CallToAction