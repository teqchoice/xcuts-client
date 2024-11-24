import Link from 'next/link'
import { select } from 'radash'
import React from 'react'
export default function MineMenu({ data }: any) {
  // console.log(Collections)
  // const Collections = select(
  //   data,
  //   item => item,
  //   item => item[0]?.title?.includes('Collections')
  // )[0]
  // const Services = select(
  //   data,
  //   item => item,
  //   item => item[0]?.title?.includes('Services')
  // )[0]
  // const Products = select(
  //   data,
  //   item => item,
  //   item => item[0]?.title?.includes('Products')
  // )[0]
  // const Company = select(
  //   data,
  //   item => item,
  //   item => item[0]?.title?.includes('Company')
  // )[0]
  const Resources = [
    {
      id: '44',
      title: 'Resources',
      value: 'Articles',
      link: '',
      filec: ''
    },
    {
      id: '45',
      title: 'Inspiration hub',
      value: 'Xcuts Tips',
      link: '',
      filec: ''
    },
    {
      id: '46',
      title: 'How to',
      value: 'FAQ',
      link: '',
      filec: ''
    }
  ]
  const Collections = [
    {
      id: '15',
      title: 'Egger',
      value: 'Egger',
      link: '/all-decors/Egger',
      filec: ''
    },
    {
      id: '16',
      title: 'Kronospan',
      value: 'Kronospan',
      link: '/all-decors/Kronospan',
      filec: ''
    },
    {
      id: '17',
      title: 'XyloCleaf',
      value: 'XyloCleaf',
      link: '/all-decors/XyloCleaf',
      filec: ''
    },
    {
      id: '18',
      title: 'Saviola',
      value: 'Saviola',
      link: '/all-decors/Saviola',
      filec: ''
    },
    {
      id: '19',
      title: 'Swiss Krono',
      value: 'Swiss Krono',
      link: '/all-decors/Swiss%20Krono',
      filec: ''
    },
    {
      id: '20',
      title: 'Alvic',
      value: 'Alvic',
      link: '/all-decors/Alvic',
      filec: ''
    },
    {
      id: '21',
      title: 'Senoplast',
      value: 'Senoplast',
      link: '/all-decors/Serica',
      filec: ''
    },
    {
      id: '22',
      title: 'Serica',
      value: 'Serica',
      link: '/all-decors/Wall%20Panelling',
      filec: ''
    },
    // {
    //   id: '23',
    //   title: 'Grooved boards',
    //   value: 'Grooved boards',
    //   link: '',
    //   filec: ''
    // },
    {
      id: '24',
      title: 'Veneered boards',
      value: 'Veneered boards',
      link: '/all-decors/Veneers',
      filec: ''
    },
    {
      id: '25',
      title: 'MDF boards',
      value: 'MDF boards',
      link: '/all-decors/MDF',
      filec: ''
    },
    {
      id: '26',
      title: 'Plywood',
      value: 'Plywood',
      link: '/all-decors/Plywood',
      filec: ''
    }
  ]
  const Services = [
    {
      id: '28',
      title: 'Board cutting',
      value: 'Board cutting',
      link: '/services/size-cut-panels',
      filec: ''
    },
    {
      id: '29',
      title: 'Panel edgebanding',
      value: 'Panel edgebanding',
      link: '/services/panel-edgebanding',
      filec: ''
    },
    {
      id: '30',
      title: 'CNC cutting',
      value: 'CNC cutting',
      link: '/services/using-cnc',
      filec: ''
    },
    {
      id: '31',
      title: 'Spray painting',
      value: 'Spray painting',
      link: '/spray-painting',
      filec: ''
    },
    {
      id: '32',
      title: 'Delivery',
      value: 'Delivery',
      link: '/delivery',
      filec: ''
    },
    {
      id: '33',
      title: 'Samples',
      value: 'Samples',
      link: '/samples',
      filec: ''
    }
  ]
  const Products = [
    {
      id: '35',
      title: 'Sliding wardrobe doors',
      value: 'Sliding wardrobe doors',
      link: '/product/sliding-doors',
      filec: ''
    },
    {
      id: '36',
      title: 'Shaker style doors',
      value: 'Shaker style doors',
      link: '/product/doors-shaker',
      filec: ''
    },
    {
      id: '37',
      title: 'Furniture fittings',
      value: 'Furniture fittings',
      link: '/product/Interior-fixtures',
      filec: ''
    }
  ]
  const Company = [
    {
      id: '39',
      title: 'About us',
      value: 'About us',
      link: '/about-us',
      filec: ''
    },
    {
      id: '40',
      title: 'Showroom',
      value: 'Showroom',
      link: '/showroom',
      filec: ''
    },
    {
      id: '41',
      title: 'Our guarantee',
      value: 'Our guarantee',
      link: '/our-guarantee',
      filec: ''
    },
    {
      id: '42',
      title: 'Privacy notice',
      value: 'Privacy notice',
      link: '/privacy-notice',
      filec: ''
    },
    {
      id: '43',
      title: 'Terms and conditions',
      value: 'Terms and conditions',
      link: '/terms-and-conditions',
      filec: ''
    }
  ]
  // console.log(Resources)
  // console.log(Collections.slice(1, 7))
  return (
    <div className='ftr__links grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-12 space-y-14 md:space-y-0 md:space-x-6'>
      <div className='basis-full md:basis-[28%] col-span-4'>
        <div className='w-16 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='text-2xl font-semibold text-white mb-4'>Collections</h5>
        <div className='grid grid-cols-2 items-start '>
          <div className='mt-4 space-y-2 flex flex-col'>
            {data?.Collections_menu?.slice(0, 7)?.map((item: any) => (
              <a
                key={item.id}
                href={item.link}
                className='text-white hover:text-primary font-normal text-base transition-all'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='mt-4 space-y-2 flex flex-col'>
            {data?.Collections_menu?.slice(7, 14)?.map((item: any) => (
              <a
                key={item.id}
                href={item.link}
                className='text-white hover:text-primary font-normal text-base transition-all'
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[19%] col-span-3'>
        <div className='w-14 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='text-2xl font-semibold text-white mb-4'>Services</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            {data?.Services_menu?.map((item: any) => (
              <a
                key={item.id}
                href={item.link}
                className='text-white hover:text-primary font-normal text-base transition-all'
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[19%] col-span-3'>
        <div className='w-14 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='text-2xl font-semibold text-white mb-4'>Products</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            {data?.Products_menu?.map((item: any) => (
              <a
                key={item.id}
                href={item.link}
                className='text-white hover:text-primary font-normal text-base transition-all'
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[19%] col-span-2'>
        <div className='w-16 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='text-2xl font-semibold text-white mb-4'>Company</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            {data?.Company_menu?.map((item: any) => (
              <a
                key={item.id}
                href={item.link}
                className='text-white hover:text-primary font-normal text-base transition-all'
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* <div className='basis-full md:basis-[15%]'>
        <div className='w-16 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='text-2xl font-semibold text-white mb-4'>Resources</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            {Resources?.map((item: any) => (
              <a key={item.id} href='#' className='text-white hover:text-primary font-normal text-base transition-all'>
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}
