import React from 'react'
import { TrainingCover } from '../components/trainingCover'

export const Training = () => {
  return (
    <div id='treinamentos' className='flex flex-col w-full items-center justify-center gap-8 my-12 lg:my-20 px-8 lg:px-20 2xl:px-40'>
      <div className='flex flex-col p-0 lg:p-20 w-full lg:w-[90%] rounded-[40px] lg:rounded-[92px] min-h-[70vh] items-center justify-center'>
        <span className='gradient-text uppercase text-xl text-center font-grotesk tracking-[3px] mb-12 lg:mb-20'>
          Treinamentos
          <div className='w-[100%] mt-2 min-h-[2px] bg-gradient-to-r from-purple-medium to-purple-dark' />
        </span>
        <TrainingCover />
      </div>
    </div>
  )
}
