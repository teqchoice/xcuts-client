import { useCurrentMachiningOptionStore } from '../store/machiningOptionsStore'
import AngledCutOption from './AngledCutOption'

type ActiveOptionProps = {}

const ActiveOption = (props: ActiveOptionProps) => {
  const {} = props

  const { currentMachiningOption } = useCurrentMachiningOptionStore()

  const isAngledCut = currentMachiningOption?.type === 'angled-cut'

  if (isAngledCut) {
    return <AngledCutOption key={currentMachiningOption.id} />
  } else {
    return null
  }
}

export default ActiveOption
