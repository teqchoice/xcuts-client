import React, { useState } from 'react'
import ProductSelectorDropdown from './ProductSelectorDropdown'
import MachiningModal from './machining/MachiningModal'
import { Select } from '@mantine/core'
import useCuttingListStore from './store/cuttingListStore'
import { components } from '@/core/api-shop/v1'

// Define the type for your data
type CuttingListData = {
  id: number
  material: { name: string } | null
  thick: string
  length: string
  width: string
  qty: string
  partDescription: string
  l1: string
  l2: string
  w1: string
  w2: string
  sprayCoating: string
  grainMatch: string
  actions: string
}

const CuttingList = () => {
  const { currentDecor, setCurrentDecor, addDecor, addedDecors, updateDecor } = useCuttingListStore()

  console.log(addedDecors)

  const [data, setData] = useState<CuttingListData[]>([
    {
      id: 0,
      material: null,
      thick: '10',
      length: '100',
      width: '50',
      qty: '5',
      partDescription: 'Part 1',
      l1: 'L1',
      l2: 'L2',
      w1: 'W1',
      w2: 'W2',
      sprayCoating: 'Coating 1',
      grainMatch: 'Match 1',
      actions: 'Actions 1'
    },
    {
      id: 1,
      material: null,
      thick: '20',
      length: '200',
      width: '60',
      qty: '10',
      partDescription: 'Part 2',
      l1: 'L1',
      l2: 'L2',
      w1: 'W1',
      w2: 'W2',
      sprayCoating: 'Coating 2',
      grainMatch: 'Match 2',
      actions: 'Actions 2'
    },
    {
      id: 2,
      material: null,
      thick: '30',
      length: '300',
      width: '70',
      qty: '15',
      partDescription: 'Part 3',
      l1: 'L1',
      l2: 'L2',
      w1: 'W1',
      w2: 'W2',
      sprayCoating: 'Coating 3',
      grainMatch: 'Match 3',
      actions: 'Actions 3'
    }
  ])

  const handleInputChange = (index: number, key: keyof CuttingListData, value: string) => {
    setData(prevData => prevData.map((item, i) => (i === index ? { ...item, [key]: value } : item)))
  }

  return (
    <div className='pt-5 pb-10'>
      <div className='w-full'>
        <div className='flex gap-x-3 px-2'>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '25px' }}>
            #
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '215px' }}>
            Material decor code / name
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '60px' }}>
            Thick [mm]
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '55px' }}>
            Length [mm]
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '55px' }}>
            Width [mm]
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '42px' }}>
            Qty
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '115px' }}>
            Part description
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '55px' }}>
            L1
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '55px' }}>
            L2
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '55px' }}>
            W1
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '55px' }}>
            W2
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '150px' }}>
            Additional Machining
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '150px' }}>
            Spray coating
          </div>
          <div className='text-left text-[#999999] text-[14px] font-normal align-top' style={{ width: '150px' }}>
            Grain match
          </div>
          <div className='text-right text-[#999999] text-[14px] font-normal align-top' style={{ width: '100px' }}>
            Actions
          </div>
        </div>
        {addedDecors.map((decor, index) => (
          <div key={decor.id} className='hover:bg-[#FFFADB] transition-all duration-200 flex items-center p-2 gap-x-3'>
            <div className='text-center' style={{ width: '25px' }}>
              {index + 1}
            </div>
            <div style={{ width: '215px' }} className='relative'>
              <ProductSelectorDropdown
                onSelect={selectedDecor => {
                  setCurrentDecor(decor.id)
                  updateDecor(decor.id, { ...selectedDecor, id: decor.id })
                }}
              >
                <input
                  type='text'
                  placeholder='Enter decor code or name'
                  className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
                  value={decor.product_name || ''}
                  // onChange={e => handleInputChange(index, 'material', e.target.value)}
                />
              </ProductSelectorDropdown>
            </div>
            <div style={{ width: '60px' }}>
              <Select
                data={
                  decor.thickness_ref?.length
                    ? decor.thickness_ref?.map(
                        thickness => (thickness as components['schemas']['ItemsThickness']).thickness?.toString() ?? ''
                      )
                    : []
                }
                withCheckIcon={false}
                styles={{
                  input: { borderRadius: '0px' },
                  option: {
                    justifyContent: 'center'
                  },
                  section: {
                    right: '-8px'
                  }
                }}
                // disabled={!decor.product_name}
                value={decor.inputThickness}
                onChange={value => updateDecor(decor.id, { ...decor, inputThickness: value ?? '' })}
                comboboxProps={{ shadow: 'lg' }}
                allowDeselect={false}
              />
            </div>
            <div style={{ width: '55px' }}>
              <input
                type='text'
                className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px] text-center'
                value={decor.inputLength}
                onChange={event => updateDecor(decor.id, { ...decor, inputLength: +event?.target.value })}
                // disabled={!decor.product_name}
              />
            </div>
            <div style={{ width: '55px' }}>
              <input
                type='text'
                className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px] text-center'
                value={decor.inputWidth}
                onChange={event => updateDecor(decor.id, { ...decor, inputWidth: +event?.target.value })}
                // disabled={!decor.product_name}
              />
            </div>
            <div style={{ width: '42px' }}>
              <input
                type='text'
                className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px] text-center'
                value={decor.inputQuantity}
                onChange={event => updateDecor(decor.id, { ...decor, inputQuantity: +event?.target.value })}
                // disabled={!decor.product_name}
              />
            </div>
            <div style={{ width: '115px' }}>
              <input
                type='text'
                className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
                value={decor.inputDescription}
                onChange={event => updateDecor(decor.id, { ...decor, inputDescription: event?.target.value })}
                // disabled={!decor.product_name}
              />
            </div>
            <div style={{ width: '55px' }}>
              <input
                type='text'
                className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
                // value={row.l1}
                onChange={e => handleInputChange(index, 'l1', e.target.value)}
                // disabled={!decor.product_name}
              />
            </div>
            <div style={{ width: '55px' }}>
              <input
                type='text'
                className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
                // value={row.l2}
                onChange={e => handleInputChange(index, 'l2', e.target.value)}
                // disabled={!decor.product_name}
              />
            </div>
            <div style={{ width: '55px' }}>
              <input
                type='text'
                className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
                // value={row.w1}
                onChange={e => handleInputChange(index, 'w1', e.target.value)}
                // disabled={!decor.product_name}
              />
            </div>
            <div style={{ width: '55px' }}>
              <input
                type='text'
                className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
                // value={row.w2}
                onChange={e => handleInputChange(index, 'w2', e.target.value)}
                // disabled={!decor.product_name}
              />
            </div>
            <div style={{ width: '150px' }} onClick={() => setCurrentDecor(decor.id)}>
              <MachiningModal />
            </div>
            <div style={{ width: '150px' }}>
              <input
                type='text'
                className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
                // value={row.sprayCoating}
                onChange={e => handleInputChange(index, 'sprayCoating', e.target.value)}
                // disabled={!decor.product_name}
              />
            </div>
            <div style={{ width: '150px' }}>
              <input
                type='text'
                className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
                // value={row.grainMatch}
                onChange={e => handleInputChange(index, 'grainMatch', e.target.value)}
                // disabled={!decor.product_name}
              />
            </div>
            <div style={{ width: '100px' }}>
              <div className='flex justify-end'>
                <button
                  className='bg-red-500 text-white px-2 py-1 rounded'
                  onClick={() => {
                    const newData = data.filter((_, i) => i !== index)
                    setData(newData)
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CuttingList
