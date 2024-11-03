import cx from 'clsx'
import { useEffect, useState } from 'react'
import { Table, ScrollArea } from '@mantine/core'
import classes from './TableSelection.module.css'
import axios from 'axios'
import { Close, Pencil } from '@icon-park/react'
import { useRouter } from 'next/router'
import { token } from '@/extensions/redux/api/auth'

export function TableSelection({ price, setPrice }: any) {
  // console.log(price)
  const router = useRouter()
  const [change, setChange] = useState<number>(1)
  const [selection, setSelection] = useState(['1'])
  const [Rdata, setRDtata] = useState([])
  const [user, setUser] = useState('')

  useEffect(() => {
    setUser(localStorage.getItem('id'))
  }, [])
  useEffect(() => {
    const allprice = Rdata?.map((item: any) => item?.full_sheet_price)
    // setPrice()
    function sumArray(arr) {
      return arr.reduce((a, b) => a + b, 0)
    }
    // console.log(allprice)
    // console.log(sumArray(allprice))
    setPrice({ ...price, Cut_edge_spray: sumArray(allprice) })
  }, [change, Rdata])

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://shop.xcuts.co.uk/api/collections/users/records/31656cl85ta37vb?expand=cart_full_sheets.decor_ref.brand_ref&fields=expand',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    axios
      .request(config)
      .then(response => {
        // console.log(response.data)
        setRDtata(response.data?.expand?.cart_full_sheets)
      })
      .catch(error => {
        console.log(error)
      })
  }, [change])

  function handleRemove(id: any) {
    console.log(id)

    let data = JSON.stringify({
      'cart_full_sheets-': [id]
    })

    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: `https://shop.xcuts.co.uk/api/collections/users/records/${user}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      data: data
    }

    axios
      .request(config)
      .then(response => {
        // console.log(response.data)
        setChange(change + 1)
        // window.location.replace('/shop-online')
      })
      .catch(error => {
        console.log(error)
      })
  }

  const rows = Rdata?.map((item: any, i) => {
    // console.log(item)
    const selected = selection.includes(item.id)
    return (
      <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>{i + 1}</Table.Td>
        <Table.Td>
          {item?.expand?.decor_ref?.code} {item?.thickness}
        </Table.Td>
        <Table.Td>{item?.thickness}</Table.Td>
        <Table.Td>{item?.length}</Table.Td>
        <Table.Td>{item?.weight}</Table.Td>
        <Table.Td>{item?.expand?.decor_ref?.expand?.brand_ref[0]?.name}</Table.Td>
        <Table.Td>1</Table.Td>
        <Table.Td className='flex justify-center gap-5 py-3'>
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
    <Table className='w-full font-normal'>
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
