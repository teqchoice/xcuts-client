import React, { HTMLAttributes, useState } from 'react'
import NextImage from 'next/image'

type ImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: HTMLAttributes<HTMLImageElement>['className']
  onClick?: HTMLAttributes<HTMLImageElement>['onClick']
}

const Image = (props: ImageProps) => {
  const { src, alt, width, height, className, onClick } = props

  const [defaultImage, setDefaultImage] = useState<boolean>()

  return (
    <NextImage
      src={defaultImage ? '/images/x-logo.png' : src}
      width={width ?? 40}
      height={height ?? 40}
      alt={alt}
      onClick={onClick}
      className={`${className} ${defaultImage ? '!object-contain px-2' : ''}`}
      onError={e => setDefaultImage(true)}
    />
  )
}

export default Image
