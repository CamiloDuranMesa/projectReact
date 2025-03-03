import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Itemtitle } from '../../components/Itemtitle/Itemtitle'
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar'


export const Header = () => {
  return (
    <header className='flex w-[100vw] h-[5rem] bg-blue-950 items-center place-content-between p-[1rem] text-xl'>
        
       <Itemtitle content='Introducción React 2025'/>
        <Navbar>
          <ul className='flex align-center space-x-2'>
            <ItemNavbar route="/" content="Home"/>
            <ItemNavbar route="/class1" content="Clase 1"/>
            <ItemNavbar route="/class2" content="Clase 2"/>
            <ItemNavbar route="/class3" content="Clase 3"/>
          </ul>
        </Navbar>
    </header>
  )
}
