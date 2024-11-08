import Link from 'next/link'
import React from 'react'

export default function Dropdown({ menu, setMenu }) {
  //   console.log(menu)
  function AllDecors({ menu }) {
    return (
      <div onMouseLeave={() => setMenu('')} className={`relative bg-white`}>
        <div className='container  grid grid-cols-4 p-6 gap-10 items-center'>
          <Link href={'/all-decors'} className='relative border-4 cursor-pointer'>
            <img src='../images/alldecor.jpeg' alt='' className='w-full' />
            <div className='bg-primary/50 absolute bottom-0 left-0 right-0 w-full text-white'>
              <h3 className='font-semibold text-lg text-center'>ALL DECORS</h3>
            </div>
          </Link>
          <div>
            <ul className='grid gap-3'>
              <Link href={'/all-decors?Brand=egger'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Egger</li>
              </Link>
              <Link href={'/all-decors?Brand=kronospan'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Kronospan</li>
              </Link>
              <Link href={'/all-decors?Brand=xylocleaf'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>XyloCleaf</li>
              </Link>
              <Link href={'/all-decors?Brand=saviola'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Saviola</li>
              </Link>
              <Link href={'/all-decors?Brand=swiss+krono'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Swiss Krono</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className='grid gap-3'>
              <Link href={'/all-decors?Brand=alvic'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Alvic</li>
              </Link>
              <Link href={'/all-decors?Brand=senoplast'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Senoplast</li>
              </Link>
              <Link href={'/all-decors?Brand=serica'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Serica</li>
              </Link>
              <Link href={'/all-decors?Brand=wall+panelling'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Wall Panelling</li>
              </Link>
              <Link href={'/all-decors?Brand=MDF+boards'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>MDF</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className='grid gap-3'>
              <Link href={'/all-decors?Brand=veneered+boards'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Veneers</li>
              </Link>
              <Link href={'/all-decors?Brand=plywood'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Plywood</li>
              </Link>
              <Link href={'/all-decors/Diplos'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Diplos</li>
              </Link>
              <Link href={'/all-decors/Finsa'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
                  <img src='../images/marker.png' alt='' className='w-full' />
                </div>
                <li>Finsa</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* <div className='absolute -bottom-4 right-[5%]'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div> */}
        {/* <div className='absolute -top-4 left-[5%] opacity-60'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div> */}
      </div>
    )
  }
  function Services({ menu }) {
    return (
      <div onMouseLeave={() => setMenu('')} className={`relative  bg-white`}>
        <div className='container  grid grid-cols-4 p-8 gap-10'>
          <Link href={'/services/size-cut-panels'} className=' group cursor-pointer'>
            <div className='relative aspect-video overflow-hidden'>
              <img src='../images/img-1.jpeg' alt='' className='w-full' />
              <div className='aspect-video overflow-hidden absolute left-0 top-0 z-10 ring-inset group-hover:ring-8 ring-primary opacity-0 group-hover:opacity-100 transition-all duration-150'>
                <img src='../images/img-1.jpeg' alt='' className='w-full opacity-20' />
              </div>
            </div>
            <h3 className='font-bold text-lg'>Size-Cut Panels</h3>
            <p>
              Choose any ornamental board from our wide selection of decors, and we'll cut it into smaller-sized panels
              as you specify.
            </p>
          </Link>
          <Link href={'/services/panel-edgebanding'} className=' group cursor-pointer'>
            <div className='relative aspect-video overflow-hidden'>
              <img src='../images/img-4.webp' alt='' className='w-full' />
              <div className='aspect-video overflow-hidden absolute left-0 top-0 z-10 ring-inset group-hover:ring-8 ring-primary opacity-0 group-hover:opacity-100 transition-all duration-150'>
                <img src='../images/img-4.webp' alt='' className='w-full opacity-20' />
              </div>
            </div>
            <h3 className='font-bold text-lg'>Edge-banding for Panels</h3>
            <p>
              Give us a list of the panel edges you want to complete with edging tape, and we'll use equipment with PUR
              glue to take care of it for you.
            </p>
          </Link>
          <Link href={'/services/using-cnc'} className=' group cursor-pointer'>
            <div className='relative aspect-video overflow-hidden'>
              <img src='../images/img-2.jpeg' alt='' className='w-full' />
              <div className='aspect-video overflow-hidden absolute left-0 top-0 z-10 ring-inset group-hover:ring-8 ring-primary opacity-0 group-hover:opacity-100 transition-all duration-150'>
                <img src='../images/img-2.jpeg' alt='' className='w-full opacity-20' />
              </div>
            </div>
            <h3 className='font-bold text-lg'>Using CNC</h3>
            <p>
              Give your panel cutting, ornamental pattern routing, hole drilling, and grooving projects to our CNC
              cutting department.
            </p>
          </Link>
          <Link href={'/services/spray-painting'} className=' group cursor-pointer'>
            <div className='relative aspect-video overflow-hidden'>
              <img src='../images/spray-painting.webp' alt='' className='w-full' />
              <div className='aspect-video overflow-hidden absolute left-0 top-0 z-10 ring-inset group-hover:ring-8 ring-primary opacity-0 group-hover:opacity-100 transition-all duration-150'>
                <img src='../images/spray-painting.webp' alt='' className='w-full opacity-20' />
              </div>
            </div>
            <h3 className='font-bold text-lg'>Spray Painting</h3>
            <p>
              You can easily make an online reservation on our website to have us spray-coat your panels with a white
              primer, clear lacquer, or any other shade of paint.
            </p>
          </Link>
        </div>
        <div className='absolute -bottom-4 right-[5%]'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div>
        {/* <div className='absolute -top-4 left-[5%] opacity-60'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div> */}
      </div>
    )
  }

  function Product({ menu }) {
    return (
      <div onMouseLeave={() => setMenu('')} className={`relative  bg-white`}>
        <div className='container  grid grid-cols-3 p-8 gap-10'>
          <Link href={'/product/sliding-doors'} className='grid grid-cols-2 group cursor-pointer items-center gap-2'>
            <div className='relative  overflow-hidden'>
              <img src='../images/our-product-01.webp' alt='' className='w-full' />
              <div className=' overflow-hidden absolute left-0 top-0 z-10 ring-inset group-hover:ring-8 ring-primary opacity-0 group-hover:opacity-100 transition-all duration-150'>
                <img src='../images/our-product-01.webp' alt='' className='w-full opacity-20' />
              </div>
            </div>
            <div>
              <h3 className='font-bold text-lg'>Sliding Doors</h3>
              <p>
                In less than five working days, we can build a variety of sliding wardrobe doors in custom sizes.
                Elegant, strong, and reasonably priced.
              </p>
            </div>
          </Link>
          <Link href={'/product/doors-shaker'} className='grid grid-cols-2 group cursor-pointer items-center gap-2'>
            <div className='relative  overflow-hidden'>
              <img src='../images/our-product-02.webp' alt='' className='w-full' />
              <div className=' overflow-hidden absolute left-0 top-0 z-10 ring-inset group-hover:ring-8 ring-primary opacity-0 group-hover:opacity-100 transition-all duration-150'>
                <img src='../images/our-product-02.webp' alt='' className='w-full opacity-20' />
              </div>
            </div>
            <div>
              <h3 className='font-bold text-lg'>Doors in a Shaker style</h3>
              <p>
                In fewer than five working days, Shaker-Style doors and drawer fronts can be produced at competitive
                prices.
              </p>
            </div>
          </Link>

          <Link
            href={'/product/Interior-fixtures'}
            className='grid grid-cols-2 group cursor-pointer items-center gap-2'
          >
            <div className='relative  overflow-hidden '>
              <img src='../images/our-product-03.webp' alt='' className='w-full' />
              <div className=' overflow-hidden absolute left-0 top-0 z-10 ring-inset group-hover:ring-8 ring-primary opacity-0 group-hover:opacity-100 transition-all duration-150'>
                <img src='../images/our-product-03.webp' alt='' className='w-full opacity-20' />
              </div>
            </div>
            <div className=' '>
              <h3 className='font-bold text-lg'>Interior fixtures</h3>
              <p>
                We maintain a variety of necessary furniture fittings from top brands in store for next-day delivery or
                rapid pickup.
              </p>
            </div>
          </Link>
        </div>
        <div className='absolute -bottom-4 right-[5%]'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div>
        {/* <div className='absolute top-0 left-[5%]'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div> */}
      </div>
    )
  }

  return (
    <div className='relative bg-slate-600'>
      <div className={`absolute z-10 left-0 top-0 right-0`}>
        {menu === 'ALL DECORS' ? (
          <AllDecors menu={menu} />
        ) : menu === 'SERVICES' ? (
          <Services menu={menu} />
        ) : menu === 'PRODUCTS' ? (
          <Product menu={menu} />
        ) : null}
      </div>
    </div>
  )
}
