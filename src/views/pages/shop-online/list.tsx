import cx from 'clsx'
import { useEffect, useState } from 'react'
import { Table, ScrollArea } from '@mantine/core'
import classes from './TableSelection.module.css'
import axios from 'axios'
import { Close, Pencil } from '@icon-park/react'
import { useRouter } from 'next/router'
import { token } from '@/extensions/redux/api/auth'

export function TableSelection() {
  const router = useRouter()
  const [change, setChange] = useState<number>(1)
  const [selection, setSelection] = useState(['1'])
  const [Rdata, setRDtata] = useState([])

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://shop.xcuts.co.uk/api/collections/decors/records?expand=brand_ref,core_ref,surface_ref,finish_ref,texture_ref,design_ref&filter=',
      headers: {}
    }

    axios
      .request(config)
      .then(response => {
        // console.log(response.data.items)
        setRDtata(response.data.items)
      })
      .catch(error => {
        console.log(error)
      })
  }, [change])

  function handleRemove(id: any) {
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `https://shop.xcuts.co.uk/api/collections/decors/records/${id}`,
      headers: {
        // ...data.getHeaders()
      }
      // data : data
    }

    // axios
    //   .request(config)
    //   .then(response => {
    //     window.location.reload()
    //     // console.log(response.data)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }

  const rows = Rdata?.map((item: any) => {
    // console.log(item)
    const selected = selection.includes(item.id)
    return (
      <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>1</Table.Td>
        <Table.Td>2</Table.Td>
        <Table.Td>3</Table.Td>
        <Table.Td>4</Table.Td>
        <Table.Td>5</Table.Td>
        <Table.Td>6</Table.Td>
        <Table.Td>7</Table.Td>
        <Table.Td className='flex gap-5'>
          {/* <div
            className='cursor-pointer border border-gray-300 hover:bg-gray-300  fill-gray-300 hover:fill-white p-1'
            onClick={() => router.push(`/products/update?id=${item?.id}`)}
          >
            <Pencil theme='outline' strokeWidth={2} size='30' fill='#6e6e6e' />
          </div> */}
          <div
            className='cursor-pointer border border-red-500 hover:bg-red-500 w-fit fill-red-500 hover:fill-white p-1'
            onClick={() => handleRemove(item?.id)}
          >
            <Close theme='outline' strokeWidth={2} size='30' fill='#f5b8b8' />
          </div>
        </Table.Td>
      </Table.Tr>
    )
  })

  return (
    // <ScrollArea>
      <Table className='w-full'>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Material decor code / name</Table.Th>
            <Table.Th>Thick [mm]</Table.Th>
            <Table.Th>Length [mm]</Table.Th>
            <Table.Th>Width [mm]</Table.Th>
            <Table.Th>Brand</Table.Th>
            <Table.Th>Qty </Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    // </ScrollArea>
  )
}
