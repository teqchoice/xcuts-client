import { token } from '@/extensions/redux/api/auth'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import PopUpGallery from './PopUpGallery'
export default function Pupapt({ data }: any) {
  const router = useRouter()

  const [show, setShow] = useState(1)
  const [loader, setLoader] = useState(false)
  const [cunter, setCunter] = useState(1)
  const { item, thickness } = data

  const [currentThickness, setCurrentThickness] = useState(item?.thickness_ref?.[0])

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
    console.log('1')
    try {
      const { data: updata } = await axios.request(options)
      console.log('2')
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
            ...updata?.data?.cart_full_sheets,
            {
              thickness_id: thickness[0]?.id
            }
          ]
        }
      }
      axios
        .request(config)
        .then(response => {
          console.log('3')
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
      className='container border relative p-0 box-content items-center justify-center w-full h-full shadow-2xl'
    >
      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
        <i className='fa-solid fa-xmark' />
      </a>
      <div className='w-full md:px-6 px-2 py-2 bg-gray-100'>
        <p className='font-semibold text-sm'>
          Product Code: {item?.product_code}
          {currentThickness?.thickness ? `-${currentThickness?.thickness}` : ''}
        </p>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-y-4'>
          <PopUpGallery item={item} />
          <div className='col-span-1 md:px-4 px-0'>
            <h3 className='text-2xl font-bold text-primary capitalize'>
              {item?.brand_ref?.name} {item?.code}
            </h3>
            <p className='text-sm text-gray-500'>{item?.product_name}</p>
            <h5 className='text-lg text-black font-bold mt-2'>Product Characteristics</h5>
            <div className='flex'>
              <div className='flex flex-col gap-y-1'>
                <p className='text-sm text-gray-400 capitalize w-[120px]'>Core: {item?.core_ref?.name} </p>
                <p className='text-sm  text-gray-400 capitalize'>Finish: {item?.finish_ref?.name}</p>
                <p className='text-sm  text-gray-400 capitalize'>Texture: {item?.texture_ref?.name}</p>
              </div>
              <div className='flex flex-col gap-y-1'>
                <p className='text-sm text-gray-400 capitalize'>| Surface: {item?.surface_ref?.name}</p>
                <p className='text-sm  text-gray-400 capitalize'>| Design: {item?.design_ref?.name}</p>
                <p className='text-sm  text-gray-400 capitalize'>| Grain: {item?.surface_ref?.name}</p>
              </div>
            </div>
            <h5 className='text-lg text-black font-bold mt-2'>B side Description</h5>
            <p className='text-sm  text-gray-400'>{item?.b_description}</p>
            <div className='flex items-center text-center mt-2'>
              <h5 className='text-lg  text-black font-bold mr-3 text-center'>Available Download</h5>
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

      <div className='w-full md:px-6 px-2 py-2 grid grid-cols-12 gap-4'>
        <div className='md:col-span-5 col-span-12 flex flex-col gap-2'>
          <div className='bg-gray-100 border border-gray-400/70 p-4 rounded-lg'>
            <h5 className='text-xl font-bold'>Product Machining</h5>
            <div className='flex justify-between'>
              <p className='text-primary'>Cut to Size</p>
              {/* <span>{item?.cut_to_size ? 'Yes' : 'No'}</span> */}
              <span>Yes</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-primary'>Edgebanding</p>
              {/* <span>{item?.edgebanding ? 'Yes' : 'No'}</span> */}
              <span>{currentThickness?.thickness <= 6 ? 'No' : 'Yes'}</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-primary'>CNC Machining</p>
              {/* <span>{item?.cnc_machining ? 'Yes' : 'No'}</span> */}
              <span>Yes</span>
            </div>
            <div className='flex justify-between'>
              <p className='text-primary'>Drilling</p>
              {/* <span>{item?.drilling ? 'Yes' : 'No'}</span> */}
              <span>Yes</span>
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
        <div className='md:col-span-7 col-span-12'>
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

              <h3 className='lg:text-2xl text-[20px]'>
                Total:{' '}
                <span className='text-primary font-bold'>
                  {currentThickness?.price_full_sheet
                    ? `£${currentThickness?.price_full_sheet?.toFixed(2) ?? ''} `
                    : 'POA'}
                </span>
              </h3>
              {currentThickness?.price_full_sheet && (
                <p className='text-sm'>
                  With VAT:{' '}
                  {currentThickness?.price_full_sheet
                    ? `£${
                        (currentThickness?.price_full_sheet * (1 + currentThickness?.tax_percent / 100))?.toFixed(2) ??
                        ''
                      }`
                    : ''}
                </p>
              )}
            </div>
            <div className=' w-full'>
              <button className='p-3 outline-black mt-2 w-full text-xs text-white bg-black'>Add to cutting list</button>
              <h3 className='lg:text-2xl text-[20px]'>
                Total:{' '}
                <span className='text-primary font-bold'>
                  {currentThickness?.price_cutting ? `£${currentThickness?.price_cutting?.toFixed(2) ?? ''}` : 'POA'}
                </span>
              </h3>
              {currentThickness?.price_cutting && (
                <p className='text-sm'>
                  With VAT:{' '}
                  {currentThickness?.price_cutting
                    ? `£${
                        (currentThickness?.price_cutting * (1 + (currentThickness?.tax_percent ?? 20) / 100))?.toFixed(
                          2
                        ) ?? ''
                      }`
                    : ''}
                </p>
              )}
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-xs mb-1'>Available thicknesses[mm]:</p>
            <div className='bg-gray-100 border border-gray-400/70 p-2 rounded-lg'>
              <div className='flex gap-2 flex-wrap'>
                {item?.thickness_ref?.map((thicknessItem: any, index: number) => (
                  <div
                    key={index}
                    className={`text-[14px] w-10 border border-primary cursor-pointer h-[39px] flex items-center justify-center px-[20px] py-[10px] ${
                      thicknessItem.id === currentThickness?.id ? 'bg-primary text-white' : 'text-black'
                    }`}
                    onClick={() => setCurrentThickness(thicknessItem)}
                  >
                    {thicknessItem?.thickness}
                  </div>
                ))}
              </div>
              <div className={`flex justify-between items-center mt-2 ${!currentThickness && 'mb-2'}`}>
                <p className='text-[9px] text-black'>Full sheet price</p>
                <span className='text-primary'>
                  {currentThickness?.price_full_sheet
                    ? `£${(currentThickness?.price_full_sheet * (1 + currentThickness?.tax_percent / 100)).toFixed(2)}`
                    : 'POA'}
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-[9px] text-black'>Sheet price with cutting (up to 20 pieces per sheet)</p>
                <span className='text-primary'>
                  {currentThickness?.price_cutting
                    ? `£${(currentThickness?.price_cutting * (1 + (currentThickness?.tax_percent ?? 20) / 100)).toFixed(
                        2
                      )}`
                    : 'POA'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
