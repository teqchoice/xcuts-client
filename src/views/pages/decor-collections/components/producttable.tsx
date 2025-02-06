import Image from '@/views/pages/components/Image'

export default function Producttable({ item, setOpened, opened, setPupitem }: any) {
  return (
    <tr className='border-t '>
      <td>
        <div className='text-center w-16 h-16 flex items-center justify-center rounded-full overflow-hidden'>
          <Image
            className='w-full h-full object-cover object-center'
            src={`${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${item?.decor_poster[0]?.directus_files_id?.id}/${item?.decor_poster[0]?.directus_files_id?.filename_disk}`}
            // src={`${process.env.NEXT_PUBLIC_SHOP_API_URL}/files/${item?.collectionName}/${item?.id}/${item?.decor[0]}`}
            alt=''
            width={64}
            height={64}
          />
        </div>
      </td>
      <td>
        <div className='text-center w-16 h-16 flex items-center justify-center rounded-full overflow-hidden'>
          <Image
            className='w-full h-full object-cover object-center'
            src={`${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${item?.decor_poster[1]?.directus_files_id?.id}/${item?.decor_poster[1]?.directus_files_id?.filename_disk}`}
            alt=''
            width={64}
            height={64}
          />
        </div>
      </td>
      <td>
        <div className='text-center flex items-center justify-center px-3' title={item?.grain_ref?.name ?? ''}>
          <Image
            alt={item?.grain_ref?.name ?? ''}
            src={
              item?.grain_ref?.name === 'Length oriented grain'
                ? '/images/length-oriented-grain.png'
                : item?.grain_ref?.name === 'Width oriented grain'
                ? '/images/width-oriented-grain.png'
                : '/images/no-grain.png'
            }
            width={26}
            height={26}
            className='!h-[26px] !w-[26px]'
          />
        </div>
      </td>
      <td>
        <div className='text-[#707070] text-[15px] text-center whitespace-nowrap'>{item.product_code}</div>
      </td>
      <td>
        <div className='border border-[#959595] border-dashed rounded-md px-3 py-3 font-medium text-[15px] text-center text-primary whitespace-nowrap'>
          {item.product_name}
        </div>
      </td>
      <td>
        <div className='text-[#707070] text-[15px] text-center px-3'>{item?.core_ref?.name}</div>
      </td>
      <td>
        <div className='text-[#707070] text-[15px] text-center px-3'>{item?.length}</div>
      </td>
      <td>
        <div className='text-[#707070] text-[15px] text-center px-3'>{item?.width}</div>
      </td>
      <td className='py-2'>
        <div className='flex justify-between flex-row gap-x-1 w-full'>
          <div className='grid grid-cols-5 gap-2'>
            {item?.thickness_ref?.map((thicknessItem: any, index: number) => (
              <div
                key={index}
                className={`text-[14px] w-10 border border-primary h-[39px] flex items-center justify-center px-[20px] py-[10px] ${
                  index % 2 === 0 ? 'text-[#707070]' : 'bg-primary text-white'
                }`}
              >
                {thicknessItem?.thickness}
              </div>
            ))}
          </div>
          <div
            className='cursor-pointer h-fit popup-modal px-6 py-[8px] font-medium text-[15px] bg-black text-white'
            onClick={() => {
              setPupitem({
                item,
                thickness: item?.thickness_ref
              })
              setOpened(!opened)
            }}
          >
            Buy
          </div>
        </div>
      </td>
    </tr>
  )
}
