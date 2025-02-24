import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Itemtitle } from '../../components/Itemtitle/Itemtitle'


export const Header = () => {
  return (
    <header className='flex w-[100vw] h-[5rem] bg-blue-950 items-center place-content-between p-[1rem] text-xl'>
        
       <Itemtitle content='Introducción React 2025'/>
        <Navbar />
    </header>
  )
}
