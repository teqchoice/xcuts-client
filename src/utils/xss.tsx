import React, { Fragment } from 'react'
import xss from 'xss'

export function Xss({ data, className }: any) {
  var options = {
    whiteList: {
      a: ['href', 'title', 'target', 'style'],
      span: ['style'],
      p: ['style'],
      strong: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: []
    }
  }
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: xss(data, options)
      }}
    ></div>
  )
}
