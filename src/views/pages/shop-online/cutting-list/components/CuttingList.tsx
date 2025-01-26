import React, { useState } from 'react'
import { useReactTable, flexRender, getCoreRowModel, ColumnDef } from '@tanstack/react-table'
import ProductSelectorDropdown from './ProductSelectorDropdown'

// Define the type for your data
type CuttingListData = {
  id: number
  material: string
  thick: string
  length: string
  width: string
  qty: string
  partDescription: string
  l1: string
  l2: string
  w1: string
  w2: string
  additionalMachining: string
  sprayCoating: string
  grainMatch: string
  actions: string
}

// Give our default column cell renderer editing superpowers!
const defaultColumn: Partial<ColumnDef<CuttingListData>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue()
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue)

    // If the initialValue is changed external, sync it up with our state
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    return (
      <ProductSelectorDropdown
        onSelect={decor => {
          setValue(decor.name)
          table.options.meta?.updateData(index, id, decor.name)
        }}
      >
        <input
          type='text'
          placeholder='Enter decor code or name'
          className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
          value={value as string}
        />
      </ProductSelectorDropdown>
    )
  }
}

const CuttingList = () => {
  const columns: ColumnDef<CuttingListData>[] = [
    {
      accessorKey: 'id',
      header: '#',
      cell: info => <span className='text-center'>{info.getValue() as number}</span>,
      size: 25
    },
    {
      accessorKey: 'material',
      header: 'Material decor code / name',

      size: 215
    },
    {
      accessorKey: 'thick',
      header: 'Thick [mm]',
      cell: info => (
        <input
          type='text'
          className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
          defaultValue={info.getValue() as string}
        />
      ),
      size: 55
    },
    {
      accessorKey: 'length',
      header: 'Length [mm]',
      cell: info => (
        <input
          type='text'
          className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
          defaultValue={info.getValue() as string}
        />
      ),
      size: 55
    },
    {
      accessorKey: 'width',
      header: 'Width [mm]',
      cell: info => (
        <input
          type='text'
          className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
          defaultValue={info.getValue() as string}
        />
      ),
      size: 55
    },
    {
      accessorKey: 'qty',
      header: 'Qty',
      cell: info => (
        <input
          type='text'
          className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
          defaultValue={info.getValue() as string}
        />
      ),
      size: 42
    },
    {
      accessorKey: 'partDescription',
      header: 'Part description',
      cell: info => (
        <input
          type='text'
          className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
          defaultValue={info.getValue() as string}
        />
      ),
      size: 115
    },
    {
      accessorKey: 'l1',
      header: () => <div className='text-center'>L1</div>,
      cell: info => (
        <input
          type='text'
          className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
          defaultValue={info.getValue() as string}
        />
      ),
      size: 55
    },
    {
      accessorKey: 'l2',
      header: () => <div className='text-center'>L2</div>,
      cell: info => (
        <input
          type='text'
          className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
          defaultValue={info.getValue() as string}
        />
      ),
      size: 55
    },
    {
      accessorKey: 'w1',
      header: () => <div className='text-center'>W1</div>,
      cell: info => (
        <input
          type='text'
          className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
          defaultValue={info.getValue() as string}
        />
      ),
      size: 55
    },
    {
      accessorKey: 'w2',
      header: () => <div className='text-center'>W2</div>,
      cell: info => (
        <input
          type='text'
          className='h-[35px] px-2 border border-[#d1d1d1] focus-visible:outline-none w-full placeholder:!text-[#b9b9b9] traci !text-[#222222] !text-[14px] placeholder:text-[12px]'
          defaultValue={info.getValue() as string}
        />
      ),
      size: 55
    },
    {
      accessorKey: 'additionalMachining',
      header: 'Additional machining',
      cell: info => <span>{info.getValue() as string}</span>,
      size: 150
    },
    {
      accessorKey: 'sprayCoating',
      header: 'Spray coating',
      cell: info => <span>{info.getValue() as string}</span>,
      size: 150
    },
    {
      accessorKey: 'grainMatch',
      header: 'Grain match',
      cell: info => <span>{info.getValue() as string}</span>,
      size: 150
    },
    {
      accessorKey: 'actions',
      header: () => <div className='text-right'>Actions</div>,
      cell: info => <div className='flex justify-end'>{info.getValue() as string}</div>,
      size: 100
    }
  ]

  const [data, setData] = useState<CuttingListData[]>([
    {
      id: 0,
      material: 'Material 1',
      thick: '10',
      length: '100',
      width: '50',
      qty: '5',
      partDescription: 'Part 1',
      l1: 'L1',
      l2: 'L2',
      w1: 'W1',
      w2: 'W2',
      additionalMachining: 'Machining 1',
      sprayCoating: 'Coating 1',
      grainMatch: 'Match 1',
      actions: 'Actions 1'
    },
    {
      id: 1,
      material: 'Material 2',
      thick: '20',
      length: '200',
      width: '60',
      qty: '10',
      partDescription: 'Part 2',
      l1: 'L1',
      l2: 'L2',
      w1: 'W1',
      w2: 'W2',
      additionalMachining: 'Machining 2',
      sprayCoating: 'Coating 2',
      grainMatch: 'Match 2',
      actions: 'Actions 2'
    },
    {
      id: 2,
      material: 'Material 3',
      thick: '30',
      length: '300',
      width: '70',
      qty: '15',
      partDescription: 'Part 3',
      l1: 'L1',
      l2: 'L2',
      w1: 'W1',
      w2: 'W2',
      additionalMachining: 'Machining 3',
      sprayCoating: 'Coating 3',
      grainMatch: 'Match 3',
      actions: 'Actions 3'
    }
  ])

  console.log(data)

  // Create a table instance
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn,
    meta: {
      updateData: (rowIndex, columnId, value) => {
        console.log(value)

        setData(old =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value
              }
            }
            return row
          })
        )
      }
    }
  })

  return (
    <div className='pt-5 pb-10'>
      <div className='w-full'>
        <div className='flex'>
          {table.getHeaderGroups().map(headerGroup => (
            <div key={headerGroup.id} className='flex gap-x-3 px-2'>
              {headerGroup.headers.map(header => (
                <div
                  key={header.id}
                  className='text-left text-[#999999] text-[14px] font-normal align-top'
                  style={{ width: `${header.getSize()}px` }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          {table.getRowModel().rows.map(row => (
            <div key={row.id} className='hover:bg-[#FFFADB] transition-all duration-200 flex items-center p-2 gap-x-3'>
              {row.getVisibleCells().map(cell => (
                <div className='relative'>
                  <div key={cell.id} className='' style={{ width: `${cell.column.getSize()}px` }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CuttingList
