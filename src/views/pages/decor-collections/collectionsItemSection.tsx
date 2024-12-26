import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Pupapt from './pupupt'
import { Close } from '@icon-park/react'
import Table from './table'
import axios from 'axios'
import Productgrid from './components/productgrid'

export default function CollectionsItemSection({ Data, Brand, BrandData }: any) {
  console.log(BrandData)
  const [opened, setOpened] = useState(false)
  const [pupitem, setPupitem] = useState([])
  const [show, setShow] = useState(1)
  // console.log(Brand?.items)
  const router = useRouter()

  const [query, setQuery] = useState()

  useEffect(() => {
    setQuery(router.query)
  }, [router.query])
  function BrandItem() {
    return BrandData?.map((item: any, index: number) => {
      console.log(item)
      return (
        <div key={index} className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%] aspect-square'>
              <img src={`${process.env.NEXT_PUBLIC_API__URL_images}/${item?.poster?.id}/${item?.poster?.filename_disk}`} alt='' className='w-full h-full object-cover object-center' />
            </div>
            <div className='relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white whitespace-nowrap'>{item?.page_name}</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <div className='text-base text-[#5f5f5f] leading-7 mb-10' dangerouslySetInnerHTML={{
                  __html: item?.description
                }}/>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <Link
                  href={'/all-decors/' + item?.page_name}
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View More
                </Link>
                <Link
                  href={'/all-decors?Brand=' + item?.page_name}
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  function ProductItem() {
    // console.log(Brand)
    return Data?.items?.map( (item: any, index: number) => {
    
      return <Productgrid />

    })
  }

  if (query && Object.values(query).every(x => x === '')) {
    return (
      <div className='grid md:grid-cols-2 gap-x-10 gap-y-10 pb-20'>
        <BrandItem />
      </div>
    )
  }
  return (
    <div>
      <div className='flex md:justify-end flex-col w-40 text-center ml-auto md:ml-auto md:mr-0 mr-auto'>
        <p className='mb-2'>Display options</p>
        <div className='flex justify-center'>
          {/*Tabs navigation*/}
          <ul
            className='flex gap-3 list-none flex-row flex-wrap border-b-0 pl-0'
            role='tablist'
            data-te-nav-ref=''
          >
            <li role='presentation' onClick={() => setShow(1)}>
              <div className='cursor-pointer'>
                <div className='flex space-y-[3px] flex-col'>
                  <span className='w-[39px] h-[7px] bg-primary rounded-full block' />
                  <span className='w-[39px] h-[7px] bg-primary rounded-full block' />
                  <span className='w-[39px] h-[7px] bg-primary rounded-full block' />
                  <span className='w-[39px] h-[7px] bg-[#afafaf] rounded-full block' />
                </div>
              </div>
            </li>
            <li role='presentation' onClick={() => setShow(2)}>
              <div className='cursor-pointer'>
                <div className='grid grid-cols-2 gap-1'>
                  <span className='w-[16px] h-[16px] bg-primary rounded-sm block' />
                  <span className='w-[16px] h-[16px] bg-primary rounded-sm block' />
                  <span className='w-[16px] h-[16px] bg-primary rounded-sm block' />
                  <span className='w-[16px] h-[16px] bg-[#afafaf] rounded-sm block' />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {show == 1 ? (
        <Table data={Data?.items} setOpened={setOpened} opened={opened} setPupitem={setPupitem} />
      ) : (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 lg:px-10 gap-x-10 gap-y-10 pb-20'>
          { Data?.items?.map( (item: any, index: number) => {
            return <Productgrid item={item} key={index} setOpened={setOpened} opened={opened} setPupitem={setPupitem}/>
          })}
        </div>
      )}

      {opened && (
        <div className='w-screen h-screen z-50 p-5 top-0 left-0 fixed bg-black/80'>
          <div className='relative w-10/12 xl:w-8/12 2xl:w-6/12 z-50 rounded-md  bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div
              className='text-black p-3 top-0 right-0 w-10 h-10 cursor-pointer absolute z-50'
              onClick={() => setOpened(!opened)}
            >
              <Close />
            </div>
            <Pupapt data={pupitem} />
          </div>
        </div>
      )}
    </div>
  )
}
