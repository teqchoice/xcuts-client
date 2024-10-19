import CutToSize from './CutEdge-cut'
import Edging from './CutEdge-edging'
import FullSheet from './CutEdge-full'

export default function CutEdge() {
  return (
    <div className='w-full '>
      <FullSheet />
      <CutToSize />
      <Edging />
    </div>
  )
}
