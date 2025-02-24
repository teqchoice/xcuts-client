import { useState } from 'react'
import { Modal, Select } from '@mantine/core'
import Canvas from './Canvas'
import { IoMdClose } from 'react-icons/io'
import MachiningOptions from './MachiningOptions'
import { useMediaQuery } from '@mantine/hooks'

const MachiningModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const isMd = useMediaQuery('(min-width: 768px)')

  console.log(isMd)

  return (
    <>
      <button
        className='w-full border border-primary text-primary py-1 hover:bg-primary-100'
        onClick={() => setIsOpen(true)}
      >
        machining
      </button>

      <Modal
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        withCloseButton={false}
        transitionProps={{ transition: 'rotate-left' }}
        size={'1200px'}
        styles={{
          content: {
            borderRadius: '0px',
            height: '800px'
          },
          body: {
            padding: '0px'
          }
        }}
      >
        <div className='relative'>
          <IoMdClose
            onClick={() => setIsOpen(false)}
            className='cursor-pointer absolute right-2 top-2 text-gray-600 z-10'
            size={24}
          />

          <div className='flex flex-nowrap'>
            <div className='min-w-[400px] w-[400px] bg-[#F5F5F5] p-4'>
              <MachiningOptions />
            </div>
            <div className='min-w-[800px] w-[800px] bg-primary-100 relative'>
              <Canvas />
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default MachiningModal
