import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import Pupapt from './pupupt'
import { Close } from '@icon-park/react'
import Table from './table'
import Productgrid from './components/productgrid'
import { ParsedUrlQuery } from 'querystring'
import { Pagination } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

export default function CollectionsItemSection({ Data, Brand, BrandData, DecorsData }: any) {
  const isGreaterThanMd = useMediaQuery('(min-width: 768px)')

  const isGreaterThanLg = useMediaQuery('(min-width: 1024px)')

  const [opened, setOpened] = useState(false)

  const [pupitem, setPupitem] = useState([])

  const [show, setShow] = useState(1)

  const [currentPage, setCurrentPage] = useState(1)

  const pageSize = show === 1 ? 25 : 12

  const totalPages = Math.ceil(DecorsData?.length / pageSize)

  const currentItems = DecorsData?.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const componentRef = useRef<HTMLDivElement>(null)

  const router = useRouter()

  const [query, setQuery] = useState<ParsedUrlQuery | undefined>(undefined)

  useEffect(() => {
    setQuery(router.query)
  }, [router.query])

  useEffect(() => {
    if (!isGreaterThanLg) setShow(2)
  }, [isGreaterThanLg])

  function BrandItem() {
    return BrandData?.map((item: any, index: number) => {
      return (
        <div key={index} className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%] aspect-square'>
              <img
                src={`${process.env.NEXT_PUBLIC_API__URL_images}/${item?.poster?.id}/${item?.poster?.filename_disk}`}
                alt=''
                className='w-full h-full object-cover object-center'
              />
            </div>
            <div className='relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white whitespace-nowrap'>
                {item?.page_name}
              </h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <div
                className='text-base text-[#5f5f5f] leading-7 mb-10'
                dangerouslySetInnerHTML={{
                  __html: item?.description
                }}
              />
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
    return Data?.items?.map((item: any, index: number) => {
      return <Productgrid />
    })
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (query && Object.values(query).every(x => x === '')) {
    return (
      <div className='grid md:grid-cols-2 gap-x-10 gap-y-10 pb-20'>
        <BrandItem />
      </div>
    )
  }

  return (
    <div ref={componentRef}>
      <div
        className={`flex md:justify-end flex-col w-40 text-center ml-auto md:ml-auto md:mr-0 mr-auto mt-8 ${
          show === 2 ? 'mb-5' : ''
        }`}
      >
        <p className='mb-2'>Display options</p>
        <div className='flex justify-center'>
          <ul
            className='flex gap-1 list-none flex-row flex-wrap border-b-0 pl-0 items-center'
            role='tablist'
            data-te-nav-ref=''
          >
            <li
              role='presentation'
              onClick={() => {
                setShow(1)
                setCurrentPage(1)
              }}
              className={`p-1 rounded-sm border border-transparent${show === 1 ? 'border border-primary' : ''}`}
            >
              <div className='cursor-pointer'>
                <div className='flex space-y-[3px] flex-col'>
                  <span className='w-[39px] h-[7px] bg-primary rounded-full block' />
                  <span className='w-[39px] h-[7px] bg-primary rounded-full block' />
                  <span className='w-[39px] h-[7px] bg-primary rounded-full block' />
                  <span className='w-[39px] h-[7px] bg-[#afafaf] rounded-full block' />
                </div>
              </div>
            </li>
            <li
              role='presentation'
              onClick={() => {
                setShow(2)
                setCurrentPage(1)
              }}
              className={`p-1 rounded-sm border border-transparent${show === 2 ? 'border border-primary' : ''}`}
            >
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

      {show === 1 ? (
        <>
          {currentItems?.length ? (
            <Table
              data={Data?.items}
              DecorsData={currentItems}
              setOpened={setOpened}
              opened={opened}
              setPupitem={setPupitem}
            />
          ) : (
            <div className='text-center pb-14'>No Items Found...</div>
          )}
        </>
      ) : (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 lg:px-10 gap-x-10 gap-y-10 pb-10'>
          {currentItems?.length ? (
            <>
              {currentItems.map((item: any, index: number) => (
                <Productgrid item={item} key={index} setOpened={setOpened} opened={opened} setPupitem={setPupitem} />
              ))}
            </>
          ) : (
            <div className='text-center col-span-3'>No Items Found...</div>
          )}
        </div>
      )}
      <div className='flex justify-center pb-20'>
        <Pagination
          radius='lg'
          total={totalPages}
          value={currentPage}
          onChange={handlePageChange}
          classNames={{
            root: 'all-decors-pagination',
            control: 'pagination-control'
          }}
          siblings={isGreaterThanMd ? 1 : 0}
        />
      </div>
      {opened && (
        <div className='w-screen h-screen z-50 p-5 top-0 left-0 fixed bg-black/80 overflow-y-scroll'>
          <div className='relative w-full md:w-10/12 xl:w-8/12 2xl:w-6/12 z-50 rounded-md bg-white mx-auto my-8'>
            <div
              className='text-black p-3 top-0 right-0 w-10 h-10 cursor-pointer absolute z-50'
              onClick={() => setOpened(false)}
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
