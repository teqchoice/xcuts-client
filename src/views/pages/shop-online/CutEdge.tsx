import CutToSize from './CutEdge-cut'
import Edging from './CutEdge-edging'
import FullSheet from './CutEdge-full'

export default function CutEdge({ price, setPrice }: any) {
  return (
    <div className='w-full '>
      <FullSheet price={price} setPrice={setPrice}  />
      <CutToSize />
      <Edging />
    </div>
  )
}
