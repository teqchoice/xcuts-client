import React from 'react'

export default function Pupapt() {
  return (
    <div
      id='lightGreyMetalRock'
      className='border  relative p-0'
    >
      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
        <i className='fa-solid fa-xmark' />
      </a>
      <div className='bg-[#fff]'>
        <div className='accordion-contents'>
          <div className='cart-datatable overflow-auto'>
            <table className='w-full'>
              <colgroup>
                <col span={1} className='col-index' />
                <col span={1} className='col-material' />
                <col span={1} className='col-thick' />
                <col span={1} className='col-length' />
                <col span={1} className='col-width' />
                <col span={1} className='col-qty' />
                <col span={1} className='col-desc' />
                <col span={1} className='col-edge' />
                <col span={1} className='col-edge' />
                <col span={1} className='col-edge' />
                <col span={1} className='col-edge' />
                <col span={1} className='col-drilling' />
                <col span={1} className='col-spraying' />
                <col span={1} className='col-grain' />
                <col span={1} className='col-actions' />
              </colgroup>
              <thead>
                <tr>
                  <th colSpan={7} />
                  <th colSpan={4} className='th-eb text-white text-center text-lg uppercase pt-9 '>
                    Edgebanding details <br />
                    <div className='Switch mt-[15px] px-6'>
                      <div className='Switch__bg w-full left-0 flex justify-between bg-primary rounded-md py-4 px-[10px]'>
                        <button className='text-white'>
                          <input className='hidden' type='radio' id='Login24' name='row1' />
                          <label className='px-5 py-2' htmlFor='Login24'>
                            Standard
                          </label>
                        </button>
                        <button className='text-white'>
                          <input className='hidden' type='radio' id='Login26' name='row1' />
                          <label className='px-5 py-2' htmlFor='Login26'>
                            Expert
                          </label>
                        </button>
                      </div>
                    </div>
                  </th>
                  <th colSpan={4} />
                </tr>
                <tr>
                  <th className='th-index p-2 text-center text-black'>#</th>
                  <th className='text-left p-2 text-black'>Material decor code / name</th>
                  <th className='text-center p-2 text-black'>
                    Thick
                    <br />
                    [mm]
                  </th>
                  <th className='text-center p-2 text-black'>
                    Length
                    <br />
                    [mm]
                  </th>
                  <th className='text-center p-2 text-black'>
                    Width
                    <br />
                    [mm]
                  </th>
                  <th className='text-center p-2 text-black'>Qty</th>
                  <th className='text-center p-2 text-black'>Part description</th>
                  <th className='th-eb text-white p-2' colSpan={1}>
                    L1
                  </th>
                  <th className='th-eb text-white p-2' colSpan={1}>
                    L2
                  </th>
                  <th className='th-eb text-white p-2' colSpan={1}>
                    W1
                  </th>
                  <th className='th-eb text-white p-2' colSpan={1}>
                    W2
                  </th>
                  <th className='text-left p-2 text-black'>
                    Additional
                    <br />
                    machining
                  </th>
                  <th className='text-center p-2 text-black'>
                    Spray
                    <br />
                    coating
                  </th>
                  <th className='text-center p-2 text-black'>
                    Grain
                    <br />
                    match
                  </th>
                  <th className='text-center th-actions p-2 text-black'>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align='center' className='td-index'>
                    <span className='text-base'>1</span>
                  </td>
                  <td className='td-index'>
                    <div className='input-wrapper'>
                      <input
                        autoComplete='off'
                        className='border shadow-2xl border-[#cacaca] text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                        placeholder='Enter decor code or name'
                        name='material_name'
                        type='text'
                        defaultValue=''
                      />
                    </div>
                  </td>
                  <td className='td-thic'>
                    <div>
                      <input
                        className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                        type='text'
                        name='thic'
                        defaultValue=''
                      />
                    </div>
                  </td>
                  <td className=''>
                    <input
                      type='text'
                      className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                      name='length'
                      inputMode='numeric'
                      pattern='[0-9]*'
                      maxLength={4}
                      autoComplete='off'
                      placeholder=''
                      defaultValue=''
                    />
                  </td>
                  <td className=''>
                    <input
                      type='text'
                      className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                      name='width'
                      inputMode='numeric'
                      pattern='[0-9]*'
                      maxLength={4}
                      autoComplete='off'
                      placeholder=''
                      defaultValue=''
                    />
                  </td>
                  <td className=''>
                    <input
                      type='text'
                      className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                      name='qty'
                      inputMode='numeric'
                      pattern='[0-9]*'
                      maxLength={3}
                      autoComplete='off'
                      placeholder=''
                      defaultValue=''
                    />
                  </td>
                  <td className=''>
                    <input
                      type='text'
                      className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                      name='description'
                      autoComplete='off'
                      placeholder=''
                      defaultValue=''
                    />
                  </td>
                  <td className='td-eb'>
                    <input
                      type='text'
                      name=''
                      data-tab-index='L1'
                      placeholder=''
                      autoComplete='off'
                      className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                      defaultValue=''
                    />
                  </td>
                  <td className='td-eb'>
                    <input
                      type='text'
                      name=''
                      data-tab-index='L2'
                      placeholder=''
                      autoComplete='off'
                      className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                      defaultValue=''
                    />
                  </td>
                  <td className='td-eb'>
                    <input
                      type='text'
                      name=''
                      data-tab-index='W1'
                      placeholder=''
                      autoComplete='off'
                      className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                      defaultValue=''
                    />
                  </td>
                  <td className='td-eb'>
                    <input
                      type='text'
                      name=''
                      data-tab-index='W2'
                      placeholder=''
                      autoComplete='off'
                      className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                      defaultValue=''
                    />
                  </td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='md:flex'>
        <div className='basis-2/5 sm:px-10 px-3'>
          <div className=' mt-2'>
            <select
              id='machining-type'
              name='machining type'
              className='lock w-full border-0 py-2 px-2.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
            >
              <option className='text-gray-500' value={1}>
                Select machining type
              </option>
              <option className='text-gray-500' value={2}>
                Two
              </option>
              <option className='text-gray-500' value={3}>
                Three
              </option>
              <option className='text-gray-500' value={4}>
                Four
              </option>
              <option className='text-gray-500' value={5}>
                Five
              </option>
            </select>
          </div>
          <div className=' mt-4 mb-5'>
            <div
              className='relative max-w-md text-xs bg-[#f1f1f1] border border-black'
              x-data="{
                  search: '',
                  showSelector: false,
                  selected: {1:'Angel cut on L1-W1'},
                  options: [],
                  clearOpts() {
                      this.search = '';
                      this.showSelector = false;
                      this.options = []
                  },
                  select(id, name) {
                      this.selected[id] = name;
                      this.clearOpts();
                      $dispatch('selected', Object.keys(this.selected));
                  },
                  remove(id) {
                      delete this.selected[id]
                      $dispatch('selected', Object.keys(this.selected));
                  },
                  goSearch() {
                      if (this.search) {
                          this.options = {5: 'Carl', 6: 'Alex', 7: 'Bryan'};
                          this.showSelector = true;
                      } else {
                          this.showSelector = false;
                      }
                  },
              }"
            >
              <div className='bg-white p-2 flex gap-1 flex-wrap'>
                <template x-for='(name, id) in selected' />
                <div className='flex-1'>
                  <input
                    type='text'
                    x-model='search'
                    x-ref='search_input'
                    placeholder='Search'
                    className='w-full border-0 focus:border-0 focus:outline-none focus:ring-0 py-1 px-0'
                  />
                  <div x-show='showSelector' className='absolute left-0 bg-white z-30 w-full font-medium'>
                    <div className='p-2 space-y-1'>
                      <template x-for='(name, id) in options' />
                      <template x-if='options.length === 0' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-x-2 items-center mb-5'>
            <h3 className='mb-4 font-semibold text-gray-900 dark:text-white sm:w-[40%] w-[28%]'>Angel cut between:</h3>
            <ul className='text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white grid grid-cols-4 sm:w-[60%] w-[72%] '>
              <li className='w-full'>
                <div className='flex items-center pl-3 flex-col text-center'>
                  <label
                    htmlFor='list-radio-license'
                    className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    L1-W1
                  </label>
                  <input
                    id='list-radio-license'
                    type='radio'
                    defaultValue=''
                    name='list-radio'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                  />
                </div>
              </li>
              <li className='w-full'>
                <div className='flex items-center pl-3 flex-col text-center'>
                  <label
                    htmlFor='list-radio-id'
                    className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    L1-W2
                  </label>
                  <input
                    id='list-radio-id'
                    type='radio'
                    defaultValue=''
                    name='list-radio'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                  />
                </div>
              </li>
              <li className='w-full'>
                <div className='flex items-center pl-3 flex-col text-center'>
                  <label
                    htmlFor='list-radio-millitary'
                    className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    L2-W1
                  </label>
                  <input
                    id='list-radio-millitary'
                    type='radio'
                    defaultValue=''
                    name='list-radio'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                  />
                </div>
              </li>
              <li className='w-full'>
                <div className='flex items-center pl-3 flex-col text-center'>
                  <label
                    htmlFor='list-radio-passport'
                    className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    L2-W2
                  </label>
                  <input
                    id='list-radio-passport'
                    type='radio'
                    defaultValue=''
                    name='list-radio'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className='grid grid-cols-2 gap-x-4 mb-5'>
            <div className='flex gap-x-3 items-center'>
              <div className='text-[14px] text-[12px] sm:w-1/2 w-[78%]'>From W2</div>
              <div>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='block border border-primary py-2 px-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none w-1/2'
                />
              </div>
            </div>
            <div className='flex gap-x-3 items-center'>
              <div className='sm:text-[14px] text-[12px] sm:w-1/2 w-[78%]'>From L2</div>
              <div>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='block border border-primary py-2 px-2.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none w-1/2'
                />
              </div>
            </div>
          </div>
          <div className='flex gap-x-5 items-center mb-16'>
            <div>View</div>
            <div className='border border-black flex'>
              <div className='bg-primary text-xl text-white text-center px-4 py-5'>
                A side <br />
                <span className='text-base'>Front face</span>
              </div>
              <div className='bg-white text-xl text-black text-center px-4 py-5'>
                B side <br />
                <span className='text-base'>Front face</span>
              </div>
            </div>
          </div>
          <div className='border border-[#acacac]'>
            <img src='../imagestt/aside-view-img.webp' alt='' />
          </div>
        </div>
        <div className='basis-3/5 relative sm:mt-0 mt-[25px]'>
          <img src='../imagestt/grain-direction-img.webp' alt='' />
          <div className='sm:absolute text-center bottom-0 right-0 mb-6 mr-6'>
            <button className='text-xl text-white bg-primary px-6 py-2'>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
