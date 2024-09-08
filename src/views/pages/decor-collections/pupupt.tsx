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
      <div className='w-full px-6 py-2 bg-gray-100'>
        <p>ProductCode :F12C-PV-19</p>
        <div className='grid grid-cols-2'>
          <div className='col-span-1 grid grid-cols-12 gap-1'>
            <div className='col-span-9 relative overflow-hidden'>
              <img src='/images/img-1.jpeg' className='w-full h-full' />
              <div className='absolute z-10 py-3 pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-primary before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[40px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 lg:bottom-0 bottom-0'>
                <div className='flex justify-between'>
                  <span className='font-medium text-white mr-4'>Decor</span>
                </div>
              </div>   
            </div>
            <div className='col-span-3 flex flex-col gap-1'>
              <img src='/images/img-2.jpeg' className='w-full h-full' />
              <img src='/images/img-3.jpeg' className='w-full h-full' />
              <img src='/images/img-4.webp' className='w-full h-full' />
            </div>
          </div>
          <div className='col-span-1 px-4'>
            <h3 className='text-2xl font-bold text-primary'>Egger f120PM</h3>
            <p className='text-sm text-gray-500'>Light Grey Meta Rock</p>
            <h5 className='text-lg text-black font-bold mt-2'>Product characteristics</h5>
            <p className='text-sm  text-gray-400'>vsegewehytjjhegffff</p>
            <p className='text-sm  text-gray-400'>vsegewehytjjhegffff</p>
            <p className='text-sm  text-gray-400'>vsegewehytjjhegffff</p>
            <h5 className='text-lg text-black font-bold mt-2'>B side description</h5>
            <p className='text-sm  text-gray-400'>qwegw fe wg bgsf g g ds af afs ad a</p>
            <div className='flex items-center text-center mt-2'>
              <h5 className='text-lg  text-black font-bold mr-3 text-center'>Available download</h5>
              <a href='#' download className='flex border  border-gray-400 px-2 py-1 text-primary text-xs font-semibold align-center items-center text-center bg-white rounded-lg'>
                PDF Documents
              </a>
            </div>
          </div>
          <button className='flex align-start '>{/* <IoCloseSharp /> */}</button>
        </div>
        <div className='flex align-center justify-center text-center'>
          <button className='px-4 py-3 mb-2 w-52 outline-primary mt-2 text-xs text-white bg-primary'>
            Order a sample for $3.co
          </button>
        </div>
      </div>

      <div className='w-full px-6 py-2 grid grid-cols-12 gap-x-4'>
        <div className='col-span-5 flex flex-col gap-2'>
          <div className='bg-gray-100 border border-gray-400/70 p-4 rounded-lg'>
            <h5 className='text-xl font-bold'>Product Maching</h5>
            <div className='flex justify-between'>
              <p className='text-primary'>Cut to Size</p>
              <span>Yse</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-primary'>Cut to Size</p>
              <span>Yse</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-primary'>Cut to Size</p>
              <span>Yse</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-primary'>Cut to Size</p>
              <span>Yse</span>
            </div>
          </div>
          <div className='bg-gray-100 border border-gray-400/70 p-4 rounded-lg'>
            <h5 className='text-xl font-bold'>Product size</h5>
            <div className='flex justify-between'>
              <p className='text-primary'>Cut to Size</p>
              <span>Yse</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-primary'>Cut to Size</p>
              <span>Yse</span>
            </div>
          </div>
        </div>
        <div className='col-span-7'>
          <div className='flex gap-3 items-center'>
            <button className='flex items-center justify-center border w-8 h-8 p-1 bg-white  border-gray-400/70 rounded-md'>
              <FaPlus />
            </button>
            <span className='text-sm font-bold'>1</span>
            <button className='flex items-center justify-center border w-8 h-8 p-1 bg-white  border-gray-400/70 rounded-md'>
              <FaMinus />
            </button>
          </div>
          <div className='flex w-full gap-5'>
            <div className=' w-full'>
              <button className='p-3 outline-primary mt-2 w-full text-xs text-white bg-primary'>Buy full sheet</button>
              <h3 className='text-2xl'>
                Total:<span className='text-primary font-bold'>$248.75</span>
              </h3>
              <p className='text-sm'>With VAI:$298.50</p>
            </div>
            <div className=' w-full'>
              <button className='p-3 outline-black mt-2 w-full text-xs text-white bg-black'>Add to cutting list</button>
              <h3 className='text-2xl'>
                Total:<span className='text-primary font-bold'>$248.75</span>
              </h3>
              <p className='text-sm'>With VAI:$298.50</p>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-xs mb-1'>Available thicknesses[mm]:</p>
            <div className='bg-gray-100 border border-gray-400/70 p-2 rounded-lg'>
              <div className='flex gap-2'>
                <span className='flex items-center justify-center border w-8 h-8 p-1 bg-primary border-primary text-white '>18</span>
                <span className='flex items-center justify-center border w-8 h-8 p-1 bg-white border-primary text-black'>38</span>
              </div>
              <div className='flex justify-between'>
                <p className='text-sm text-black'>Full sheet Price</p>
                <span className='text-primary'>$248.75</span>
              </div>
              <div className='flex justify-between'>
                <p className='text-sm text-black'>Full sheet Price</p>
                <span className='text-primary'>$248.75</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
