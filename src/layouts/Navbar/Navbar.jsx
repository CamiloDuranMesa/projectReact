import React from 'react'

import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar'

export const Navbar = () => {
  return (
    <nav>
      <ul className=' flex gap-2.5'>
        <ItemNavbar content='Clase 1'></ItemNavbar>
        <ItemNavbar content='Clase 2'></ItemNavbar>
        <ItemNavbar content='Clase 3'></ItemNavbar>
      </ul>
  </nav>
  )
}

