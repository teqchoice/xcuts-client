import CutToSize from './CutEdge-cut'
import Edging from './CutEdge-edging'
import FullSheet from './Full-sheets'

export default function CutEdge({ price, setPrice, setUser }: any) {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <CutToSize />
      <FullSheet price={price} setPrice={setPrice} setUser={setUser} />
      <Edging />
    </div>
  )
}
