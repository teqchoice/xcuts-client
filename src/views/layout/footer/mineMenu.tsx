import Link from 'next/link'
import React from 'react'

export default function MineMenu() {
  return (
    <div className='ftr__links flex flex-col md:flex-row space-y-14 md:space-y-0 md:space-x-6'>
      <div className='basis-full md:basis-[28%]'>
        <h5 className='text-2xl font-semibold text-white mb-4'>Collections</h5>
        <div className='flex justify-between space-x-6'>
          <div className='mt-4 space-y-2 flex flex-col'>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Egger
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Kronospan
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              XyloCleaf
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Saviola
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Swiss Krono
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Alvic
            </a>
          </div>
          <div className='mt-4 space-y-2 flex flex-col'>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Senoplast
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Serica
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Grooved boards
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Veneered boards
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              MDF boards
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Plywood
            </a>
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[19%]'>
        <h5 className='text-2xl font-semibold text-white mb-4'>Services</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Board cutting
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Panel edgebanding
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              CNC cutting
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Spray painting
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Delivery
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Samples
            </a>
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[19%]'>
        <h5 className='text-2xl font-semibold text-white mb-4'>Products</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Sliding wardrobe doors
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Shaker style doors
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Furniture fittings
            </a>
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[19%]'>
        <h5 className='text-2xl font-semibold text-white mb-4'>Company</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              About us
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Showroom
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Our guarantee
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Privacy notice
            </a>
            <Link href={'/terms-and-conditions'} className='text-white hover:text-primary font-light text-base transition-all'>
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[15%]'>
        <h5 className='text-2xl font-semibold text-white mb-4'>Resources</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              Inspiration hub
            </a>
            <a href='#' className='text-white hover:text-primary font-light text-base transition-all'>
              How to
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
