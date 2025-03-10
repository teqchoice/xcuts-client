import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useMachiningStore } from '../../store/machiningOptionsStore'
import useAngledCutInputValidationStore from '../../store/angledCutInputValidationStore'
import { Button, Popover, Tooltip } from '@mantine/core'

const SelectedOptions = () => {
  const [removeStatus, setRemoveStatus] = useState(false)

  const [removeItem, setRemoveItem] = useState<string | null>(null)

  const { machiningOptions, removeMachiningOption, setCurrentMachiningOption, currentMachiningOption } =
    useMachiningStore()

  const { setXInputError, setYInputError } = useAngledCutInputValidationStore()

  const options = machiningOptions?.map((option, index) => {
    if (option.type === 'angled-cut') {
      return (
        <div className='grid grid-cols-9 gap-x-2'>
          <div
            key={option.id}
            className={`col-span-8 px-3 py-1 cursor-pointer border border-primary ${
              option.selected ? 'bg-primary text-white' : 'text-primary bg-transparent'
            }`}
            onClick={() => {
              setCurrentMachiningOption(option.id)
              setXInputError({ max: false, min: false })
              setYInputError({ max: false, min: false })
              setRemoveStatus(false)
            }}
          >
            Angled cut on {option.options.angleOn}
          </div>
          <Popover
            width={200}
            position={'bottom'}
            withArrow
            offset={{
              mainAxis: 7,
              crossAxis: -80
            }}
            arrowOffset={0}
            arrowSize={10}
            transitionProps={{ transition: 'pop', duration: 300 }}
            classNames={{
              dropdown:
                '!text-[12px] !text-center !shadow-lg !border !border-primary !bg-white !text-gray-700 !py-3 !px-4 !rounded-none',
              arrow: '!bg-white !border !border-primary !border-solid'
            }}
            opened={removeStatus && removeItem === option.id}
          >
            <Popover.Target>
              <div
                onClick={event => {
                  event.stopPropagation()
                  setRemoveStatus(true)
                  setRemoveItem(option.id)
                }}
              >
                <IoCloseOutline
                  color='red'
                  className='col-span-1 border border-primary hover:bg-red-200 w-full h-full cursor-pointer transition-all duration-200'
                />
              </div>
            </Popover.Target>
            <Popover.Dropdown>
              <div className='flex flex-col gap-y-2 text-base'>
                Delete Option?
                <div className='flex gap-x-2 items-center justify-between'>
                  <Button
                    color='red'
                    variant='outline'
                    className='!rounded-none !font-normal'
                    onClick={() => {
                      setRemoveStatus(false)
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    color='blue'
                    variant='outline'
                    className='!rounded-none !font-normal'
                    onClick={() => {
                      removeMachiningOption(option.id)
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      )
    }
  })

  return <div className='flex flex-col gap-y-1'>{options}</div>
}

export default SelectedOptions
