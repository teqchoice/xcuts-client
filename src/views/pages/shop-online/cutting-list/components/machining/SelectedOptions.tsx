import React from 'react'
import { Button } from '@mantine/core'
import { IoCloseOutline } from 'react-icons/io5'
import { useCurrentMachiningOptionStore, useMachiningOptionsStore } from '../store/machiningOptionsStore'

const SelectedOptions = () => {
  const { machiningOptions, removeMachiningOption } = useMachiningOptionsStore()

  const { setCurrentMachiningOption } = useCurrentMachiningOptionStore()

  const options = machiningOptions?.map((option, index) => {
    if (option.type === 'angled-cut') {
      return (
        <div className='grid grid-cols-9 gap-x-2'>
          <div
            key={option.id}
            className={`col-span-8 px-3 py-1 cursor-pointer border border-primary ${
              option.selected ? 'bg-primary text-white' : 'text-primary bg-transparent'
            }`}
            onClick={() => setCurrentMachiningOption(option.id)}
          >
            Angled cut on {option.options.angleOn}
          </div>
          <IoCloseOutline
            color='red'
            className='col-span-1 border border-primary w-full h-full cursor-pointer'
            onClick={() => removeMachiningOption(option.id)}
          />
        </div>
      )
    }
  })

  return <div className='flex flex-col gap-y-1'>{options}</div>
}

export default SelectedOptions
