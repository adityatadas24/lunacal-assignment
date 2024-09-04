import React from 'react'
import LeftWidgets from '../components/Main Widgets/LeftWidgets'
import RightWidgets from '../components/Main Widgets/RightWidgets'

const MainPage = () => {
  return (
    <div className='flex justify-center items-center h-screen w-9/12 ml-auto mr-auto'>
     
      <div className='w-full h-4/6 border border-rgba(150, 190, 231, 1)-500 mr-7 rounded-2xl'>
      <LeftWidgets/>

      </div>
      <div className='w-full h-4/6  ml-7'>
      <RightWidgets/>

      </div>
    </div>
  )
}

export default MainPage
