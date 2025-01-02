import CutToSize from './CutEdge-cut'
import Edging from './CutEdge-edging'
import FullSheet from './Full-sheets'

export default function CutEdge({ price, setPrice, setUser }: any) {
  return (
    <div className='w-full '>
      <FullSheet price={price} setPrice={setPrice} setUser={setUser}  />
      <CutToSize />
      <Edging />
    </div>
  )
}
