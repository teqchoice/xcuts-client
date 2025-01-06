import { token } from '@/extensions/redux/api/auth'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaMinus, FaPlus } from 'react-icons/fa6'
export default function Pupapt({ data }: any) {
  const router = useRouter()

  const [show, setShow] = useState(1)
  const [loader, setLoader] = useState(false)
  const [cunter, setCunter] = useState(1)
  const [user, setUser] = useState('')
  const { item, thickness } = data

  useEffect(() => {
    setUser(localStorage.getItem('id'))
  }, [])

  const addToCard = async () => {
    if (!token) {
      return router.push('/login')
    }
    setLoader(true)
    // console.log(thickness[0]?.id)

    const options = {
      method: 'GET',
      url: 'https://shop.xcuts.co.uk/users/me',
      params: { fields: 'cart_full_sheets.*' },
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json'
      }
    }

    try {
      const { data: updata } = await axios.request(options)
      console.log(updata)
      let config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: `https://shop.xcuts.co.uk/users/me`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        data: {
          cart_full_sheets: [
            ...data?.data?.cart_full_sheets,
            {
              thickness_id: thickness[0]?.id
            }
          ]
        }
      }
      axios
        .request(config)
        .then(response => {
          console.log(response.data)
          setLoader(false)
          toast.success('seved in card successfully')
          window.location.replace('/shop-online')
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.error(error)
    }
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
                src={`${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${item?.attachment[0]?.directus_files_id?.id}/${item?.attachment[0]?.directus_files_id?.filename_disk}`}
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
                src={`${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${item?.decor_poster[0]?.directus_files_id?.id}/${item?.decor_poster[0]?.directus_files_id?.filename_disk}`}
                className='w-full h-full'
              />
              <img
                src={`${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${item?.decor_poster[1]?.directus_files_id?.id}/${item?.decor_poster[1]?.directus_files_id?.filename_disk}`}
                className='w-full h-full'
              />
              <img
                src={`${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${item?.decor_poster[2]?.directus_files_id?.id}/${item?.decor_poster[2]?.directus_files_id?.filename_disk}`}
                className='w-full h-full'
              />
            </div>
          </div>
          <div className='col-span-1 px-4'>
            <h3 className='text-2xl font-bold text-primary capitalize'>
              {item?.brand_ref?.name} {item?.code}
            </h3>
            <p className='text-sm text-gray-500'>Light Grey Meta Rock</p>
            <h5 className='text-lg text-black font-bold mt-2'>Product characteristics</h5>
            <p className='text-sm  text-gray-400'>
              Core: {item?.core_ref?.name} | Surface: {item?.surface_ref?.name}
            </p>
            <p className='text-sm  text-gray-400'>
              Finish: {item?.finish_ref?.name} | Design: {item?.design_ref?.name}
            </p>
            <p className='text-sm  text-gray-400'>
              Texture: {item?.texture_ref?.name} | Grain: {item?.surface_ref?.name}
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
        {/* <div className='flex align-center justify-center text-center'>
          <button className='px-4 py-3 mb-2 w-52 outline-primary mt-2 text-xs text-white bg-primary'>
            Order a sample for £3.00
          </button>
        </div> */}
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
              {show && loader === false ? (
                <button className='p-3 outline-primary mt-2 w-full text-xs text-white bg-primary' onClick={addToCard}>
                  Buy full sheet
                </button>
              ) : (
                <div className='p-3 text-center outline-primary mt-2 w-full text-xs text-white bg-gray-400'>
                  Loading ...
                </div>
              )}

              <h3 className='text-2xl'>
                Total:
                <span className='text-primary font-bold'>
                  £{show ? thickness[0]?.price_full_sheet : thickness[1]?.price_full_sheet}
                </span>
              </h3>
              <p className='text-sm'>
                With VAT:{' '}
                {show
                  ? (thickness[0]?.price_full_sheet * (1 + thickness[0]?.tax_percent / 100)).toFixed(2)
                  : (thickness[1]?.price_full_sheet * (1 + thickness[1]?.tax_percent / 100)).toFixed(2)}
              </p>
            </div>
            <div className=' w-full'>
              <button className='p-3 outline-black mt-2 w-full text-xs text-white bg-black'>Add to cutting list</button>
              <h3 className='text-2xl'>
                Total:
                <span className='text-primary font-bold'>
                  £{show ? thickness[0]?.price_cutting : thickness[1]?.price_cutting}
                </span>
              </h3>
              <p className='text-sm'>
                With VAT:{' '}
                {show
                  ? (thickness[0]?.price_cutting * (1 + (thickness[0]?.tax_percent ?? 20) / 100)).toFixed(2)
                  : (thickness[1]?.price_cutting * (1 + (thickness[1]?.tax_percent ?? 20) / 100)).toFixed(2)}
              </p>
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
                  £
                  {show
                    ? (thickness[0]?.price_full_sheet * (1 + thickness[0]?.tax_percent / 100)).toFixed(2)
                    : (thickness[1]?.price_full_sheet * (1 + thickness[1]?.tax_percent / 100)).toFixed(2)}
                </span>
              </div>
              <div className='flex justify-between'>
                <p className='text-xs text-black'>Sheet price with cutting (up to 20 pieces per sheet)</p>
                <span className='text-primary'>
                  £
                  {show
                    ? (thickness[0]?.price_cutting * (1 + (thickness[0]?.tax_percent ?? 20) / 100)).toFixed(2)
                    : (thickness[1]?.price_cutting * (1 + (thickness[1]?.tax_percent ?? 20) / 100)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
