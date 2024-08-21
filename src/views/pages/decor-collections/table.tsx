import React from 'react'

export default function Table({ data }: any) {
  return (
    <div
      className='hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
      id='tabs-list'
      role='tabpanel'
      aria-labelledby='tabs-list-tab'
      data-te-tab-active=''
    >
      <div className='text-black text-center font-semibold text-3xl mb-8 md:-mt-[50px]'>PerfectSense Matt</div>
      <div className='egerTable overflow-auto'>
        <table className='w-full'>
          <colgroup>
            <col span={1} className='col-Decor' />
            <col span={1} className='col-Texture' />
            <col span={1} className='col-Grain' />
            <col span={1} className='col-Decor-code' />
            <col span={1} className='col-Decor-name' />
            <col span={1} className='col-Core' />
            <col span={1} className='col-Length' />
            <col span={1} className='col-Width' />
            <col span={1} className='col-Thickness' />
          </colgroup>
          <thead>
            <tr>
              <th className='col-Decor border-r-[2px] border-bg-white text-white text-base font-medium bg-primary whitespace-normal'>
                Decor
              </th>
              <th className='col-Texture border-r-[2px] border-bg-white text-white text-base font-medium bg-black whitespace-normal'>
                Texture
              </th>
              <th className='col-Grainborder-r-[2px] border-bg-white text-white text-base font-medium bg-primary whitespace-normal'>
                Grain
              </th>
              <th className='col-Decor-code border-r-[2px] border-bg-white text-white text-base font-medium bg-black whitespace-normal'>
                Decor code
              </th>
              <th className='col-Decor-name border-r-[2px] border-bg-white text-white text-base font-medium bg-primary whitespace-normal'>
                Decor name
              </th>
              <th className='col-Core border-r-[2px] border-bg-white text-white text-base font-medium bg-black whitespace-normal'>
                Core
              </th>
              <th className='col-Length border-r-[2px] border-bg-white text-white text-base font-medium bg-primary whitespace-normal'>
                Length
              </th>
              <th className='col-Width border-r-[2px] border-bg-white text-white text-base font-medium bg-black whitespace-normal'>
                Width
              </th>
              <th className='col-Thickness border-r-[2px] border-bg-white text-white text-base font-medium bg-primary whitespace-normal'>
                Thickness
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, index: number) => {
              return (
                <tr className='border-t '>
                  <td>
                    <div className='text-center w-24 flex items-center justify-center'>
                      <a data-fancybox='gallery' href='../imagestt/img-01.webp' className='ltbx-thumb inline-block'>
                        <img className='rounded-full' src='../imagestt/img-01.webp' alt='' />
                      </a>
                      <div style={{ display: 'none' }}>
                        <a data-fancybox='gallery' href='../imagestt/img-02.webp'>
                          <img src='../imagestt/img-02.webp' />
                        </a>
                        <a data-fancybox='gallery' href='../imagestt/img-03.webp'>
                          <img src='../imagestt/img-03.webp' />
                        </a>
                        <a data-fancybox='gallery' href='../imagestt/img-04.webp'>
                          <img src='../imagestt/img-04.webp' />
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='text-center w-24 flex items-center justify-center'>
                      <a data-fancybox='texture' href='../imagestt/img-04.webp' className='ltbx-thumb inline-block'>
                        <img className='rounded-full' src='../imagestt/img-04.webp' alt='' />
                      </a>
                      <div style={{ display: 'none' }}>
                        <a data-fancybox='texture' href='../imagestt/img-02.webp'>
                          <img src='../imagestt/img-02.webp' />
                        </a>
                        <a data-fancybox='texture' href='../imagestt/img-03.webp'>
                          <img src='../imagestt/img-03.webp' />
                        </a>
                        <a data-fancybox='texture' href='../imagestt/img-01.webp'>
                          <img src='../imagestt/img-01.webp' />
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='grain-icon text-center block'>
                      <div
                        className='
                                                relative before:content-[attr(data-tip)] 
                                                before:absolute before:px-3 before:py-2
                                                before:left-1/2 before:-top-3 before:w-max 
                                                before:max-w-xs before:-translate-x-1/2  
                                                before:-translate-y-full before:bg-gray-700 
                                                before:text-white
                                                before:rounded-md before:opacity-0 
                                                before:transition-all after:absolute 

                                                after:left-1/2 after:-top-3 after:w-0 
                                                after:h-0 after:-translate-x-1/2 after:border-8  
                                                after:border-t-gray-700  after:border-l-transparent 
                                                after:border-b-transparent
                                                after:border-r-transparent after:opacity-0 
                                                after:transition-all  
                                                
                                                hover:before:opacity-100 
                                                hover:after:opacity-100 
                                                text-[14px]'
                        data-tip='Length oriented grain'
                      >
                        <button>
                          <img src='../imagestt/cross-icon.webp' alt='' />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='text-[#707070] text-[15px] text-center whitespace-nowrap'>{item.Brand}</div>
                  </td>
                  <td>
                    <div className='border border-[#959595] border-dashed rounded-md px-3 py-3 font-medium text-[15px] text-center text-primary whitespace-nowrap'>
                      Light Grey Metal Rock
                    </div>
                  </td>
                  <td>
                    <div className='text-[#707070] text-[15px] text-center'>MDF</div>
                  </td>
                  <td>
                    <div className='text-[#707070] text-[15px] text-center'>2800</div>
                  </td>
                  <td>
                    <div className='text-[#707070] text-[15px] text-center'>2070</div>
                  </td>
                  <td className='col-Thickness'>
                    <div className='flex flex-row gap-x-1'>
                      <div className='flex 2xl:grid 2xl:grid-cols-5 gap-x-[2px]'>
                        <div className='text-[14px] text-[#707070] w-[20%] border border-primary h-[39px] flex items-center justify-center px-[20px] py-[10px]'>
                          19
                        </div>
                        <div className='bg-primary text-white text-[14px] w-[20%] border border-primary h-[39px] flex items-center justify-center px-[20px] py-[10px]'>
                          38
                        </div>
                        <div className='w-[20%] border border-primary h-[39px] flex items-center justify-center px-[20px] py-[10px]' />
                        <div className='w-[20%] border border-primary h-[39px] flex items-center justify-center px-[20px] py-[10px]' />
                        <div className='w-[20%] border border-primary h-[39px] flex items-center justify-center px-[20px] py-[10px]' />
                      </div>
                      <div className='flex items-center justify-center'>
                        <a
                          href='#lightGreyMetalRock'
                          className='popup-modal px-6 py-[8px] font-medium text-[15px] bg-black text-white'
                        >
                          Buy
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
