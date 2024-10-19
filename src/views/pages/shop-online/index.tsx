import React, { useEffect, useState } from 'react'
import PageIntroduction from '../components/pageIntroduction'
// import Order from './order'
import { BackgroundImage } from '@mantine/core'
import CNCCutting from './CncCutting'
import CutEdge from './CutEdge'

export default function index({ Data }: any) {
  const [active, setActive] = useState(1)
  useEffect(() => {
    // console.log(active)
  }, [active])

  const rel = 'data-te-nav-active'
  return (
    <>
      <PageIntroduction Data={{ title: '', baner: 'images/order-banner.webp' }} />

      <div className='mt-16'>
        <div className='px-5 overflow-x-hidden'>
          <ul
            className='mb-5 list-none justify-center border-b-0 pl-0 tabs-box flex flex-row flex-wrap gap-x-5'
            role='tablist'
            data-te-nav-ref
          >
            <li role='presentation' className='tab'>
              <a
                href='#tabs-cutedge'
                className='my-2 block hover:bg-white data-[te-nav-active]:bg-white hover:shadow-[-4px_3px_6px_-1px_rgba(0,0,0,0.3)] data-[te-nav-active]:shadow-[-4px_3px_6px_-1px_rgba(0,0,0,0.3)] text-lg font-medium text-black leading-tight hover:isolate hover:border-transparent bg-[#bab9b9] transition-all skew-x-[45deg] group'
                data-te-toggle='pill'
                data-te-target='#tabs-cutedge'
                role='tab'
                aria-controls='tabs-cutedge'
                aria-selected='true'
                onClick={() => setActive(1)}
                data-te-nav-active={active === 1 ? 'true' : undefined}
              >
                <div
                  className='-skew-x-[45deg] bg-no-repeat bg-[left_27px_top_1px]'
                  style={{ backgroundImage: "url('assets/images/order-x-icon.webp')" }}
                >
                  <span className='inline-block md:px-8 px-5'>Cut, edge & spray</span>
                  <span className='inline-block group-hover:bg-primary bg-[#7c7c7c] md:px-6 px-4 py-5 skew-x-[45deg] data-active'>
                    <span className='-skew-x-[45deg] text-white inline-block'>£0.00</span>
                  </span>
                </div>
              </a>
            </li>
            <li role='presentation' className='tab'>
              <a
                href='#tabs-cnc-cutting'
                className='my-2 block hover:bg-white data-[te-nav-active]:bg-white hover:shadow-[-4px_3px_6px_-1px_rgba(0,0,0,0.3)] data-[te-nav-active]:shadow-[-4px_3px_6px_-1px_rgba(0,0,0,0.3)] text-lg font-medium text-black leading-tight hover:isolate hover:border-transparent bg-[#bab9b9] transition-all skew-x-[45deg] group'
                data-te-toggle='pill'
                data-te-target='#tabs-cnc-cutting'
                role='tab'
                aria-controls='tabs-cnc-cutting'
                aria-selected='true'
                onClick={() => setActive(2)}
                data-te-nav-active={active === 2 ? 'true' : undefined}
              >
                <div
                  className='-skew-x-[45deg] bg-no-repeat bg-[left_27px_top_1px]'
                  style={{ backgroundImage: "url('assets/images/order-x-icon.webp')" }}
                >
                  <span className='inline-block md:px-8 px-5'>CNC cutting</span>
                  <span className='inline-block group-hover:bg-primary bg-[#7c7c7c] md:px-6 px-4 py-5 skew-x-[45deg] data-active'>
                    <span className='-skew-x-[45deg] text-white inline-block'>£0.00</span>
                  </span>
                </div>
              </a>
            </li>
            <li role='presentation' className='tab'>
              <a
                href='#tabs-sliding'
                className='my-2 block hover:bg-white data-[te-nav-active]:bg-white hover:shadow-[-4px_3px_6px_-1px_rgba(0,0,0,0.3)] data-[te-nav-active]:shadow-[-4px_3px_6px_-1px_rgba(0,0,0,0.3)] text-lg font-medium text-black leading-tight hover:isolate hover:border-transparent bg-[#bab9b9] transition-all skew-x-[45deg] group'
                data-te-toggle='pill'
                data-te-target='#tabs-sliding'
                role='tab'
                aria-controls='tabs-sliding'
                aria-selected='true'
                onClick={() => setActive(3)}
                data-te-nav-active={active === 3 ? 'true' : undefined}
              >
                <div
                  className='-skew-x-[45deg] bg-no-repeat bg-[left_27px_top_1px]'
                  style={{ backgroundImage: "url('assets/images/order-x-icon.webp')" }}
                >
                  <span className='inline-block md:px-8 px-5'>Sliding doors</span>
                  <span className='inline-block group-hover:bg-primary bg-[#7c7c7c] md:px-6 px-4 py-5 skew-x-[45deg] data-active'>
                    <span className='-skew-x-[45deg] text-white inline-block'>£0.00</span>
                  </span>
                </div>
              </a>
            </li>
            <li role='presentation' className='tab'>
              <a
                href='#tabs-furnitures'
                className='my-2 block hover:bg-white data-[te-nav-active]:bg-white hover:shadow-[-4px_3px_6px_-1px_rgba(0,0,0,0.3)] data-[te-nav-active]:shadow-[-4px_3px_6px_-1px_rgba(0,0,0,0.3)] text-lg font-medium text-black leading-tight hover:isolate hover:border-transparent bg-[#bab9b9] transition-all skew-x-[45deg] group'
                data-te-toggle='pill'
                data-te-target='#tabs-furnitures'
                role='tab'
                aria-controls='tabs-furnitures'
                aria-selected='true'
                onClick={() => setActive(4)}
                data-te-nav-active={active === 4 ? 'true' : undefined}
              >
                <div
                  className='-skew-x-[45deg] bg-no-repeat bg-[left_27px_top_1px]'
                  style={{ backgroundImage: "url('assets/images/order-x-icon.webp')" }}
                >
                  <span className='inline-block md:px-8 px-5'>Furniture fittings</span>
                  <span className='inline-block group-hover:bg-primary bg-[#7c7c7c] md:px-6 px-4 py-5 skew-x-[45deg] data-active'>
                    <span className='-skew-x-[45deg] text-white inline-block'>£0.00</span>
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section
        className=' pb-20 bg-left-top bg-cover'
        style={{ backgroundImage: 'url("assets/images/order-bg.webp")' }}
      >
        <div className='2xl:max-w-[1530px] xl:max-w-[1170px] lg:max-w-ful px-4 xl:px-0 mx-auto'>
          <div>
            <div className='mb-6'>
              <div
                className='hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                id='tabs-cutedge'
                role='tabpanel'
                aria-labelledby='tabs-contact-tab'
                data-te-tab-active={active === 1 ? 'true' : undefined}
              >
                  <CutEdge />
              </div>
              <div
                className='hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                id='tabs-cnc-cutting'
                role='tabpanel'
                aria-labelledby='tabs-contact-tab'
                data-te-tab-active={active === 2 ? 'true' : undefined}
              >
                <div className='grid grid-cols-2 gap-5 border border-dashed rounded-md border-gray-400 p-10 text-center font-bold text-xl'>
                  <CNCCutting />
                </div>
              </div>
              <div
                className='hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                id='tabs-sliding'
                role='tabpanel'
                aria-labelledby='tabs-contact-tab'
                data-te-tab-active={active === 3 ? 'true' : undefined}
              >
                <div className='border border-dashed border-gray-400 p-10 text-center font-bold text-xl'>
                  Coming soon
                </div>
              </div>
              <div
                className='hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                id='tabs-furnitures'
                role='tabpanel'
                aria-labelledby='tabs-contact-tab'
                data-te-tab-active={active === 4 ? 'true' : undefined}
              >
                <div className='border border-dashed border-gray-400 p-10 text-center font-bold text-xl'>
                  Coming soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
