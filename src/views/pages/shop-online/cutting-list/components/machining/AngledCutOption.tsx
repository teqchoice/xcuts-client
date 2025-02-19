import React, { useEffect, useState } from 'react'
import { Group, Input, Radio } from '@mantine/core'
import useCuttingListStore from '../store/cuttingListStore'
import { useMachiningStore } from '../store/machiningOptionsStore'
import { useVirtualFromStore } from '../store/useVirtualFromStore'

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

  const { currentDecor, updateDecor } = useCuttingListStore()

  const { setVirtualFrom, virtualFrom } = useVirtualFromStore()

  const isAngledCut = currentMachiningOption?.type === 'angled-cut'

  const [selectedDirection, setSelectedDirection] = useState<string>(
    isAngledCut ? currentMachiningOption?.options.angleOn : 'L1-W1'
  )

  const oppositeSides = getOppositeSides(selectedDirection as 'L1-W1' | 'L1-W2' | 'L2-W1' | 'L2-W2')

  const handleChangeDirection = (direction: 'L1-W1' | 'L1-W2' | 'L2-W1' | 'L2-W2') => {
    setSelectedDirection(direction)

    if (currentMachiningOption?.type === 'angled-cut') {
      updateCurrentMachiningOption({
        ...currentMachiningOption,
        options: { ...currentMachiningOption.options, angleOn: direction }
      })
    }
  }

  const isDirectionDisabled = (direction: 'L1-W1' | 'L1-W2' | 'L2-W1' | 'L2-W2') => {
    return machiningOptions?.some(
      option =>
        option.type === 'angled-cut' && option.options.angleOn === direction && option !== currentMachiningOption
    )
  }

  useEffect(() => {
    if (isAngledCut) {
      setSelectedDirection(currentMachiningOption.options.angleOn)
    }
  }, [currentMachiningOption?.id])

  if (currentMachiningOption?.type === 'angled-cut') {
    return (
      <div className='flex flex-col gap-y-5'>
        <div className='flex justify-between items-start gap-x-4'>
          <span className='text-sm whitespace-nowrap'>Angle cut on:</span>
          <Radio.Group
            onChange={value => handleChangeDirection(value as 'L1-W1' | 'L1-W2' | 'L2-W1' | 'L2-W2')}
            value={selectedDirection}
          >
            <Group>
              <Radio
                variant='outline'
                value='L1-W1'
                label='L1-W1'
                styles={radioButtonStyle}
                disabled={isDirectionDisabled('L1-W1')}
              />
              <Radio
                variant='outline'
                value='L1-W2'
                label='L1-W2'
                styles={radioButtonStyle}
                disabled={isDirectionDisabled('L1-W2')}
              />
              <Radio
                variant='outline'
                value='L2-W1'
                label='L2-W1'
                styles={radioButtonStyle}
                disabled={isDirectionDisabled('L2-W1')}
              />
              <Radio
                variant='outline'
                value='L2-W2'
                label='L2-W2'
                styles={radioButtonStyle}
                disabled={isDirectionDisabled('L2-W2')}
              />
            </Group>
          </Radio.Group>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-x-5'>
            <span className='text-sm'>From {oppositeSides.horizontal}</span>
            <Input
              w={80}
              styles={{
                input: {
                  borderRadius: '0px',
                  textAlign: 'center'
                }
              }}
              value={virtualFrom?.x ? (currentDecor?.inputLength ?? 0) - virtualFrom.x : undefined}
              onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === 'Enter') {
                  updateCurrentMachiningOption({
                    ...currentMachiningOption,
                    options: {
                      ...currentMachiningOption.options,
                      from: {
                        ...currentMachiningOption.options.from,
                        x: (currentDecor?.inputLength ?? 0) - +event.currentTarget.value
                      }
                    }
                  })
                }
              }}
              onChange={event =>
                setVirtualFrom({ ...virtualFrom, x: (currentDecor?.inputWidth ?? 0) - +event.target.value })
              }
              onBlur={event => {
                updateCurrentMachiningOption({
                  ...currentMachiningOption,
                  options: {
                    ...currentMachiningOption.options,
                    from: {
                      ...currentMachiningOption.options.from,
                      x: (currentDecor?.inputLength ?? 0) - +event.currentTarget.value
                    }
                  }
                })
              }}
            />
          </div>
          <div className='flex items-center gap-x-5'>
            <span className='text-sm'>From {oppositeSides.vertical}</span>
            <Input
              w={80}
              styles={{
                input: {
                  borderRadius: '0px',
                  textAlign: 'center'
                }
              }}
              value={virtualFrom?.y ? (currentDecor?.inputLength ?? 0) - virtualFrom.y : undefined}
              defaultValue={(currentDecor?.inputWidth ?? 0) - currentMachiningOption.options.from.y}
              onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === 'Enter') {
                  updateCurrentMachiningOption({
                    ...currentMachiningOption,
                    options: {
                      ...currentMachiningOption.options,
                      from: {
                        ...currentMachiningOption.options.from,
                        y: (currentDecor?.inputWidth ?? 0) - +event.currentTarget.value
                      }
                    }
                  })
                }
              }}
              onChange={event =>
                setVirtualFrom({ ...virtualFrom, y: (currentDecor?.inputWidth ?? 0) - +event.target.value })
              }
              onBlur={event => {
                updateCurrentMachiningOption({
                  ...currentMachiningOption,
                  options: {
                    ...currentMachiningOption.options,
                    from: {
                      ...currentMachiningOption.options.from,
                      y: (currentDecor?.inputWidth ?? 0) - +event.currentTarget.value
                    }
                  }
                })
              }}
            />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-sm'>View</span>
          <div className='flex'>
            {sides?.map(side => (
              <div
                className={`flex flex-col cursor-pointer pb-1 px-7 items-center border border-primary transition duration-200 ${
                  currentMachiningOption.view === side.value
                    ? ' bg-primary text-white hover:bg-primary-600'
                    : 'bg-white text-primary hover:bg-primary-100'
                }`}
                key={side.value}
                onClick={() => {
                  updateCurrentMachiningOption({
                    ...currentMachiningOption,
                    view: side.value
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
