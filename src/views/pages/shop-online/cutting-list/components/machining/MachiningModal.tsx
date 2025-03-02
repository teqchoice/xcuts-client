import { useState, useEffect, useRef } from 'react'
import { Button, Modal, Select } from '@mantine/core'
import Canvas from './Canvas'
import { IoMdClose } from 'react-icons/io'
import MachiningOptions from './MachiningOptions'
import useCuttingListStore from '../../store/cuttingListStore'
import { useMachiningStore } from '../../store/machiningOptionsStore'

type MachiningModalProps = {
  disabled: boolean
  onMachiningClick: () => void
  setSelectedRow: (row: any) => void
  selectedRow: string
  currentDecorInList: string
}

const MachiningModal = (props: MachiningModalProps) => {
  const { disabled, onMachiningClick, setSelectedRow, selectedRow, currentDecorInList } = props

  const { machiningOptions, isMachiningModalOpen: isOpen, setIsMachiningModalOpen: setIsOpen } = useMachiningStore()

  const { currentDecor, updateDecor } = useCuttingListStore()

  const handleCloseModal = () => {
    setIsOpen(false)
    setSelectedRow(null)
    updateDecor(currentDecor?.id ?? '0', { ...currentDecor, machiningOptions })
  }

  return (
    <div className=''>
      <Button
        className='!w-full border border-primary text-primary py-1 hover:bg-primary-100 !rounded-none !font-normal'
        onClick={() => {
          onMachiningClick()
        }}
        disabled={disabled}
      >
        Machining
      </Button>

      <div
        className={`absolute left-[-834px] top-[44px] transition-transform duration-300 ease-out ${
          isOpen
            ? 'scale-100 opacity-100 translate-y-0 h-auto'
            : 'scale-50 opacity-0 translate-y-[200px] h-[0px] overflow-hidden'
        } `}
      >
        {selectedRow === currentDecorInList && (
          <div
            className={`border border-primary shadow-xl bg-white z-[100]`}
            style={{ width: '1282px', height: isOpen ? '702px' : '0px' }}
          >
            <>
              <div className='absolute right-0 z-50 bg-primary-100 border border-primary border-b-0 w-[450px] h-[45px] top-[-44px] flex items-center px-3 justify-between'>
                <span className='text-primary text-sm'>Machining details</span>
                <IoMdClose onClick={handleCloseModal} className='cursor-pointer text-gray-600 z-10' size={24} />
              </div>
              <div className='flex flex-nowrap'>
                <div className='min-w-[400px] w-[400px] bg-[#F5F5F5] p-4'>
                  <MachiningOptions />
                </div>
                <div className='min-w-[880px] w-[880px] bg-primary-100 relative'>
                  <Canvas />
                </div>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  )
}

export default MachiningModal
