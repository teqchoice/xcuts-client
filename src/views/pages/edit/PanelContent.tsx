import { useEffect, useState } from 'react'
import { Close, Delete, Pencil, Redo, Save, Upload } from '@icon-park/react'
import { useRemoveContentMutation, useUpdateContentMutation } from '@/extensions/redux/api/appContentApi'
import axios from 'axios'
import { useClickOutside } from '@mantine/hooks'
import RichTextC from './RichTextC'
import TextareaC from './Textarea'
import toast from 'react-hot-toast'

export default function PanelContent({ Data }: any) {
  const [removeContent, { data: Mudata, error: Muerror, isLoading: MuisLoading }] = useRemoveContentMutation()
  const [updateContent, { data: Updata, error: Uperror, isLoading: UpisLoading }] = useUpdateContentMutation()
  console.log('data => ', Updata, 'error => ', Uperror, 'isLoading => ', UpisLoading)
  // console.log(Data)
  const [editor, setEditor] = useState(false)
  const ref = useClickOutside(() => setEditor(false))

  const [fetch, setFetch] = useState(
    Data || {
      id: '',
      title: '',
      value: '',
      link: '',
      filec: ''
    }
  )
  const [newFetch, setNewFetch] = useState({
    id: fetch?.id,
    title: '',
    value: '',
    link: '',
    filec: null
  })
  // console.log(newFetch)
  useEffect(() => {
    Mudata && toast.success('Delete content successfully')
  }, [Mudata])

  return (
    <>
      {/* <Accordion.Panel> */}
      <div className='grid grid-cols-12 w-full border border-gray-300 divide-gray-300 divide-x'>
        <div className='divide-y col-span-1 flex flex-col'>
          <div className='flex justify-center items-center w-full'>id</div>
          <div className='flex justify-center items-center w-full py-2 grow'>{fetch?.id}</div>
        </div>
        <div className='divide-y col-span-2 flex flex-col'>
          <div className='flex justify-center items-center w-full'>title</div>
          <div className='flex justify-center items-center w-full py-2 grow'>
            <TextareaC
              classC='w-full mx-1'
              Var={newFetch?.title || fetch?.title}
              Fun={(event: any) => {
                // console.log(event.currentTarget.value)
                setNewFetch({
                  ...newFetch,
                  title: event.currentTarget?.value
                })
              }}
              clog
            />
          </div>
        </div>
        <div className='divide-y  col-span-3 flex flex-col'>
          <div className='flex justify-center items-center w-full gap-3'>
            value{' '}
            <Pencil
              className='cursor-pointer border'
              theme='outline'
              strokeWidth={2}
              size='22'
              fill='#6e6e6e'
              onClick={() => setEditor(true)}
            />
          </div>
          <div className='flex justify-center items-center w-full py-2 grow'>
            {editor ? (
              <div className='overflow-hidden flex items-center justify-center h-screen w-screen bg-black/50 fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-50'>
                <div
                  ref={ref}
                  className='flex flex-col items-center justify-center gap-3 rounded-md shadow-[0_3px_15px_rgb(0,0,0,0.4)] bg-white md:p-3'
                >
                  <RichTextC
                    value={newFetch?.value || fetch?.value}
                    func={(newContentValue: any) =>
                      setNewFetch({
                        ...newFetch,
                        value: newContentValue
                      })
                    }
                  />
                  <button className='bg-red-500 py-2 px-10' onClick={() => setEditor(false)}>
                    <Close className='cursor-pointer' theme='outline' strokeWidth={2} size='25' fill='#fff' />
                  </button>
                </div>
              </div>
            ) : (
              <TextareaC
                classC='w-full mx-1'
                Var={newFetch?.value || fetch?.value}
                Fun={(event: any) => {
                  // console.log(event.currentTarget.value)
                  setNewFetch({
                    ...newFetch,
                    value: event.currentTarget?.value
                  })
                }}
                clog
              />
            )}
          </div>
        </div>
        <div className='divide-y  col-span-3 flex flex-col'>
          <div className='flex justify-center items-center w-full'>link</div>
          <div className='flex justify-center items-center w-full py-2 grow'>
            <TextareaC
              classC='w-full mx-1'
              Var={newFetch?.link || fetch?.link}
              Fun={(event: any) => {
                console.log(event.currentTarget.value)
                setNewFetch({
                  ...newFetch,
                  link: event.currentTarget?.value
                })
              }}
              clog
            />
          </div>
        </div>
        <div className='divide-y  col-span-2  flex flex-col'>
          <div className='flex justify-center items-center w-full'>file</div>
          <div className='flex justify-center items-center w-full pt-1'>
            <img src={`http://api.xcuts.co.uk/${fetch?.filec}`} alt='' className='w-full' />
          </div>
          <div className='flex justify-center items-center w-full py-2 grow'>
            {/* <FileInput
              rightSection={<Upload theme='outline' strokeWidth={2} size='20' fill='#6e6e6e' />}
              className='w-[98%]'
              placeholder='Click to upload'
              value={newFetch?.filec}
              onChange={file =>
                setNewFetch({
                  ...newFetch,
                  filec: file
                })
              }
            /> */}
          </div>
        </div>
        <div className='divide-y col-span-1 flex flex-col'>
          <div
            className='flex justify-center items-center w-full py-2 grow hover:bg-green-200 cursor-pointer'
            onClick={() => {
              // toast.error('close now for ...')
              const formData = new FormData()
              formData.append('title', newFetch.title || fetch.title)
              formData.append('value', newFetch.value || fetch.value)
              formData.append('link', newFetch.link || fetch.link)
              // newFetch.filec && formData.append('filec', newFetch.filec)
              // updateContent(formData)
              let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `https://api.xcuts.co.uk/api/v1/update-content/${fetch?.id}/`,
                // headers: {
                //   ...formData.getHeaders()
                // },
                data: formData
              }

              axios
                .request(config)
                .then(response => {
                  console.log(response.data)
                  response.data?.id && toast.success('updated content successfully')
                })
                .catch(error => {
                  console.log(error)
                })
            }}
          >
            <Save theme='outline' strokeWidth={2} size='30' fill='#6e6e6e' />
          </div>
          <div
            className='flex justify-center items-center w-full py-2 grow hover:bg-orange-200 cursor-pointer'
            onClick={() =>
              setNewFetch({
                id: '',
                title: '',
                value: '',
                link: '',
                filec: null
              })
            }
          >
            <Redo theme='outline' strokeWidth={2} size='30' fill='#6e6e6e' />
          </div>
          <div className='flex justify-center items-center w-full py-2 grow hover:bg-red-200'>
            <Delete
              theme='outline'
              strokeWidth={2}
              size='30'
              fill='#6e6e6e'
              className=' cursor-pointer'
              onClick={() => toast.error('close now for ...')}
              // onClick={() => removeContent({ id: fetch?.id })}
            />
          </div>
        </div>
      </div>
      {/* </Accordion.Panel> */}
    </>
  )
}
