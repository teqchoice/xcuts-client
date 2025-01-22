import React from 'react'
import Producttable from './components/producttable'

export default function Table({ data, setOpened, opened, setPupitem, DecorsData }: any) {
  return (
    <div
      className='hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block mb-16'
      id='tabs-list'
      role='tabpanel'
      aria-labelledby='tabs-list-tab'
      data-te-tab-active=''
    >
      <div className='text-black text-center font-semibold text-3xl mb-8 md:-mt-[50px]'>PerfectSense Matt</div>
      <div className='egerTable overflow-auto'>
        <table className='w-full'>
          <colgroup>
            <col span={1} className='col-Decor' />
            <col span={1} className='col-Texture' />
            <col span={1} className='col-Grain' />
            <col span={1} className='col-Decor-code' />
            <col span={1} className='col-Decor-name' />
            <col span={1} className='col-Core' />
            <col span={1} className='col-Length' />
            <col span={1} className='col-Width' />
            <col span={1} className='col-Thickness' />
          </colgroup>
          <thead>
            <tr>
              <th className='col-Decor border-r-[2px] border-bg-white text-white text-base font-medium bg-primary whitespace-normal'>
                Decor
              </th>
              <th className='col-Texture border-r-[2px] border-bg-white text-white text-base font-medium bg-black whitespace-normal'>
                Texture
              </th>
              <th className='col-Grainborder-r-[2px] border-bg-white text-white text-base font-medium bg-primary whitespace-normal'>
                Grain
              </th>
              <th className='col-Decor-code border-r-[2px] border-bg-white text-white text-base font-medium bg-black whitespace-normal'>
                Decor code
              </th>
              <th className='col-Decor-name border-r-[2px] border-bg-white text-white text-base font-medium bg-primary whitespace-normal'>
                Decor name
              </th>
              <th className='col-Core border-r-[2px] border-bg-white text-white text-base font-medium bg-black whitespace-normal'>
                Core
              </th>
              <th className='col-Length border-r-[2px] border-bg-white text-white text-base font-medium bg-primary whitespace-normal'>
                Length
              </th>
              <th className='col-Width border-r-[2px] border-bg-white text-white text-base font-medium bg-black whitespace-normal'>
                Width
              </th>
              <th className='col-Thickness border-r-[2px] border-bg-white text-white text-base font-medium bg-primary whitespace-normal'>
                Thickness
              </th>
            </tr>
          </thead>
          <tbody>
            {DecorsData?.map((item: any, index: number) => {
              // console.log(item)
              return (
                <Producttable key={index} item={item} setOpened={setOpened} opened={opened} setPupitem={setPupitem} />
              )
            })}
          </tbody>
          {/* <tbody>
            {data?.map((item: any, index: number) => {
              // console.log(item)
              return <Producttable key={index} item={item} setOpened={setOpened} opened={opened} setPupitem={setPupitem}/>
            })}
          </tbody> */}
        </table>
      </div>
    </div>
  )
}
