import { useForm } from '@mantine/form'
import { TextInput, Button, Group, Box, Textarea, NumberInput } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { token } from '@/extensions/redux/api/auth'
import toast from 'react-hot-toast'
import { Check, Close, Plus } from '@icon-park/react'

export default function Delivery() {
  const [deliveryData, setDeliveryData] = useState([])
  const [deliveryup, setDeliveryup] = useState(false)

  const formdelivery = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      address_line1: '',
      address_line2: '',
      city: '',
      postcode: ''
    }
  })

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.xcuts.co.uk/api/user/get-DeliveryAddress',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios
      .request(config)
      .then(response => {
        // form.setValues(response.data[0])
        console.log(response.data)
        setDeliveryData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    // console.log(value)
  }, [deliveryup])

  function handleSend() {
    console.log(formdelivery.values)
    // let data = form.values

    // let config = {
    //   method: 'POST',
    //   maxBodyLength: Infinity,
    //   url: 'https://api.xcuts.co.uk/api/user/add-DeliveryAddress',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`
    //   },
    //   data: formdelivery.values
    // }

    // axios
    //   .request(config)
    //   .then(response => {
    //     // console.log(response.data)
    //     toast.success('updated successfully')
    //     setDeliveryup(!deliveryup)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     toast.success('something went wrong')
    //   })
  }

  // function handleRemove(id) {
  //   // console.log(id)
  //   let config = {
  //     method: 'delete',
  //     maxBodyLength: Infinity,
  //     url: 'https://api.xcuts.co.uk/api/user/delete-DeliveryAddress',
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     },
  //     data: { id }
  //   }

  //   axios
  //     .request(config)
  //     .then(response => {
  //       console.log(response.data)
  //       toast.success('removed successfully')
  //       setDeliveryup(!deliveryup)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  // // function MapDeliveryData() {
  // //   return deliveryData.map((item, i) => {
  // //     // const formdeliveryupdate = useForm({
  // //     //   initialValues: {
  // //     //     title: item?.title,
  // //     //     address: item?.address,
  // //     //     description: item?.description
  // //     //   }
  // //     // })

  // //     function handleSend(item) {
  // //       // console.log(form.values)
  // //       // let data = form.values

  // //       let config = {
  // //         method: 'put',
  // //         maxBodyLength: Infinity,
  // //         url: 'https://api.xcuts.co.uk/api/user/update-DeliveryAddress',
  // //         headers: {
  // //           'Content-Type': 'application/json',
  // //           Authorization: `Bearer ${token}`
  // //         },
  // //         data: { id: item.id, ...formdeliveryupdate.values }
  // //       }

  // //       axios
  // //         .request(config)
  // //         .then(response => {
  // //           // console.log(response.data)
  // //           toast.success('updated successfully')
  // //         })
  // //         .catch(error => {
  // //           console.log(error)
  // //           toast.success('something went wrong')
  // //         })
  // //     }

  // //     //   formdeliveryupdate.setValues(item)

  // //     return (
  // //       <div key={i}>
  // //         <h3 className='relative z-10 w-fit p-1 font-bold  bg-white mt-2'>Delivery Address « {item?.title} »</h3>

  // //         <div className='-mt-4 mb-3 grid gap-3 border border-gray-400 p-5'>
  // //           {/* <div className='grid lg:grid-cols-2 gap-5'>
  // //             <TextInput
  // //               label='FirstName'
  // //               placeholder='firstName'
  // //               styles={{
  // //                 input: {
  // //                   border: '1px solid #49494940',
  // //                   borderRadius: '3px',
  // //                   width: '100%',
  // //                   padding: '5px',
  // //                   color: '#7e7d7d'
  // //                 }
  // //               }}
  // //               disabled
  // //               {...formdeliveryupdate.getInputProps('billing-firstName')}
  // //             />
  // //             <TextInput
  // //               label='LastName'
  // //               placeholder='lastName'
  // //               styles={{
  // //                 input: {
  // //                   border: '1px solid #49494940',
  // //                   borderRadius: '3px',
  // //                   width: '100%',
  // //                   padding: '5px',
  // //                   color: '#7e7d7d'
  // //                 }
  // //               }}
  // //               disabled
  // //               {...formdeliveryupdate.getInputProps('billing-lastName')}
  // //             />
  // //             <TextInput
  // //               label='Email'
  // //               placeholder='email'
  // //               styles={{
  // //                 input: {
  // //                   border: '1px solid #49494940',
  // //                   borderRadius: '3px',
  // //                   width: '100%',
  // //                   padding: '5px',
  // //                   color: '#7e7d7d'
  // //                 }
  // //               }}
  // //               disabled
  // //               {...formdeliveryupdate.getInputProps('billing-email')}
  // //             />
  // //             <TextInput
  // //               label='Phone'
  // //               placeholder='phone'
  // //               styles={{
  // //                 input: {
  // //                   border: '1px solid #49494940',
  // //                   borderRadius: '3px',
  // //                   width: '100%',
  // //                   padding: '5px',
  // //                   color: '#7e7d7d'
  // //                 }
  // //               }}
  // //               disabled
  // //               {...formdeliveryupdate.getInputProps('billing-phone')}
  // //             />
  // //             <TextInput
  // //               label='Province'
  // //               placeholder='province'
  // //               styles={{
  // //                 input: {
  // //                   border: '1px solid #49494940',
  // //                   borderRadius: '3px',
  // //                   width: '100%',
  // //                   padding: '5px',
  // //                   color: '#7e7d7d'
  // //                 }
  // //               }}
  // //               disabled
  // //               {...formdeliveryupdate.getInputProps('province')}
  // //             />
  // //             <TextInput
  // //               label='City'
  // //               placeholder='city'
  // //               styles={{
  // //                 input: {
  // //                   border: '1px solid #49494940',
  // //                   borderRadius: '3px',
  // //                   width: '100%',
  // //                   padding: '5px',
  // //                   color: '#7e7d7d'
  // //                 }
  // //               }}
  // //               disabled
  // //               {...formdeliveryupdate.getInputProps('city')}
  // //             />
  // //           </div> */}

  // //           {/* <TextInput
  // //             label='title'
  // //             placeholder='title'
  // //             styles={{
  // //               input: {
  // //                 border: '1px solid #49494940',
  // //                 borderRadius: '3px',
  // //                 width: '100%',
  // //                 padding: '5px',
  // //                 color: '#7e7d7d'
  // //               }
  // //             }}
  // //             {...formdeliveryupdate.getInputProps('title')}
  // //           />
  // //           <TextInput
  // //             label='address'
  // //             placeholder='address'
  // //             styles={{
  // //               input: {
  // //                 border: '1px solid #49494940',
  // //                 borderRadius: '3px',
  // //                 width: '100%',
  // //                 padding: '5px',
  // //                 color: '#7e7d7d'
  // //               }
  // //             }}
  // //             {...formdeliveryupdate.getInputProps('address')}
  // //           />
  // //           <TextInput
  // //             label='description'
  // //             placeholder='description'
  // //             styles={{
  // //               input: {
  // //                 border: '1px solid #49494940',
  // //                 borderRadius: '3px',
  // //                 width: '100%',
  // //                 padding: '5px',
  // //                 color: '#7e7d7d'
  // //               }
  // //             }}
  // //             {...formdeliveryupdate.getInputProps('description')}
  // //           /> */}
  // //           <div className='-mt-2 mb-3 grid grid-cols-2 gap-3 p-2'>
  // //             <TextInput
  // //               label='First Name'
  // //               placeholder='first name'
  // //               styles={{
  // //                 input: {
  // //                   border: '1px solid #49494940',
  // //                   borderRadius: '3px',
  // //                   width: '100%',
  // //                   padding: '5px',
  // //                   color: '#7e7d7d'
  // //                 }
  // //               }}
  // //               // {...form.getInputProps('first_name')}
  // //             />
  // //             <TextInput
  // //               label='Last Name'
  // //               placeholder='last name'
  // //               styles={{
  // //                 input: {
  // //                   border: '1px solid #49494940',
  // //                   borderRadius: '3px',
  // //                   width: '100%',
  // //                   padding: '5px',
  // //                   color: '#7e7d7d'
  // //                 }
  // //               }}
  // //               // {...form.getInputProps('last_name')}
  // //             />
  // //           </div>
  // //           <div className='-mt-2 mb-3 grid grid-cols-1 gap-3 p-2'>
  // //             <TextInput
  // //               label='Address line 1'
  // //               placeholder='Address line 1'
  // //               styles={{
  // //                 input: {
  // //                   border: '1px solid #49494940',
  // //                   borderRadius: '3px',
  // //                   width: '100%',
  // //                   padding: '5px',
  // //                   color: '#7e7d7d'
  // //                 }
  // //               }}
  // //               // {...form.getInputProps('')}
  // //             />
  // //             <TextInput
  // //               label='Address line 2'
  // //               placeholder='Address line 2'
  // //               styles={{
  // //                 input: {
  // //                   border: '1px solid #49494940',
  // //                   borderRadius: '3px',
  // //                   width: '100%',
  // //                   padding: '5px',
  // //                   color: '#7e7d7d'
  // //                 }
  // //               }}
  // //               // {...form.getInputProps('')}
  // //             />
  // //           </div>
  // //           <div className='flex gap-2 bg-white'>
  // //             <div
  // //               onClick={() => handleSend(item)}
  // //               className='bg-primary cursor-pointer flex items-center justify-center text-white border py-2 px-3 hover:bg-white hover:text-black'
  // //             >
  // //               <Check className='cursor-pointer' theme='outline' strokeWidth={2} size='20' />
  // //               Update
  // //             </div>
  // //             <div
  // //               onClick={() => handleRemove(item?.id)}
  // //               className='bg-primary cursor-pointer flex  items-center justify-center text-white border py-2 px-3 hover:bg-white hover:text-black'
  // //             >
  // //               <Close className='cursor-pointer' theme='outline' strokeWidth={2} size='20' />
  // //               Remove
  // //             </div>
  // //           </div>
  // //         </div>
  // //         {/* <Group justify='center' mt='xl'>
  // //           <Button
  // //             className='bg-primary text-white border py-2 px-3 hover:bg-white hover:text-black'
  // //             onClick={handleSend}
  // //           >
  // //             Update Address
  // //           </Button>
  // //         </Group> */}
  // //       </div>
  // //     )
  // //   })
  // }

  return (
    <div className='grid lg:grid-cols-1 gap-5'>
      <div>
        <h3 className='relative z-10 w-fit p-1 font-bold text-2xl bg-white mt-2'>New Delivery Address</h3>

        <div className='-mt-4 mb-3 grid gap-3 border border-gray-400 p-5'>
          <div className='-mt-2 mb-3 grid grid-cols-2 gap-3 p-2'>
            <TextInput
              label='First Name'
              placeholder='first name'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...formdelivery.getInputProps('first_name')}
            />
            <TextInput
              label='Last Name'
              placeholder='last name'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...formdelivery.getInputProps('last_name')}
            />
          </div>
          <div className='-mt-2 mb-3 grid grid-cols-1 gap-3 p-2'>
            <TextInput
              label='Address line 1'
              placeholder='Address line 1'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...formdelivery.getInputProps('address_line1')}
            />
            <TextInput
              label='Address line 2'
              placeholder='Address line 2'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...formdelivery.getInputProps('address_line2')}
            />
          </div>
          <div className='-mt-2 mb-3 grid grid-cols-2 gap-3 p-2'>
            <TextInput
              label='Town/city'
              placeholder='Town/city'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...formdelivery.getInputProps('city')}
            />
            <NumberInput
              label='Postcode'
              placeholder='Postcode'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...formdelivery.getInputProps('postcode')}
            />
          </div>
          {/* <div className='grid lg:grid-cols-2 gap-5'>
            <TextInput
              label='FirstName'
              placeholder='firstName'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              disabled
              {...formdelivery.getInputProps('billing-firstName')}
            />
            <TextInput
              label='LastName'
              placeholder='lastName'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              disabled
              {...formdelivery.getInputProps('billing-lastName')}
            />
            <TextInput
              label='Email'
              placeholder='email'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              disabled
              {...formdelivery.getInputProps('billing-email')}
            />
            <TextInput
              label='Phone'
              placeholder='phone'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              disabled
              {...formdelivery.getInputProps('billing-phone')}
            />
            <TextInput
              label='Province'
              placeholder='province'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              disabled
              {...formdelivery.getInputProps('province')}
            />
            <TextInput
              label='City'
              placeholder='city'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              disabled
              {...formdelivery.getInputProps('city')}
            />
          </div> */}
          {/* 
          <TextInput
            label='title'
            placeholder='title'
            styles={{
              input: {
                border: '1px solid #49494940',
                borderRadius: '3px',
                width: '100%',
                padding: '5px',
                color: '#7e7d7d'
              }
            }}
            // {...formdelivery.getInputProps('title')}
          /> */}
          {/* <TextInput
            label='address'
            placeholder='address'
            styles={{
              input: {
                border: '1px solid #49494940',
                borderRadius: '3px',
                width: '100%',
                padding: '5px',
                color: '#7e7d7d'
              }
            }}
            {...formdelivery.getInputProps('address')}
          /> */}
          {/* <TextInput
            label='description'
            placeholder='description'
            styles={{
              input: {
                border: '1px solid #49494940',
                borderRadius: '3px',
                width: '100%',
                padding: '5px',
                color: '#7e7d7d'
              }
            }}
            {...formdelivery.getInputProps('description')}
          /> */}
          {/* <div className='flex gap-2 bg-white'>
            <div className='bg-primary flex items-center justify-center text-white border py-2 px-3 hover:bg-white hover:text-black'>
              <Check className='cursor-pointer' theme='outline' strokeWidth={2} size='20' />
              Update
            </div>
            <div className='bg-primary flex  items-center justify-center text-white border py-2 px-3 hover:bg-white hover:text-black'>
              <Close className='cursor-pointer' theme='outline' strokeWidth={2} size='20' />
              Remove
            </div>
          </div> */}
        </div>
        <Group justify='center' mt='xl'>
          <Button
            className='bg-primary text-white border py-2 px-3 hover:bg-white hover:text-black'
            onClick={handleSend}
          >
            Add New Address
          </Button>
        </Group>
      </div>
      <div className='grid lg:grid-cols-2 gap-5'>{/* <MapDeliveryData /> */}</div>
    </div>
  )
}
