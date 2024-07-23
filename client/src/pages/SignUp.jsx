import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className="flex-1">
          {/* {leftside} */}
          <Link to="/" className='   font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg'>AK's</span>
            Blog
        </Link>
        <p className='text-sm mt-5'>
         This is a Blog. You can sign-up with your google account or with your email and password   : )
        </p>
        </div>
        <div className="flex-1">
            {/* {rightside} */}

            <form className='flex flex-col gap-4'>
              <div className="">
                <Label value=' Your username'/>
                <TextInput type='text' placeholder='username' id='username'/>
              </div>
              <div className="">
                <Label value=' Your email'/>
                <TextInput type='text' placeholder='name@companymail.com' id='email'/>
              </div>
              <div className="">
                <Label value=' Your password'/>
                <TextInput type='text' placeholder='password' id='password'/>
              </div>
              <Button gradientDuoTone="purpleToPink" type='submit'> sign up</Button>
            </form>

            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to="/sign-in" className='text-blue-700'>sign in</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp