'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const HeroItem = ({ image, hoverImage, link }: { image: string; hoverImage: string; link: string }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={link}
      className='w-full block aspect-video md:aspect-auto object-cover md:max-h-[370px] lg:max-h-[450px] xl:max-h-[45rem] 2xl::max-h-[720px] md:h-[370px] lg:h-[450px] xl:h-[45rem] 2xl:h-[720px]'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={!isHovered ? image : hoverImage} alt='' fill />
    </Link>
  )
}

export default HeroItem
