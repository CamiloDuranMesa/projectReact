import React from 'react'
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar'

export const Footer = () => {
  return (
    <footer className='flex w-[100vw] h-[7vh] bg-blue-950 justify-center items-center'>
        <ul className=' flex gap-2.5'>
            <ItemNavbar content='Clase 1'/>
            <ItemNavbar content='Clase 2'/>
            <ItemNavbar content='Clase 3'/>
        </ul>
    </footer>
  )
}
