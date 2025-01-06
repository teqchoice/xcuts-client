import cx from 'clsx'
import { useEffect, useState } from 'react'
import { Table, ScrollArea } from '@mantine/core'
import classes from './TableSelection.module.css'
import axios from 'axios'
import { Close, Pencil } from '@icon-park/react'
import { useRouter } from 'next/router'
import { token } from '@/extensions/redux/api/auth'

export function TableSelection({ price, setPrice, setUser }: any) {
  // console.log(price)
  const router = useRouter()
  const [change, setChange] = useState<number>(1)
  const [selection, setSelection] = useState(['1'])
  const [Rdata, setRDtata] = useState([])
  // const [user, setUser] = useState('')

  useEffect(() => {
    const allprice = Rdata?.map((item: any) =>
      parseFloat((item?.thickness_id?.price_full_sheet * (1 + item?.thickness_id?.tax_percent / 100)).toFixed(2))
    )
    // setPrice()
    function sumArray(arr: number[]): number {
      return arr.reduce((a, b) => a + b, 0)
    }
    console.log(allprice)
    console.log(sumArray(allprice))
    setPrice({ ...price, Cut_edge_spray: sumArray(allprice) })
  }, [change, Rdata])

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://shop.xcuts.co.uk/users/me?fields=cart_full_sheets.thickness_id.*.*',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    axios
      .request(config)
      .then(response => {
        console.log(response?.data?.data)
        setRDtata(response?.data?.data.cart_full_sheets)
      })
      .catch(error => {
        console.log(error)
      })
  }, [change])

  function handleRemove(id: any) {
    console.log(id)

    let data = {
      'cart_full_sheets-': [id]
    }

    // let config = {
    //   method: 'patch',
    //   maxBodyLength: Infinity,
    //   url: `https://shop.xcuts.co.uk/users/me`,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`
    //   },
    //   data: data
    // }

    // axios
    //   .request(config)
    //   .then(response => {
    //     // console.log(response.data)
    //     setChange(change + 1)
    //     // window.location.replace('/shop-online')
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }

  // console.log(Rdata)

  const rows = Rdata?.map((item: any, i) => {
    // console.log(item)
    const selected = selection.includes(item.id)
    return (
      <Table.Tr key={item?.thickness_id.id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>{i + 1}</Table.Td>
        <Table.Td>{item?.thickness_id?.thickness_ref?.product_code}</Table.Td>
        <Table.Td>{item?.thickness_id?.thickness_ref?.product_name}</Table.Td>
        <Table.Td>{item?.thickness_id?.thickness}</Table.Td>
        <Table.Td>{item?.thickness_id?.thickness_ref?.length}</Table.Td>
        <Table.Td>{item?.thickness_id?.thickness_ref?.weight}</Table.Td>
        <Table.Td>{item?.thickness_id?.thickness_ref?.product_name}</Table.Td>
        <Table.Td>1</Table.Td>
        <Table.Td>
          £{(item?.thickness_id?.price_full_sheet * (1 + item?.thickness_id?.tax_percent / 100)).toFixed(2)}
        </Table.Td>
        <Table.Td className='flex justify-center gap-5 py-3'>
          {/* <div
            className='cursor-pointer border border-gray-300 hover:bg-gray-300  fill-gray-300 hover:fill-white p-1'
            onClick={() => router.push(`/products/update?id=${item?.id}`)}
          >
            <Pencil theme='outline' strokeWidth={2} size='30' fill='#6e6e6e' />
          </div> */}
          <div
            className='cursor-pointer border border-red-500 hover:bg-red-500 w-fit fill-red-500 hover:fill-white p-1'
            onClick={() => handleRemove(item?.thickness_id?.id)}
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
          <Table.Th>decor code</Table.Th>
          <Table.Th>decor name</Table.Th>
          <Table.Th>Thick [mm]</Table.Th>
          <Table.Th>Length [mm]</Table.Th>
          <Table.Th>Width [mm]</Table.Th>
          <Table.Th>Brand</Table.Th>
          <Table.Th>Qty </Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
    // </ScrollArea>
  )
}
