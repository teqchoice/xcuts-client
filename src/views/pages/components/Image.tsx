import React, { HTMLAttributes, useState } from 'react'
import NextImage from 'next/image'

type ImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: HTMLAttributes<HTMLImageElement>['className']
}

const Image = (props: ImageProps) => {
  const { src, alt, width, height, className } = props

  const [defaultImage, setDefaultImage] = useState<boolean>()

  return (
    <NextImage
      src={defaultImage ? '/images/placeholder.jpg' : src}
      width={width ?? 40}
      height={height ?? 40}
      alt={alt}
      className={`${className} ${!defaultImage && 'cursor-pointer'}`}
      onError={e => setDefaultImage(e.type === 'error' ? true : false)}
    />
  )
}

export default Image
