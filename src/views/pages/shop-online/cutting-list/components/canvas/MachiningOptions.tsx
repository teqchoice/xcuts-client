import { Button, Select } from '@mantine/core'
import React from 'react'

const MachiningOptions = () => {
  return (
    <div className='grid grid-cols-5 gap-x-2 items-center'>
      <Select
        data={[
          { group: 'Panel shaping', items: [{ value: 'Angled cut', label: 'Angled cut' }] },
          { group: 'Surface shaping', items: [{ value: 'Groove', label: 'Groove' }] },
          {
            group: 'Shelf holes',
            items: [
              { value: '5mm Ø (8mm deep)', label: '5mm Ø (8mm deep)' },
              { value: '7.5mm Ø (8mm deep)', label: '7.5mm Ø (8mm deep)' }
            ]
          }
        ]}
        placeholder='select machining option'
        className='col-span-4'
      />
      <div className='col-span-1'>
        <Button variant='outline'>Add</Button>
      </div>
    </div>
  )
}

export default MachiningOptions
