import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa6'
import clsx from 'clsx'
import { CuttingList } from './cutting-list/components'

export default function CutToSize() {
  return (
    <Disclosure as='div' className='w-full'>
      {({ open }) => (
        <>
          <DisclosureButton className='flex justify-between items-center w-full shadow-lg rounded-xl border px-5 py-7 text-left text-xl font-semibold'>
            Cutting list
            <FaChevronDown
              className={clsx('w-5 transition duration-200', open && 'rotate-180 transition duration-200')}
            />
          </DisclosureButton>
          <div className='py-2'>
            <DisclosurePanel
              transition
              className='origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0'
            >
              <CuttingList />
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  )
}
