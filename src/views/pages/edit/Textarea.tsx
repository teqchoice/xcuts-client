import React from 'react'
import { Textarea } from '@mantine/core'

export default function TextareaC({
  Var,
  Fun,
  clog,
  title,
  place,
  extraItem,
  disabled,
  col,
  classT,
  classC,
  classI,
  classB,
  color,
  minRows
}: any) {
  // if (clog) console.log(Var)

  return (
    <div
      className={`${classC} flex ${
        col === true ? 'flex-col justify-start items-start gap-2' : 'items-center'
      } text-lg `}
    >
      {title && <span className={`${classT} h-full flex items-center w-36 whitespace-nowrap`}>{title}</span>}
      <div className={`${classB} flex grow w-full`}>
        <Textarea
          value={Var}
          size='md'
          placeholder={title || place}
          onChange={Fun}
          className={`${classI} grow`}
          disabled={disabled === true ? true : false}
          autosize
          minRows={minRows || 3}
          maxRows={4}
          styles={{
            input: {
              background: `${color || '#f6f6f6'}`,
              border: '1px solid #cacaca',
              borderRadius: '5px',
              width: '100%'
            }
          }}
        />
        {extraItem ?? extraItem}
      </div>
    </div>
  )
}
