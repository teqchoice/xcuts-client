'use client'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import Fancybox from './FancyBox'
import { useEffect, useState } from 'react'
import Image from '@/views/pages/components/Image'

const PopUpGallery = ({ item }: any) => {
  const [selectedImage, setSelectedImage] = useState<string>('')

  useEffect(() => {
    if (item?.decor_poster?.length) {
      setSelectedImage(
        `${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${item?.decor_poster[0]?.directus_files_id?.id}/${item?.decor_poster[0]?.directus_files_id?.filename_disk}`
      )
    }
  }, [item])

  return (
    <div className='flex gap-x-1'>
      <Fancybox
        options={{
          Carousel: {
            infinite: false
          }
        }}
      >
        <div className='flex gap-x-1'>
          <a data-fancybox='gallery' href={selectedImage} onClick={e => e.preventDefault()}>
            <div className='relative group'>
              <div className='absolute items-center justify-center h-full w-full bg-gray-800 bg-opacity-25 text-blue-500 group-hover:flex hidden'>
                Quick view
              </div>
              <Image src={selectedImage} alt='' width={330} height={240} className='' />
            </div>
          </a>

          <div className='flex flex-col gap-y-1'>
            {item?.decor_poster?.map((poster: any) => (
              <Image
                src={`${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${poster?.directus_files_id?.id}/${poster?.directus_files_id?.filename_disk}`}
                alt=''
                width={107}
                height={77}
                onClick={() =>
                  setSelectedImage(
                    `${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${poster?.directus_files_id?.id}/${poster?.directus_files_id?.filename_disk}`
                  )
                }
                className='cursor-pointer'
              />
            ))}
          </div>
        </div>
      </Fancybox>
    </div>
  )
}

export default PopUpGallery
