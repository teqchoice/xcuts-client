import React, { useState } from 'react'
import { useMachiningStore } from '../store/machiningOptionsStore'
import { Group, Input, Radio } from '@mantine/core'

type AngledCutOptionProps = {}

const radioButtonStyle = {
  body: {
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    rowGap: '2px'
  },
  inner: {
    order: 2
  },
  labelWrapper: {
    order: 1
  },
  label: {
    paddingInlineStart: '0px'
  }
}

const sides = [
  {
    title: 'A side',
    description: 'Front face',
    value: 'front' as 'front'
  },
  {
    title: 'B side',
    description: 'Back face',
    value: 'back' as 'back'
  }
]

const getOppositeSides = (angleOn: 'L1-W1' | 'L1-W2' | 'L2-W1' | 'L2-W2') => {
  const oppositeMap: Record<typeof angleOn, { vertical: string; horizontal: string }> = {
    'L1-W1': { vertical: 'L2', horizontal: 'W2' },
    'L1-W2': { vertical: 'L2', horizontal: 'W1' },
    'L2-W1': { vertical: 'L1', horizontal: 'W2' },
    'L2-W2': { vertical: 'L1', horizontal: 'W1' }
  }
  return oppositeMap[angleOn]
}

const AngledCutOption = (props: AngledCutOptionProps) => {
  const {} = props

  const { currentMachiningOption, updateCurrentMachiningOption, machiningOptions } = useMachiningStore()

  const isAngledCut = currentMachiningOption?.type === 'angled-cut'

  const [selectedDirection, setSelectedDirection] = useState<string>(
    isAngledCut ? currentMachiningOption?.options.angleOn : 'L1-W1'
  )

  const oppositeSides = getOppositeSides(selectedDirection as 'L1-W1' | 'L1-W2' | 'L2-W1' | 'L2-W2')

  if (currentMachiningOption?.type === 'angled-cut') {
    return (
      <div className='flex flex-col gap-y-5'>
        <div className='flex justify-between items-start gap-x-4'>
          <span className='text-sm whitespace-nowrap'>Angle cut on:</span>
          <Radio.Group
            name='favoriteFramework'
            onChange={value => setSelectedDirection(value)}
            value={selectedDirection}
          >
            <Group>
              <Radio variant='outline' value='L1-W1' label='L1-W1' styles={radioButtonStyle} />
              <Radio variant='outline' value='L1-W2' label='L1-W2' styles={radioButtonStyle} />
              <Radio variant='outline' value='L2-W1' label='L2-W1' styles={radioButtonStyle} />
              <Radio variant='outline' value='L2-W2' label='L2-W2' styles={radioButtonStyle} />
            </Group>
          </Radio.Group>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-x-5'>
            <span className='text-sm'>From {oppositeSides.horizontal}</span>
            <Input w={80} />
          </div>
          <div className='flex items-center gap-x-5'>
            <span className='text-sm'>From {oppositeSides.horizontal}</span>
            <Input w={80} />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-sm'>View</span>
          <div className='flex'>
            {sides?.map(side => (
              <div
                className={`flex flex-col cursor-pointer pb-1 px-7 items-center border border-primary transition duration-200 ${
                  currentMachiningOption.options.view === side.value
                    ? ' bg-primary text-white hover:bg-primary-600'
                    : 'bg-white text-primary hover:bg-primary-100'
                }`}
                key={side.value}
                onClick={() => {
                  updateCurrentMachiningOption({
                    ...currentMachiningOption,
                    options: { ...currentMachiningOption.options, view: side.value }
                  })
                }}
              >
                <span className='text-[20px]'>{side.title}</span>
                <span className='text-[12px]'>{side.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default AngledCutOption
