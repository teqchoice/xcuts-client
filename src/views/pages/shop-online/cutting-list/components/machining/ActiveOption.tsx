import React from 'react'
import { useMachiningStore } from '../store/machiningOptionsStore'
import AngledCutOption from './AngledCutOption'

type ActiveOptionProps = {}

const ActiveOption = (props: ActiveOptionProps) => {
  const {} = props

  const { currentMachiningOption } = useMachiningStore()

  const isAngledCut = currentMachiningOption?.type === 'angled-cut'

  if (isAngledCut) {
    return <AngledCutOption />
  } else {
    return null
  }
}

export default ActiveOption
