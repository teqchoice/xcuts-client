import React from 'react'

const CuttingList = () => {
  return (
    <div className='pt-5 pb-10'>
      <table className='w-full'>
        <tr className='pb-5'>
          <th className='text-center text-[#999999] text-[14px] font-normal align-top' colSpan={0.5}>
            #
          </th>
          <th className='text-left text-[#999999] text-[14px] font-normal align-top' colSpan={4}>
            Material decor code / name
          </th>
          <th className='text-left text-[#999999] text-[14px] font-normal align-top' colSpan={1}>
            Thick <br />
            [mm]
          </th>
          <th className='text-left text-[#999999] text-[14px] font-normal align-top' colSpan={1}>
            Length <br />
            [mm]
          </th>
          <th className='text-left text-[#999999] text-[14px] font-normal align-top' colSpan={1}>
            Width <br />
            [mm]
          </th>
          <th className='text-left text-[#999999] text-[14px] font-normal align-top' colSpan={1}>
            Qty
          </th>
          <th className='text-left text-[#999999] text-[14px] font-normal align-top' colSpan={2}>
            Part description
          </th>
          <th className='text-[#999999] text-[14px] font-normal align-top' colSpan={1}>
            L1
          </th>
          <th className='text-[#999999] text-[14px] font-normal align-top' colSpan={1}>
            L2
          </th>
          <th className='text-[#999999] text-[14px] font-normal align-top' colSpan={1}>
            W1
          </th>
          <th className='text-[#999999] text-[14px] font-normal align-top' colSpan={1}>
            W2
          </th>
          <th className='text-left text-[#999999] text-[14px] font-normal align-top' colSpan={2}>
            Additional <br /> machining
          </th>
          <th className='text-left text-[#999999] text-[14px] font-normal align-top' colSpan={2}>
            Spray <br /> coating
          </th>
          <th className='text-left text-[#999999] text-[14px] font-normal align-top' colSpan={1}>
            Grain <br /> match
          </th>
          <th className='text-left text-[#999999] text-[14px] font-normal align-top' colSpan={2}>
            Actions
          </th>
        </tr>
        {[...Array(3)]?.map((_, index) => (
          <tr className='border-spacing-5 hover:bg-[#FFFADB] transition-all duration-200' key={index}>
            <td colSpan={0.5} className='text-center px-1'>
              1
            </td>
            <td className='p-2' colSpan={4}>
              <input type='text' className='w-full bg-red-300 h-[35px] px-2 focus-visible:outline-none' />
            </td>
            <td className='p-2' colSpan={1}>
              he
            </td>
            <td className='p-2' colSpan={1}>
              he
            </td>
            <td className='p-2' colSpan={1}>
              he
            </td>
            <td className='p-2' colSpan={1}>
              he
            </td>
            <td className='p-2' colSpan={2}>
              he
            </td>
            <td className='p-2' colSpan={1}>
              he
            </td>
            <td className='p-2' colSpan={1}>
              he
            </td>
            <td className='p-2' colSpan={1}>
              he
            </td>
            <td className='p-2' colSpan={1}>
              he
            </td>
            <td className='p-2' colSpan={2}>
              he
            </td>
            <td className='p-2' colSpan={2}>
              he
            </td>
            <td className='p-2' colSpan={1}>
              he
            </td>
            <td className='p-2' colSpan={2}>
              he
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default CuttingList
