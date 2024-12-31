import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Producttable({ item, setOpened, opened, setPupitem }: any) {
  console.log(item)
  const [thickness, setThickness] = useState([])

  return (
    <tr className='border-t '>
      <td>
        <div className='text-center w-16 h-16 flex items-center justify-center rounded-full overflow-hidden'>
          <img
            className='w-full h-full object-cover object-center'
            src={`${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${item?.poster?.id}/${item?.poster?.filename_disk}`}
            // src={`${process.env.NEXT_PUBLIC_SHOP_API_URL}/files/${item?.collectionName}/${item?.id}/${item?.decor[0]}`}
            alt=''
          />
        </div>
      </td>
      <td>
        <div className='text-center w-16 h-16 flex items-center justify-center rounded-full overflow-hidden'>
          <img
            className='w-full h-full object-cover object-center'
            src={`${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${item?.poster?.id}/${item?.poster?.filename_disk}`}
            alt=''
          />
        </div>
      </td>
      <td>
        <div className='text-center w-16 h-16 flex items-center justify-center px-3'>
          <img className='' src='../imagestt/cross-icon.webp' alt='' />
        </div>
      </td>
      <td>
        <div className='text-[#707070] text-[15px] text-center whitespace-nowrap'>{item.product_code}</div>
      </td>
      <td>
        <div className='border border-[#959595] border-dashed rounded-md px-3 py-3 font-medium text-[15px] text-center text-primary whitespace-nowrap'>
          {item.product_name}
        </div>
      </td>
      <td>
        <div className='text-[#707070] text-[15px] text-center px-3'>{item?.core_ref?.name}</div>
      </td>
      <td>
        <div className='text-[#707070] text-[15px] text-center px-3'>{item?.length}</div>
      </td>
      <td>
        <div className='text-[#707070] text-[15px] text-center px-3'>{item?.width}</div>
      </td>
      <td className=''>
        <div className='flex xl:justify-around flex-row gap-x-1 w-full'>
          <div className='text-[14px] text-[#707070] w-10 border border-primary h-[39px] flex items-center justify-center px-[20px] py-[10px]'>
            {item?.thickness_ref[0]?.thickness}
          </div>
          <div className='bg-primary text-white text-[14px] w-10 border border-primary h-[39px] flex items-center justify-center px-[20px] py-[10px]'>
            {item?.thickness_ref[1]?.thickness}
          </div>
          <div className='text-[14px] text-[#707070] w-10 border border-primary h-[39px] flex items-center justify-center px-[20px] py-[10px]'></div>
          <div className='text-[14px] text-[#707070] w-10 border border-primary h-[39px] flex items-center justify-center px-[20px] py-[10px]'></div>
          <div className='text-[14px] text-[#707070] w-10 border border-primary h-[39px] flex items-center justify-center px-[20px] py-[10px]'></div>
          <div
            className='cursor-pointer popup-modal px-6 py-[8px] font-medium text-[15px] bg-black text-white'
            onClick={() => {
              setPupitem({
                item,
                thickness: item?.thickness_ref
              })
              setOpened(!opened)
            }}
          >
            Buy
          </div>
        </div>
      </td>
    </tr>
  )
}
