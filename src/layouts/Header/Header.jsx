import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'

export const Header = () => {
  return (
    <header className='font-serif grid h-48 grid-cols-2 place-content-between gap-4'>
        <h1 className='text-sky-300'>Introducción a React 2025</h1>
        <Navbar />
    </header>
  )
}
