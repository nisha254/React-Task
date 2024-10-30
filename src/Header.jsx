import React from 'react'
import logo from './assets/Logo.png'

function Header() {
  return (
    <div className='flex px-4 justify-between mx-2 py-4'>
      <img src={logo} className='w-28 ' alt="" />
      <div className='flex gap-10 items-center'>
        <h4 className='md:flex hidden'>Find Suppliers</h4>
        <div className='flex items-center gap-2 md:flex hidden'>
        <h4 >Find Service Tag</h4>
        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/></svg>
        </div>
        <button className="px-6 py-2 border bg-white rounded-md border-green border text-green ">
            Login/Sign Up
          </button>

      </div>
    </div>
  )
}

export default Header
