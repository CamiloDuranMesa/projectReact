import React from 'react'
import Image from '../../assets/images/Image.jfif'
import { Itemtitle } from '../../components/Itemtitle/Itemtitle'

export const Main = () => {
  return (
    <main className="h-[100vh] w-[100vw] bg-blue-900 flex justify-center items-center flex-col ">
        <Itemtitle content='Muy buenas a todos guapisimos' styles='text-blue-200 text-2xl pb-[2rem]' />
        <img src={Image} alt="" className='w-[700px] rounded-sm' />
        
    </main>
    
  )
}
