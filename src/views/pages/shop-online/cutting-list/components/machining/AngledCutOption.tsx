import React, { useEffect, useState } from 'react'
import { Group, Input, Radio, Tooltip } from '@mantine/core'
import useCuttingListStore from '../../store/cuttingListStore'
import { useMachiningStore } from '../../store/machiningOptionsStore'
import { useVirtualFromStore } from '../../store/useVirtualFromStore'
import { useAngleCutMachiningOptions } from '../../hooks/useAngleCutMachiningOptions'
import useInputErrorStore from '../../store/angledCutInputValidationStore'
import useAngledCutInputValidationStore from '../../store/angledCutInputValidationStore'

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

  const { isL1W1, isL1W2, isL2W1, isL2W2, L1W1AngleCut, L1W2AngleCut, L2W1AngleCut, L2W2AngleCut } =
    useAngleCutMachiningOptions()

  const { xInputError, yInputError, setXInputError, setYInputError } = useAngledCutInputValidationStore()

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

  const xTooltipMin = isL1W1
    ? L1W2AngleCut?.options.from.x
    : isL1W2
    ? L1W1AngleCut?.options?.from?.x
    : isL2W1
    ? L2W2AngleCut?.options?.from?.x
    : isL2W2
    ? L2W1AngleCut?.options?.from?.x
    : 0

  const xTooltipMax = (currentDecor?.inputLength ?? 0) - 1

  const yTooltipMin = isL1W1
    ? L2W1AngleCut?.options.from.y
    : isL2W1
    ? L1W1AngleCut?.options?.from?.y
    : isL1W2
    ? L2W2AngleCut?.options?.from?.y
    : isL2W2
    ? L1W2AngleCut?.options?.from?.y
    : 0

  const yTooltipMax = (currentDecor?.inputWidth ?? 0) - 1

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
            <Tooltip
              label={xInputError.min ? `Min ${xTooltipMin}mm` : xInputError.max ? `Max ${xTooltipMax}mm` : ''}
              // disabled={!decor?.inputWidth || decor?.inputWidth! <= decor.width!}
              w={115}
              multiline
              position='top-start'
              withArrow
              offset={{
                alignmentAxis: -27,
                mainAxis: 5
              }}
              arrowOffset={50}
              arrowSize={10}
              transitionProps={{ transition: 'pop', duration: 300 }}
              classNames={{
                tooltip:
                  '!text-[12px] !text-center !border !border-red-300 !bg-red-100 !text-red-500 !py-1 !px-1 !rounded-none',
                arrow: '!bg-red-100'
              }}
              opened={xInputError.max || xInputError.min}
            >
              <Input
                w={80}
                styles={{
                  input: {
                    borderRadius: '0px',
                    textAlign: 'center'
                  }
                }}
                type='number'
                value={virtualFrom?.x ? (currentDecor?.inputLength ?? 0) - virtualFrom.x : undefined}
                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                  if (event.key === 'Enter') {
                    if (+event?.currentTarget?.value > xTooltipMax) {
                      setXInputError({ max: true, min: false })
                    } else if (+event?.currentTarget?.value < (xTooltipMin ?? 0)) {
                      setXInputError({ max: false, min: true })
                    } else {
                      setXInputError({ max: false, min: false })
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
                  }
                }}
                onChange={event =>
                  setVirtualFrom({ ...virtualFrom, x: (currentDecor?.inputLength ?? 0) - +event.target.value })
                }
                onBlur={event => {
                  if (+event?.currentTarget?.value > xTooltipMax) {
                    setXInputError({ max: true, min: false })
                  } else if (+event?.currentTarget?.value < (xTooltipMin ?? 0)) {
                    setXInputError({ max: false, min: true })
                  } else {
                    setXInputError({ max: false, min: false })
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
              />
            </Tooltip>
          </div>
          <div className='flex items-center gap-x-5'>
            <span className='text-sm'>From {oppositeSides.vertical}</span>
            <Tooltip
              label={yInputError.min ? `Min ${yTooltipMin}mm` : yInputError.max ? `Max ${yTooltipMax}mm` : ''}
              // disabled={!decor?.inputWidth || decor?.inputWidth! <= decor.width!}
              w={115}
              multiline
              position='top-start'
              withArrow
              offset={{
                alignmentAxis: -27,
                mainAxis: 5
              }}
              arrowOffset={50}
              arrowSize={10}
              transitionProps={{ transition: 'pop', duration: 300 }}
              classNames={{
                tooltip:
                  '!text-[12px] !text-center !border !border-red-300 !bg-red-100 !text-red-500 !py-1 !px-1 !rounded-none',
                arrow: '!bg-red-100'
              }}
              opened={yInputError.max || yInputError.min}
            >
              <Input
                w={80}
                styles={{
                  input: {
                    borderRadius: '0px',
                    textAlign: 'center'
                  }
                }}
                type='number'
                value={virtualFrom?.y ? (currentDecor?.inputWidth ?? 0) - virtualFrom.y : undefined}
                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                  if (event.key === 'Enter') {
                    if (+event?.currentTarget?.value > yTooltipMax) {
                      setYInputError({ max: true, min: false })
                    } else if (+event?.currentTarget?.value < (yTooltipMin ?? 0)) {
                      setYInputError({ max: false, min: true })
                    } else {
                      setYInputError({ max: false, min: false })
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
                  }
                }}
                onChange={event =>
                  setVirtualFrom({ ...virtualFrom, y: (currentDecor?.inputWidth ?? 0) - +event.target.value })
                }
                onBlur={event => {
                  if (+event?.currentTarget?.value > yTooltipMax) {
                    setYInputError({ max: true, min: false })
                  } else if (+event?.currentTarget?.value < (yTooltipMin ?? 0)) {
                    setYInputError({ max: false, min: true })
                  } else {
                    setYInputError({ max: false, min: false })
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
              />
            </Tooltip>
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
