import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa6'
import clsx from 'clsx'
import { TableSelection } from './list'

export default function FullSheet({ price, setPrice }: any) {
  return (
    <Disclosure defaultOpen={true} as='div' className='w-full'>
      {({ open }) => (
        <>
          <DisclosureButton className='flex justify-between items-center w-full shadow-lg rounded-xl border px-5 py-7 text-left text-xl font-semibold'>
            Full sheets
            <FaChevronDown
              className={clsx('w-5 transition duration-200', open && 'rotate-180 transition duration-200')}
            />
          </DisclosureButton>
          <div className='overflow-hidden py-2'>
            <DisclosurePanel
              transition
              className='origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0'
            >
              <div className='border border-dashed border-gray-400 p-10 text-center font-bold text-xl'>
                <TableSelection price={price} setPrice={setPrice}  />
              </div>
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  )
}
