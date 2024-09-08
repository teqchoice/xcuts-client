import { FaMinus, FaPlus } from 'react-icons/fa6'
export default function Pupapt() {
  return (
    <div
      id='lightGreyMetalRock'
      className='container  border  relative p-0 box-content  items-center  justify-center  w-full  h-full  shadow-2xl'
    >
      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
        <i className='fa-solid fa-xmark' />
      </a>
      <div className='w-full  h-1/2  p-2 bg-gray-100'>
        <div className='flex justify-between accordion-contents'>
          <div className='flex  w-1/2 pl-4'>
            <div className='relative'>
              <p>ProductCode :F12C-PV-19</p>
              <img src='/images/img-1.jpeg' className='w-100  h-60 ' />
              <div className='absolute bottom-3 left-0 '>
                <button className='border-2 border-red-700 bg-red-700 p-2 w-32 text-white'>Decor</button>
              </div>
            </div>
            <div className='pt-4 p-4'>
              <img src='/images/img-2.jpeg' className='w-20  h-20  pt-3' />
              <img src='/images/img-3.jpeg' className='w-20 h-20  pt-3' />
              <img src='/images/img-4.webp' className='w-20 h-20  pt-3' />
            </div>
          </div>
          <div className='w-1/2 mr-7 pt-6'>
            <h3 className='text-xl text-red-600'>Egger f120PM</h3>
            <p className='text-sm text-gray-400'>Light Grey Meta Rock</p>
            <h5 className='text-xl text-black font-bold mt-2'>Product characteristics</h5>
            <p className='text-sm  text-gray-400'>vsegewehytjjhegffff</p>
            <p className='text-sm  text-gray-400'>vsegewehytjjhegffff</p>
            <p className='text-sm  text-gray-400'>vsegewehytjjhegffff</p>
            <h5 className='text-xl text-black font-bold mt-2'>B side description</h5>
            <p className='text-sm  text-gray-400'>qwegw fe wg bgsf g g ds af afs ad a</p>
            <div className='flex items-center text-center mt-2'>
              <h5 className='text-base  text-black font-bold mr-4 text-center'>Available download</h5>
              <button className='flex border-2  border-gray-400 p-2 text-red-700  text-xs align-center w-32 h-8 items-center text-center   bg-white'>
                PDF Documents
              </button>
            </div>
          </div>
          <button className='flex align-start '>{/* <IoCloseSharp /> */}</button>
        </div>
        <div className='flex align-center justify-center text-center'>
          <button className='p-4 mb-2 w-52 outline-red-700 mt-2  text-xs   text-white bg-red-700'>
            Order a sample for $3.co
          </button>
        </div>
      </div>

      <div className='flex md:flex  justify-between w-full  h-1/2  p-2'>
        <div className='w-2/6 ml-4 h-82 text-sm'>
          <div className='h-2/4 ml-3 mt-1 bg-gray-100 border-2 border-gray-400 p-4 mb-1'>
            <h5 className='text-xl font-bold'>Product Maching</h5>
            <div className='flex justify-between'>
              <p className='text-red-700'>Cut to Size</p>
              <span>Yse</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-red-700'>Cut to Size</p>
              <span>Yse</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-red-700'>Cut to Size</p>
              <span>Yse</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-red-700'>Cut to Size</p>
              <span>Yse</span>
            </div>
          </div>
          <div className='h-1/3  ml-3 mt-2 bg-gray-100 border-2 border-gray-400 p-4  mb-2'>
            <h5 className='text-xl font-bold'>Product size</h5>
            <div className='flex justify-between'>
              <p className='text-red-700'>Cut to Size</p>
              <span>Yse</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-red-700'>Cut to Size</p>
              <span>Yse</span>
            </div>
          </div>
        </div>
        <div className=' w-4/6 ml-8 p-4'>
          <div>
            <button className='border-2 border-lg border-gray-400 p-1 mr-3'>
              {' '}
              <FaPlus />
            </button>
            <span className='text-sm font-bold'>1</span>
            <button className='border-2 border-lg border-gray-400 p-1 ml-3'>
              <FaMinus />
            </button>
          </div>
          <div className='flex  mt-3'>
            <div className='mr-4 '>
              <button className='p-3 outline-red-700 mt-2 w-40  text-xs   text-white bg-red-700'>Buy full sheet</button>
              <h3 className='text-2xl font-bold'>
                Total:<span className='text-red-700'>$248.75</span>
              </h3>
              <p className='text-sm'>With VAI:$298.50</p>
            </div>
            <div className='ml-4'>
              <button className='p-3 outline-black mt-2 w-40  text-xs   text-white bg-black'>Add to cutting list</button>
              <h3 className='text-2xl font-bold'>
                Total:<span className='text-red-700'>$248.75</span>
              </h3>
              <p className='text-sm'>With VAI:$298.50</p>
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-sm'>Available thicknesses[mm]:</p>
            <div className='border-2 border-gray-400 p-2 bg-gray-100 mt-2'>
              <div className='p-2'>
                <span className='border-2 bg-red-700 border-red-700 p-1 text-white text-sm'>18</span>
                <span className='border-2 bg-white border-red-700 p-1 text-black text-sm ml-1'>38</span>
              </div>
              <div className='flex justify-between'>
                <p className='text-sm font-bold'>Full sheet Price</p>
                <span className='text-red-700'>$248.75</span>
              </div>
              <div className='flex justify-between'>
                <p className='text-sm font-bold'>Full sheet Price</p>
                <span className='text-red-700'>$248.75</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
