import { Button, Select, Tooltip } from '@mantine/core'
import React, { useState } from 'react'
import SelectedOptions from './SelectedOptions'
import { uid } from 'radash'
import ActiveOption from './ActiveOption'
import Image from 'next/image'
import { useMachiningStore } from '../store/machiningOptionsStore'
import { useVirtualFromStore } from '../store/useVirtualFromStore'

const MachiningOptions = () => {
  const [selectedMachiningOption, setSelectedMachiningOption] = useState<string | null>(null)

  const { setCurrentMachiningOption, currentMachiningOption, addMachiningOption, machiningOptions } =
    useMachiningStore()

  const { setVirtualFrom, virtualFrom } = useVirtualFromStore()

  const noMoreAnglesForAngleCutting = machiningOptions?.filter(item => item.type === 'angled-cut').length === 4

  const handleAddMachiningOption = () => {
    if (selectedMachiningOption === 'angled-cut' && addMachiningOption) {
      const id = uid(10)

      addMachiningOption({
        id,
        type: selectedMachiningOption,
        selected: true,
        options: {
          angleOn: 'L1-W1', // its a default value and in store it refers to next available angle
          from: { x: 100, y: 100 },
          edging: null
        },
        view: 'front'
      })
      setVirtualFrom({ x: 100, y: 100 })
      setCurrentMachiningOption(id)
      setSelectedMachiningOption(null)
    }
  }

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex flex-col gap-y-5'>
        <div className='grid grid-cols-5 gap-x-2 items-center'>
          <Select
            data={[
              {
                group: 'Panel shaping',
                items: [{ value: 'angled-cut', label: 'Angled cut', disabled: noMoreAnglesForAngleCutting }]
              },
              { group: 'Surface shaping', items: [{ value: 'groove', label: 'Groove' }] },
              {
                group: 'Shelf holes',
                items: [
                  { value: '5mm', label: '5mm Ø (8mm deep)' },
                  { value: '7.5mm', label: '7.5mm Ø (8mm deep)' }
                ]
              }
            ]}
            color='gray'
            placeholder='select machining option'
            className='col-span-4'
            value={selectedMachiningOption}
            onChange={value => setSelectedMachiningOption(value)}
            renderOption={item => {
              if (item.option.disabled) {
                return (
                  <Tooltip
                    label={'No more angle cuts are possible'}
                    w={120}
                    multiline
                    position='top-start'
                    withArrow
                    transitionProps={{ transition: 'pop', duration: 300 }}
                    classNames={{
                      tooltip: '!text-[10px] !text-center !px-1'
                    }}
                  >
                    <span className=''>{item.option.label}</span>
                  </Tooltip>
                )
              } else {
                return item.option.label
              }
            }}
          />
          {selectedMachiningOption && (
            <div className='col-span-1' onClick={handleAddMachiningOption}>
              <Button variant='outline'>Add</Button>
            </div>
          )}
        </div>
        <SelectedOptions />
        <ActiveOption />
      </div>
      {currentMachiningOption?.view === 'back' ? (
        <div className='bg-white w-full border flex justify-center'>
          <Image src={'/images/machining/face-help.gif'} alt='' width={154} height={198} />
        </div>
      ) : (
        <div className='bg-white w-full border flex justify-center'>
          <Image src={'/images/machining/face-front-help.gif'} alt='' width={154} height={198} />
        </div>
      )}
    </div>
  )
}

export default MachiningOptions
