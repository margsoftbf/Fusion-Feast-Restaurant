import React from 'react'
import PersonalInfo from './PersonalInfo'
import Cardinfo from './Cardinfo'
import ButtonFull from '@/components/common/ButtonFull'

const YourInfo = () => {
  return (
    <form className='bg-third text-white rounded-md py-4 my-2 px-4'>
    <div className='space-y-12'>
        <PersonalInfo />
        <Cardinfo />
    </div>
    <div className='mt-6 flex items-center justify-end gap-x-6'>
        <ButtonFull type='submit'>Save info</ButtonFull>
    </div>
</form>
  )
}

export default YourInfo