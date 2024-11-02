import { token } from '@/extensions/redux/api/auth'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
export default function Pupapt({ data }: any) {
  const [show, setShow] = useState(1)
  const [cunter, setCunter] = useState(1)
  const [user, setUser] = useState('')
  const { item, thickness } = data

  useEffect(() => {
    setUser(localStorage.getItem('id'))
  }, [])

  const addToCard = () => {
    console.log(thickness[0].id)
    console.log(user)
    let data = JSON.stringify({
      'cart_full_sheets+': [thickness[0].id]
    })

    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: `https://shop.xcuts.co.uk/api/collections/users/records/${user}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      data: data
    }

    axios
      .request(config)
      .then(response => {
        // console.log(response.data)
        window.location.replace('/shop-online')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div
      id='lightGreyMetalRock'
      className='container  border  relative p-0 box-content  items-center  justify-center  w-full  h-full  shadow-2xl'
    >
      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
        <i className='fa-solid fa-xmark' />
      </a>
      <div className='w-full px-6 py-2 bg-gray-100'>
        <p className='font-semibold text-sm'>ProductCode : {item?.code}</p>
        <div className='grid grid-cols-2'>
          <div className='col-span-1 grid grid-cols-12 gap-1'>
            <div className='col-span-9 relative overflow-hidden'>
              <img
                src={`${process.env.NEXT_PUBLIC_SHOP_API_URL}/files/${item?.collectionName}/${item?.id}/${item?.decor[0]}`}
                className='w-full h-full'
              />
              <div className='absolute z-10 py-3 pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-primary before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[40px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 lg:bottom-0 bottom-0'>
                <div className='flex justify-between'>
                  <span className='font-medium text-white mr-4'>Decor</span>
                </div>
              </div>
            </div>
            <div className='col-span-3 flex flex-col gap-1'>
              <img
                src={`${process.env.NEXT_PUBLIC_SHOP_API_URL}/files/${item?.collectionName}/${item?.id}/${item?.decor[1]}`}
                className='w-full h-full'
              />
              <img
                src={`${process.env.NEXT_PUBLIC_SHOP_API_URL}/files/${item?.collectionName}/${item?.id}/${item?.decor[2]}`}
                className='w-full h-full'
              />
              <img
                src={`${process.env.NEXT_PUBLIC_SHOP_API_URL}/files/${item?.expand?.texture_ref?.collectionName}/${item?.expand?.texture_ref?.id}/${item?.expand?.texture_ref?.poster}`}
                className='w-full h-full'
              />
            </div>
          </div>
          <div className='col-span-1 px-4'>
            <h3 className='text-2xl font-bold text-primary capitalize'>
              {item?.expand?.brand_ref[0].name} {item?.code}
            </h3>
            <p className='text-sm text-gray-500'>Light Grey Meta Rock</p>
            <h5 className='text-lg text-black font-bold mt-2'>Product characteristics</h5>
            <p className='text-sm  text-gray-400'>
              Core: {item?.expand?.core_ref?.name} | Surface: {item?.expand?.surface_ref?.name}
            </p>
            <p className='text-sm  text-gray-400'>
              Finish: {item?.expand?.finish_ref?.name} | Design: {item?.expand?.design_ref?.name}
            </p>
            <p className='text-sm  text-gray-400'>
              Texture: {item?.expand?.texture_ref?.name} | Grain: {item?.expand?.surface_ref?.name}
            </p>
            <h5 className='text-lg text-black font-bold mt-2'>B side description</h5>
            <p className='text-sm  text-gray-400'>{item?.b_description}</p>
            <div className='flex items-center text-center mt-2'>
              <h5 className='text-lg  text-black font-bold mr-3 text-center'>Available download</h5>
              <a
                href={`${process.env.NEXT_PUBLIC_SHOP_API_URL}/files/${item?.collectionName}/${item?.id}/${item?.attachment}`}
                download
                className='flex border  border-gray-400 px-2 py-1 text-primary text-xs font-semibold align-center items-center text-center bg-white rounded-lg'
              >
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
              <span>{item?.cut_to_size ? 'Yes' : 'No'}</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-primary'>Edgebanding</p>
              <span>{item?.edgebanding ? 'Yes' : 'No'}</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-primary'>CNC Machining</p>
              <span>{item?.cnc_machining ? 'Yes' : 'No'}</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-primary'>Drilling</p>
              <span>{item?.drilling ? 'Yes' : 'No'}</span>
            </div>
          </div>
          <div className='bg-gray-100 border border-gray-400/70 p-4 rounded-lg'>
            <h5 className='text-xl font-bold'>Product size</h5>
            <div className='flex justify-between'>
              <p className='text-primary'>Length</p>
              <span>{item?.length} mm</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-primary'>Width</p>
              <span>{item?.width} mm</span>
            </div>
          </div>
        </div>
        <div className='col-span-7'>
          <div className='flex gap-3 items-center'>
            <button
              onClick={() => setCunter(cunter + 1)}
              className='flex items-center justify-center border w-8 h-8 p-1 bg-white  border-gray-400/70 rounded-md'
            >
              <FaPlus />
            </button>
            <span className='text-sm font-bold'>{cunter}</span>
            <button
              onClick={() => setCunter(cunter - 1)}
              className='flex items-center justify-center border w-8 h-8 p-1 bg-white  border-gray-400/70 rounded-md'
            >
              <FaMinus />
            </button>
          </div>
          <div className='flex w-full gap-5'>
            <div className=' w-full'>
              {show ? (
                <button className='p-3 outline-primary mt-2 w-full text-xs text-white bg-primary' onClick={addToCard}>
                  Buy full sheet
                </button>
              ) : (
                <div className='p-3 text-center outline-primary mt-2 w-full text-xs text-white bg-gray-400'>
                  Buy full sheet
                </div>
              )}

              <h3 className='text-2xl'>
                Total:
                <span className='text-primary font-bold'>
                  £{show ? thickness[0]?.full_sheet_price : thickness[1]?.full_sheet_price}
                </span>
              </h3>
              <p className='text-sm'>With VAI:$298.50</p>
            </div>
            <div className=' w-full'>
              <button className='p-3 outline-black mt-2 w-full text-xs text-white bg-black'>Add to cutting list</button>
              <h3 className='text-2xl'>
                Total:
                <span className='text-primary font-bold'>
                  £{show ? thickness[0]?.cutting_Price : thickness[1]?.cutting_Price}
                </span>
              </h3>
              <p className='text-sm'>With VAI:$298.50</p>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-xs mb-1'>Available thicknesses[mm]:</p>
            <div className='bg-gray-100 border border-gray-400/70 p-2 rounded-lg'>
              <div className='flex gap-2'>
                <span
                  className={`cursor-pointer flex items-center justify-center border w-8 h-8 p-1 bg-white hover:bg-primary border-primary text-black hover:text-white ${
                    show == 1 && '!bg-primary text-white'
                  }`}
                  onClick={() => setShow(1)}
                >
                  {thickness[0]?.thickness}
                </span>
                <span
                  className={`cursor-pointer flex items-center justify-center border w-8 h-8 p-1 bg-white hover:bg-primary border-primary text-black hover:text-white ${
                    show == 0 && '!bg-primary text-white'
                  }`}
                  onClick={() => setShow(0)}
                >
                  {thickness[1]?.thickness}
                </span>
              </div>
              <div className='flex justify-between mt-2'>
                <p className='text-xs text-black'>Full sheet price</p>
                <span className='text-primary'>
                  £{show ? thickness[0]?.full_sheet_price : thickness[1]?.full_sheet_price}
                </span>
              </div>
              <div className='flex justify-between'>
                <p className='text-xs text-black'>Sheet price with cutting (up to 20 pieces per sheet)</p>
                <span className='text-primary'>
                  £{show ? thickness[0]?.cutting_Price : thickness[1]?.cutting_Price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
