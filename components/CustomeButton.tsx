'use client'
import {CustomeButtonProps} from '@/types'
import Image from 'next/image'

const CustomeButton = ({ title, containerStyles,
    handleClick }: 
    CustomeButtonProps) => {
    
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>title</span>
    </button>
  )
}

export default CustomeButton
