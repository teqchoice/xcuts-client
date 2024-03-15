import React from 'react'

export default function Order() {
  return (
    <div>
      <section
        className='pt-20 pb-20 bg-left-top bg-cover'
        style={{ backgroundImage: 'url("assets/images/order-bg.webp")' }}
      >
        <div className='2xl:max-w-[1530px] xl:max-w-[1170px] lg:max-w-ful px-4 xl:px-0 mx-auto'>
          <div>
            {/*Tabs content*/}
            <div className='mb-6'>
              <div
                className='hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                id='tabs-cutedge'
                role='tabpanel'
                aria-labelledby='tabs-contact-tab'
                data-te-tab-active
              >
                <div className='accordion'>
                  <div className='item'>
                    <div className='accordion-header px-5 py-5 header flex items-center justify-between bg-white shadow-[0_15px_57px_rgba(93,93,93,0.18)] rounded-xl'>
                      {' '}
                      <span className='text-xl text-[#1b1a1a] font-medium'>Cutting list</span>{' '}
                      <i className='fa-solid fa-angle-right text-xl' />{' '}
                    </div>
                    <div className='accordion-content bg-white rounded-xl transition-all duration-500 max-h-full'>
                      <div className='cart-datatable overflow-auto'>
                        <table className='w-full table-fixed'>
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
                              <th colSpan={4} className='th-eb text-white text-lg uppercase pt-9 '>
                                Edgebanding details <br />
                                {/* <div className='Switch mt-[15px] px-6'>
                                  <div className='Switch__bg w-full left-0 flex justify-between bg-[#6f6f6f] rounded-md py-4 px-[10px]'>
                                    <button className='text-white'>
                                      <input className='hidden' type='radio' id='Login21' name='row1' />
                                      <label className='px-5 py-2' htmlFor='Login21'>
                                        Standard
                                      </label>
                                    </button>
                                    <button className='text-white'>
                                      <input className='hidden' type='radio' id='Login22' name='row1' />
                                      <label className='px-5 py-2' htmlFor='Login22'>
                                        Expert
                                      </label>
                                    </button>
                                  </div>
                                </div> */}
                              </th>
                              <th colSpan={4} />
                            </tr>
                            <tr>
                              <th className='th-index p-2 text-center'>#</th>
                              <th className='text-left p-2'>Material decor code / name</th>
                              <th className='text-center p-2'>
                                Thick
                                <br />
                                [mm]
                              </th>
                              <th className='text-center p-2'>
                                Length
                                <br />
                                [mm]
                              </th>
                              <th className='text-center p-2'>
                                Width
                                <br />
                                [mm]
                              </th>
                              <th className='text-center p-2'>Qty</th>
                              <th className='text-center p-2'>Part description</th>
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
                              <th className='text-left p-2'>
                                Additional
                                <br />
                                machining
                              </th>
                              <th className='text-center p-2'>
                                Spray
                                <br />
                                coating
                              </th>
                              <th className='text-center p-2'>
                                Grain
                                <br />
                                match
                              </th>
                              <th className='text-center th-actions p-2'>Actions</th>
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
                                  />
                                </div>
                              </td>
                              <td className='td-thic'>
                                <div>
                                  <input
                                    className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    type='text'
                                    name='thic'
                                  />
                                </div>
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='length'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='width'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='qty'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={3}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='description'
                                  autoComplete='off'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='L1'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='L2'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='W1'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='W2'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td align='center' className='td-index'>
                                <span className='text-base'>2</span>
                              </td>
                              <td className='td-index'>
                                <div className='input-wrapper'>
                                  <input
                                    autoComplete='off'
                                    className='border shadow-2xl border-[#cacaca] text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    placeholder='Enter decor code or name'
                                    name='material_name'
                                    type='text'
                                  />
                                </div>
                              </td>
                              <td className='td-thic'>
                                <div>
                                  <input
                                    className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    type='text'
                                    name='thic'
                                  />
                                </div>
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='length'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='width'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='qty'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={3}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='description'
                                  autoComplete='off'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='L1'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='L2'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='W1'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  name
                                  data-tab-index='W2'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td align='center' className='td-index'>
                                <span className='text-base'>3</span>
                              </td>
                              <td className='td-index'>
                                <div className='input-wrapper'>
                                  <input
                                    autoComplete='off'
                                    className='border shadow-2xl border-[#cacaca] text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    placeholder='Enter decor code or name'
                                    name='material_name'
                                    type='text'
                                  />
                                </div>
                              </td>
                              <td className='td-thic'>
                                <div>
                                  <input
                                    className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    type='text'
                                    name='thic'
                                  />
                                </div>
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='length'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='width'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='qty'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={3}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='description'
                                  autoComplete='off'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='L1'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='L2'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='W1'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='W2'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td align='center' className='td-index'>
                                <span className='text-base'>4</span>
                              </td>
                              <td className='td-index'>
                                <div className='input-wrapper'>
                                  <input
                                    autoComplete='off'
                                    className='border shadow-2xl border-[#cacaca] text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    placeholder='Enter decor code or name'
                                    name='material_name'
                                    type='text'
                                  />
                                </div>
                              </td>
                              <td className='td-thic'>
                                <div>
                                  <input
                                    className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    type='text'
                                    name='thic'
                                  />
                                </div>
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='length'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='width'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='qty'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={3}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='description'
                                  autoComplete='off'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='L1'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='L2'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='W1'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td className='td-eb'>
                                <input
                                  type='text'
                                  data-tab-index='W2'
                                  autoComplete='off'
                                  className='border border-[#cacaca] text-[15px] p-2 w-full bg-[#474747] text-white focus:border-primary focus:outline-none rounded'
                                />
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr className='mockup-row'>
                              <td>&nbsp;</td>
                              <td>
                                <button
                                  id='CLAddMoreRowsBtn'
                                  className='border w-full border-primary text-[15px] uppercase text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-all'
                                >
                                  Add more rows
                                  <div className='PlainLoader loader' style={{ display: 'none' }}>
                                    <svg className='circular' viewBox='25 25 50 50'>
                                      <circle
                                        className='path'
                                        cx={50}
                                        cy={50}
                                        r={20}
                                        fill='none'
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                      />
                                    </svg>
                                  </div>
                                </button>
                              </td>
                              <td colSpan={4}>
                                <button className='border w-full border-[#1b1a1a] text-[15px] uppercase text-[#1b1a1a] px-6 py-2 rounded hover:bg-[#1b1a1a] hover:text-white transition-all'>
                                  Upload cutting list
                                </button>
                              </td>
                              <td>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr className='mockup-row'>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td colSpan={4}>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr className='mockup-row'>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td colSpan={4}>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td className='td-eb'>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td>
                                <input style={{ visibility: 'hidden' }} type='text' disabled />
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='accordion-header px-5 py-5 header flex items-center justify-between bg-white shadow-[0_15px_57px_rgba(93,93,93,0.18)] rounded-xl'>
                      {' '}
                      <span className='text-xl text-[#1b1a1a] font-medium'>Full Sheets</span>{' '}
                      <i className='fa-solid fa-angle-right text-xl' />{' '}
                    </div>
                    <div className='accordion-content bg-white rounded-xl transition-all duration-500'>
                      <div className='cart-datatable pt-8 overflow-auto'>
                        <table className='w-full table-fixed'>
                          <colgroup>
                            <col span={1} className='col-index' />
                            <col span={1} className='col-material-wholesheet' />
                            <col span={1} className='col-thick' />
                            <col span={1} className='col-length' />
                            <col span={1} className='col-width' />
                            <col span={1} className='col-category' />
                            <col span={1} className='col-qty-wide' />
                            <col span={1} className='col-qty-afterspace' />
                            <col span={1} className='col-drilling' />
                            <col span={1} className='col-grain' />
                            <col span={1} className='col-actions' />
                          </colgroup>
                          <thead className='border-bottom'>
                            <tr>
                              <th className='th-index'>#</th>
                              <th className='text-left'>Material decor code / name</th>
                              <th className='text-left'>
                                Thick
                                <br />
                                [mm]
                              </th>
                              <th colSpan={1} className='text-left'>
                                Length
                                <br />
                                [mm]
                              </th>
                              <th colSpan={1} className='text-left'>
                                Width
                                <br />
                                [mm]
                              </th>
                              <th colSpan={1} className='text-left'>
                                Brand
                              </th>
                              <th className='text-left'>Qty</th>
                              <th />
                              <th colSpan={1} className='text-left' />
                              <th colSpan={1} />
                              <th className='text-center th-actions'>Actions</th>
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
                                  />
                                </div>
                              </td>
                              <td className='td-thic'>
                                <div>
                                  <input
                                    className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    type='text'
                                    name='thic'
                                  />
                                </div>
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded bg-transparent shadow-none border-none'
                                  name='length'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded bg-transparent shadow-none border-none'
                                  name='width'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded bg-transparent shadow-none border-none'
                                  name='qty'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={3}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='description'
                                  autoComplete='off'
                                />
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td className='actions'>&nbsp;</td>
                            </tr>
                            <tr>
                              <td align='center' className='td-index'>
                                <span className='text-base'>2</span>
                              </td>
                              <td className='td-index'>
                                <div className='input-wrapper'>
                                  <input
                                    autoComplete='off'
                                    className='border shadow-2xl border-[#cacaca] text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    placeholder='Enter decor code or name'
                                    name='material_name'
                                    type='text'
                                  />
                                </div>
                              </td>
                              <td className='td-thic'>
                                <div>
                                  <input
                                    className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    type='text'
                                    name='thic'
                                  />
                                </div>
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded bg-transparent shadow-none border-none'
                                  name='length'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded bg-transparent shadow-none border-none'
                                  name='width'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded bg-transparent shadow-none border-none'
                                  name='qty'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={3}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='description'
                                  autoComplete='off'
                                />
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td className='actions'>&nbsp;</td>
                            </tr>
                            <tr>
                              <td align='center' className='td-index'>
                                <span className='text-base'>3</span>
                              </td>
                              <td className='td-index'>
                                <div className='input-wrapper'>
                                  <input
                                    autoComplete='off'
                                    className='border shadow-2xl border-[#cacaca] text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    placeholder='Enter decor code or name'
                                    name='material_name'
                                    type='text'
                                  />
                                </div>
                              </td>
                              <td className='td-thic'>
                                <div>
                                  <input
                                    className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                    type='text'
                                    name='thic'
                                  />
                                </div>
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded bg-transparent shadow-none border-none'
                                  name='length'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded bg-transparent shadow-none border-none'
                                  name='width'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={4}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded bg-transparent shadow-none border-none'
                                  name='qty'
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                  maxLength={3}
                                  autoComplete='off'
                                />
                              </td>
                              <td>
                                <input
                                  type='text'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  name='description'
                                  autoComplete='off'
                                />
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td className='actions'>&nbsp;</td>
                            </tr>
                            <tr className='mockup-row'>
                              <td>&nbsp;</td>
                              <td>
                                <button
                                  id='CLAddMoreRowsBtn'
                                  className='border w-full border-primary text-[15px] uppercase text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-all'
                                >
                                  Add more rows
                                  <div className='PlainLoader loader' style={{ display: 'none' }}>
                                    <svg className='circular' viewBox='25 25 50 50'>
                                      <circle
                                        className='path'
                                        cx={50}
                                        cy={50}
                                        r={20}
                                        fill='none'
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                      />
                                    </svg>
                                  </div>
                                </button>
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td className='h-8' />
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='accordion-header px-5 py-5 header flex items-center justify-between bg-white shadow-[0_15px_57px_rgba(93,93,93,0.18)] rounded-xl'>
                      {' '}
                      <span className='text-xl text-[#1b1a1a] font-medium'>Edging tape</span>{' '}
                      <i className='fa-solid fa-angle-right text-xl' />{' '}
                    </div>
                    <div className='accordion-content bg-white rounded-xl transition-all duration-500'>
                      <div className='cart-datatable pt-8 overflow-auto'>
                        <table className='w-full '>
                          <colgroup>
                            <col span={1} className='col-index ' />
                            <col span={1} className='col-tape ' />
                            <col span={1} className='col-name ' />
                            <col span={1} className='col-size ' />
                            <col span={1} className='col-space-1 ' />
                            <col span={1} className='col-qty-wide ' />
                            <col span={1} className='col-actions ' />
                          </colgroup>
                          <thead className='border-bottom'>
                            <tr>
                              <th className='th-index whitespace-nowrap'>#</th>
                              <th className='text-left whitespace-nowrap'>Edging decor code</th>
                              <th className='text-left whitespace-nowrap'>Product name - decor name</th>
                              <th className='text-left whitespace-nowrap'>
                                Size
                                <br />
                                [mm]
                              </th>
                              <th className='text-left whitespace-nowrap' />
                              <th className='text-left whitespace-nowrap'>
                                Qty
                                <br />
                                [m]
                              </th>
                              <th className='text-right th-actions whitespace-nowrap'>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className='td-index whitespace-nowrap'>1</td>
                              <td colSpan={4} className='iotbe-text whitespace-nowrap'>
                                <select data-te-select-init data-te-select-visible-options={3} className='text-[14px] '>
                                  <option value={1}>
                                    In order to buy edging tape it needs to be part of the cutting list above
                                  </option>
                                </select>
                              </td>
                              <td className='whitespace-nowrap'>
                                <input
                                  type='text'
                                  name='length'
                                  className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                  autoComplete='off'
                                  disabled
                                  inputMode='numeric'
                                  pattern='[0-9]*'
                                />
                              </td>
                              <td>&nbsp;</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr className='mockup-row'>
                              <td className='whitespace-nowrap'>&nbsp;</td>
                              <td colSpan={1} className='whitespace-nowrap'>
                                <button
                                  id='CLAddMoreRowsBtn'
                                  className='border w-full border-primary text-[15px] uppercase text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-all whitespace-nowrap'
                                >
                                  Add more rows
                                  <div className='PlainLoader loader' style={{ display: 'none' }}>
                                    <svg className='circular' viewBox='25 25 50 50'>
                                      <circle
                                        className='path'
                                        cx={50}
                                        cy={50}
                                        r={20}
                                        fill='none'
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                      />
                                    </svg>
                                  </div>
                                </button>
                              </td>
                              <td className='whitespace-nowrap'>&nbsp;</td>
                              <td className='whitespace-nowrap'>&nbsp;</td>
                            </tr>
                            <tr>
                              <td className='h-8 whitespace-nowrap' />
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                id='tabs-cnc-cutting'
                role='tabpanel'
                aria-labelledby='tabs-contact-tab'
              >
                <div className='accordion'>
                  <div className='item'>
                    <div className='accordion-header p-5 header flex items-center justify-between bg-white shadow-[0_15px_57px_rgba(93,93,93,0.18)] rounded-xl'>
                      {' '}
                      <span className='text-xl text-[#1b1a1a] font-medium'>CNC cutting job</span>{' '}
                      <i className='fa-solid fa-angle-right text-xl' />{' '}
                    </div>
                    <div className='accordion-content bg-white rounded-xl transition-all duration-500 max-h-full p-5 md:p-0'>
                      <div>
                        <div className='sm:px-8 md:px-16 sm:py-8'>
                          <main className='h-full'>
                            {/* file upload modal */}
                            <article
                              aria-label='File Upload Modal'
                              className='relative h-full flex flex-col rounded-md'
                            >
                              {/* overlay */}
                              {/* <div id="overlay" class="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md">
                        <i>
                          <svg class="fill-current w-12 h-12 mb-3 text-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
                          </svg>
                        </i>
                        <p class="text-lg text-blue-700">Drop files to upload</p>
                      </div> */}
                              {/* scroll area */}
                              <section className='h-full w-full h-full flex md:flex-row flex-col md:gap-x-5 gap-x-5'>
                                <div className='md:w-1/2'>
                                  <h2 className='text-2xl font-semibold text-black mb-10'>Upload drawings </h2>
                                  <header className='border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center'>
                                    <p className='mb-3 font-semibold text-gray-900 flex flex-wrap justify-center'>
                                      {' '}
                                      <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>{' '}
                                    </p>
                                    <input id='hidden-input' type='file' multiple className='hidden' />
                                    <button
                                      id='button'
                                      className='mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none'
                                    >
                                      {' '}
                                      Upload a file{' '}
                                    </button>
                                  </header>
                                  <h1 className='pt-8 pb-3 font-semibold sm:text-lg text-gray-900'> To Upload </h1>
                                  <ul id='gallery' className='flex flex-1 flex-wrap -m-1'>
                                    <li
                                      id='empty'
                                      className='h-full w-full text-center flex flex-col items-center justify-center items-center'
                                    >
                                      {' '}
                                      <img
                                        className='mx-auto w-32'
                                        src='https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png'
                                        alt='no data'
                                      />{' '}
                                      <span className='text-small text-gray-500'>No files selected</span>{' '}
                                    </li>
                                  </ul>
                                </div>
                                <div className='md:w-1/2 mt-14 md:mt-0'>
                                  <h2 className='text-2xl font-semibold text-black mb-10'>
                                    Provide additional details explaining your CNC job
                                  </h2>
                                  <div className='input-wrapper '>
                                    <textarea
                                      placeholder='Describe in detail your CNC job including material decor code and name'
                                      name='description'
                                      id='description'
                                      cols={30}
                                      rows={8}
                                      className='border border-[#cacaca] text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                      defaultValue={''}
                                    />
                                  </div>
                                </div>
                              </section>
                              {/* sticky footer */}
                              <footer className='flex justify-end px-8 pb-8 pt-4'>
                                <button
                                  id='submit'
                                  className='rounded-sm px-3 py-1 bg-primary text-white focus:shadow-outline focus:outline-none'
                                >
                                  {' '}
                                  Submit{' '}
                                </button>
                                <button
                                  id='cancel'
                                  className='ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none'
                                >
                                  {' '}
                                  Cancel{' '}
                                </button>
                              </footer>
                            </article>
                          </main>
                        </div>
                        {/* using two similar templates for simplicity in js code */}
                        <template id='file-template' />
                        <template id='image-template' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                id='tabs-sliding'
                role='tabpanel'
                aria-labelledby='tabs-contact-tab'
              >
                <div className='accordion'>
                  <div className='item'>
                    <div className='accordion-header p-5 header flex items-center justify-between bg-white shadow-[0_15px_57px_rgba(93,93,93,0.18)] rounded-xl'>
                      {' '}
                      <span className='text-xl text-[#1b1a1a] font-medium'>Sliding doors – Set 2</span>{' '}
                      <i className='fa-solid fa-angle-right text-xl' />{' '}
                    </div>
                    <div className='accordion-content bg-white rounded-xl transition-all duration-500 max-h-full'>
                      <div className='px-[10px] md:px-8 pb-8'>
                        {/*Tabs navigation*/}
                        <ul
                          className='mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 justify-center'
                          role='tablist'
                          data-te-nav-ref
                        >
                          <li role='presentation'>
                            {' '}
                            <a
                              href='#tabs-Opening-size'
                              className='my-2 block border-x-0 border-b-2 border-t-0 border-transparent  px-4 md:px-7 pb-3.5 pt-4 text-lg md:text-xl font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                              data-te-toggle='pill'
                              data-te-target='#tabs-Opening-size'
                              data-te-nav-active
                              role='tab'
                              aria-controls='tabs-Opening-size'
                              aria-selected='true'
                            >
                              Opening size
                            </a>{' '}
                          </li>
                          <li role='presentation'>
                            {' '}
                            <a
                              href='#tabs-Frame-style'
                              className='my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-4 md:px-7 pb-3.5 pt-4 text-lg md:text-xl font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                              data-te-toggle='pill'
                              data-te-target='#tabs-Frame-style'
                              role='tab'
                              aria-controls='tabs-Frame-style'
                              aria-selected='true'
                            >
                              Frame style
                            </a>{' '}
                          </li>
                          <li role='presentation'>
                            {' '}
                            <a
                              href='#tabs-Door-design'
                              className='my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-4 md:px-7 pb-3.5 pt-4 text-lg md:text-xl font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparentfocus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                              data-te-toggle='pill'
                              data-te-target='#tabs-Door-design'
                              role='tab'
                              aria-controls='tabs-Door-design'
                              aria-selected='true'
                            >
                              Door design
                            </a>{' '}
                          </li>
                          <li role='presentation'>
                            {' '}
                            <a
                              href='#tabs-Panel-design'
                              className='my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-4 md:px-7 pb-3.5 pt-4 text-lg md:text-xl font-medium leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                              data-te-toggle='pill'
                              data-te-target='#tabs-Panel-design'
                              role='tab'
                              aria-controls='tabs-Panel-design'
                              aria-selected='true'
                            >
                              Frame style
                            </a>{' '}
                          </li>
                        </ul>
                        {/*Tabs content*/}
                        <div>
                          <div
                            className='hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                            id='tabs-Opening-size'
                            role='tabpanel'
                            aria-labelledby='tabs-Opening-size-tab'
                            data-te-tab-active
                          >
                            <div className='grid md:grid-cols-2'>
                              <div className='grid md:grid-cols-3 gap-4'>
                                <div>
                                  <div className='input-wrapper input-wrapper--filled'>
                                    <label className='text-[15px] mb-3 block'>Opening width [mm]</label>
                                    <div className=' input-error-wrapper'>
                                      <div className='input-error-tooltip' />
                                      <input
                                        type='text'
                                        className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                        name='tmpWidth'
                                        inputMode='numeric'
                                        pattern='[0-9]*'
                                        maxLength={4}
                                        autoComplete='off'
                                        placeholder='Enter size'
                                        defaultValue={1100}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className='input-wrapper input-wrapper--filled'>
                                    <label className='text-[15px] mb-3 block'>Opening height [mm]</label>
                                    <div className=' input-error-wrapper'>
                                      <div className='input-error-tooltip' />
                                      <input
                                        type='text'
                                        className='border border-[#cacaca] shadow-2xl text-[15px] p-2 w-full focus:border-primary focus:outline-none rounded'
                                        name='tmpHeight'
                                        inputMode='numeric'
                                        pattern='[0-9]*'
                                        maxLength={4}
                                        autoComplete='off'
                                        placeholder='Enter size'
                                        defaultValue={1000}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className='input-wrapper input-wrapper--filled'>
                                    <label className='text-[15px] mb-3 block'>Door number</label>
                                    <div className=' input-error-wrapper'>
                                      <select
                                        id='texture'
                                        name='texture'
                                        className='lock w-full border-0 py-2 px-2.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white rounded'
                                      >
                                        <option className='text-gray-500' value={1}>
                                          1
                                        </option>
                                        <option className='text-gray-500' value={2}>
                                          2
                                        </option>
                                        <option className='text-gray-500' value={3}>
                                          3
                                        </option>
                                        <option className='text-gray-500' value={4}>
                                          4
                                        </option>
                                        <option className='text-gray-500' value={5}>
                                          5
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='text-right flex items-center justify-center md:justify-end'>
                                <div className='w-full md:flex flex-row items-center md:justify-between mt-6 md:mt-0 md:gap-x-4'>
                                  <div className='w-full md:w-1/2 md:justify-end md:flex'>
                                    {/* <label for="">&nbsp;</label> */}
                                    <a
                                      href='#'
                                      className='text-center rounded-sm px-5 py-3 bg-primary text-white focus:shadow-outline focus:outline-none 2xl:w-[50%] block whitespace-nowrap'
                                    >
                                      {' '}
                                      Measuring guide{' '}
                                    </a>{' '}
                                  </div>
                                  <div className='w-full md:w-1/2 mt-4 md:mt-0'>
                                    {/* <label for="">&nbsp;</label> */}
                                    <div className='dropdown justify-end flex'>
                                      <button className='dropbtn w-full 2xl:w-[50%]'>Dropdown</button>
                                      <div id='myDropdown' className='dropdown-content top-full'>
                                        <a href='#home' className='block text-[15px]'>
                                          Installation Manual.pdf
                                        </a>
                                        <a href='#about' className='block text-[15px]'>
                                          Soft-Closer Installation Manual.pdf
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='pt-9'>
                              <div className='md:w-[600px] mx-auto'>
                                <p className='text-center md:flex flex-row md:space-x-6'>
                                  <button
                                    id='CLAddMoreRowsBtn'
                                    className='border w-full border-primary text-[15px] uppercase text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-all'
                                  >
                                    Delete this set of doors
                                  </button>
                                  <button className='border w-full border-[#1b1a1a] text-[15px] uppercase text-[#1b1a1a] px-6 py-2 mt-4 md:mt-0 rounded hover:bg-[#1b1a1a] hover:text-white transition-all'>
                                    Add new set of doors
                                  </button>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className='hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                            id='tabs-Frame-style'
                            role='tabpanel'
                            aria-labelledby='tabs-Frame-style-tab'
                          >
                            <div className='swiper swiperbxes LightBoxSwiper' id='swiperbxes'>
                              <div data-te-lightbox-init className='swiper-wrapper'>
                                <div className='swiper-slide relative group'>
                                  <div className='ProductCard p-[1px]'>
                                    <div className='ProductCard__inside relative border border-[#A5A7AA]'>
                                      <div className='ProductCard__title' />
                                      <div className='ProductCard__image '>
                                        <img src='assets/images/lightbox_img-01.jpg' alt='Shaker' />
                                      </div>
                                      <div className='ProductCard__footer bg-primary px-5 py-4'>
                                        <div className='top text-white text-center uppercase'>Shaker</div>
                                      </div>
                                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden'>
                                        <div className='details flex grow items-center justify-center'>
                                          <div className='overlay-title text-white'>Shaker</div>
                                        </div>
                                        <div className='buttons text-center'>
                                          <a
                                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                                            href='#shaker-modal'
                                          >
                                            Select
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id='shaker-modal'
                                      className='white-popup-block md:max-w-[800px] lg:max-w-[1000px] 2xl:max-w-[1200px] mfp-hide relative p-0'
                                    >
                                      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
                                        <i className='fa-solid fa-xmark' />
                                      </a>
                                      <div className='md:flex sm:flex-nowrap flex-wrap gap-x-5'>
                                        <div className='lg:w-2/5 md:w-1/2 bg-[#f1f1f1] px-[10px] py-10 md:p-10'>
                                          <div className='swiper glrSwiper2 h-64'>
                                            <div className='swiper-wrapper'>
                                              <div className='swiper-slide'>
                                                <a
                                                  data-fancybox='gallery-f12019'
                                                  data-caption='Decor'
                                                  href='assets/images/lightbox-glr-02.jpg'
                                                >
                                                  <img
                                                    src='assets/images/lightbox-glr-02.jpg'
                                                    className='h-[256px] w-full object-cover sm:h-auto'
                                                  />
                                                  <div className='bottom-0 absolute z-10 pb-[12px] pt-[2px] pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[50px] before:border-b-[50px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:bottom-0 before:left-0 before:-z-10 sm:w-[60%] lg:bottom-0 bottom-0 text-xl text-white'>
                                                    Decor
                                                  </div>
                                                </a>
                                              </div>
                                              <div className='swiper-slide'>
                                                <a
                                                  data-fancybox='gallery-f12019'
                                                  data-caption='Decor'
                                                  href='assets/images/lightbox-glr-02.jpg'
                                                >
                                                  <img
                                                    src='assets/images/lightbox-glr-02.jpg'
                                                    className='h-[256px] w-full object-cover sm:h-auto'
                                                  />
                                                  <div className='bottom-0 absolute z-10 pb-[12px] pt-[2px] pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[50px] before:border-b-[50px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:bottom-0 before:left-0 before:-z-10 sm:w-[60%] lg:bottom-0 bottom-0 text-xl text-white'>
                                                    Decor
                                                  </div>
                                                </a>
                                              </div>
                                              <div className='swiper-slide'>
                                                <a
                                                  data-fancybox='gallery-f12019'
                                                  data-caption='Decor'
                                                  href='assets/images/lightbox-glr-03.jpg'
                                                >
                                                  <img
                                                    src='assets/images/lightbox-glr-03.jpg'
                                                    className='h-[256px] w-full object-cover sm:h-auto'
                                                  />
                                                  <div className='bottom-0 absolute z-10 pb-[12px] pt-[2px] pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[50px] before:border-b-[50px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:bottom-0 before:left-0 before:-z-10 sm:w-[60%] lg:bottom-0 bottom-0 text-xl text-white'>
                                                    Decor
                                                  </div>
                                                </a>
                                              </div>
                                              <div className='swiper-slide'>
                                                <a
                                                  data-fancybox='gallery-f12019'
                                                  data-caption='Texture'
                                                  href='assets/images/lightbox_img-01.jpg'
                                                >
                                                  <img
                                                    src='assets/images/lightbox_img-01.jpg'
                                                    className='h-[256px] w-full object-cover sm:h-auto'
                                                  />
                                                  <div className='bottom-0 absolute z-10 pb-[12px] pt-[2px] pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[50px] before:border-b-[50px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:bottom-0 before:left-0 before:-z-10 sm:w-[60%] lg:bottom-0 bottom-0 text-xl text-white'>
                                                    Texture
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                            {/* <div class="swiper-button-next"></div>
                                  <div class="swiper-button-prev"></div> */}
                                          </div>
                                          <div className='swiper glrSwiper'>
                                            <div className='swiper-wrapper'>
                                              <div className='swiper-slide'>
                                                <img src='assets/images/lightbox-glr-01.jpg' alt='' />
                                              </div>
                                              <div className='swiper-slide'>
                                                <img src='assets/images/lightbox-glr-02.jpg' alt='' />
                                              </div>
                                              <div className='swiper-slide'>
                                                <img src='assets/images/lightbox-glr-03.jpg' alt='' />
                                              </div>
                                              <div className='swiper-slide'>
                                                <img src='assets/images/lightbox_img-01.jpg' alt='' />
                                              </div>
                                            </div>
                                          </div>
                                          <div>
                                            <h4 className='text-[34px] text-primary font-semibold mt-7 leading-8'>
                                              Shaker
                                            </h4>
                                            <p>Silver satin</p>
                                          </div>
                                        </div>
                                        <div className='lg:w-3/5 md:w-1/2 md:flex md:items-center md:justify-center'>
                                          <div className='pr-3 py-5 px-4'>
                                            <h3 className='text-black text-2xl font-semibold mb-3'>Frame colours</h3>
                                            <p className='mb-8'>
                                              The profiles we use to construct sliding doors come in several different
                                              colours. We will supply top and bottom tracks in the same colour.
                                            </p>
                                            <div>
                                              <h5 className='text-black text-2xl font-semibold mb-3'>
                                                Available colours:{' '}
                                              </h5>
                                              <div className='flex gap-4'>
                                                <div className='w-[100px] border border-[#cccccc]'>
                                                  <img src='assets/images/lightbox_img-01.jpg' alt='' />
                                                </div>
                                                <div className='w-[100px] border border-[#cccccc]'>
                                                  <img src='assets/images/lightbox_img-01.jpg' alt='' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='mt-10 lg:mr-5 sm:flex sm:justify-end'>
                                              <button className='text-xl text-white bg-primary px-6 py-2'>Save</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='swiper-slide relative group'>
                                  <div className='ProductCard p-[1px]'>
                                    <div className='ProductCard__inside relative border border-[#A5A7AA]'>
                                      <div className='ProductCard__title' />
                                      <div className='ProductCard__image '>
                                        <img src='assets/images/lightbox_img-02.jpg' alt='Shaker' />
                                      </div>
                                      <div className='ProductCard__footer bg-primary px-5 py-4'>
                                        <div className='top text-white text-center uppercase'>Palermo</div>
                                      </div>
                                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden'>
                                        <div className='details flex grow items-center justify-center'>
                                          <div className='overlay-title text-white'>Palermo</div>
                                        </div>
                                        <div className='buttons text-center'>
                                          <a
                                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                                            href='#palermo-modal'
                                          >
                                            Select
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id='palermo-modal'
                                      className='white-popup-block md:max-w-[800px] lg:max-w-[1000px] 2xl:max-w-[1200px] p-0 mfp-hide relative'
                                    >
                                      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
                                        <i className='fa-solid fa-xmark' />
                                      </a>
                                      <div className='md:flex sm:flex-nowrap flex-wrap gap-x-5'>
                                        <div className='lg:w-2/5 md:w-1/2 bg-[#f1f1f1] px-[10px] py-10 md:p-10'>
                                          <div className='swiper glrSwiper-2 h-64'>
                                            <div className='swiper-wrapper'>
                                              <div className='swiper-slide'>
                                                <a
                                                  data-fancybox='gallery-f12022'
                                                  data-caption='Decor'
                                                  href='assets/images/lightbox_img-02.jpg'
                                                >
                                                  <img
                                                    src='assets/images/lightbox_img-02.jpg'
                                                    className='h-[252px] w-full object-cover sm:h-auto'
                                                  />
                                                  <div className='bottom-0 absolute z-10 pb-[12px] pt-[2px] pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[50px] before:border-b-[50px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:bottom-0 before:left-0 before:-z-10 sm:w-[60%] lg:bottom-0 bottom-0 text-xl text-white'>
                                                    Decor
                                                  </div>
                                                </a>
                                              </div>
                                              <div className='swiper-slide'>
                                                <a
                                                  data-fancybox='gallery-f12022vvvv'
                                                  data-caption='Decor'
                                                  href='assets/images/lightbox_img-03.jpg'
                                                >
                                                  <img
                                                    src='assets/images/lightbox_img-03.jpg'
                                                    className='h-[252px] w-full object-cover sm:h-auto'
                                                  />
                                                  <div className='bottom-0 absolute z-10 pb-[12px] pt-[2px] pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[50px] before:border-b-[50px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:bottom-0 before:left-0 before:-z-10 sm:w-[60%] lg:bottom-0 bottom-0 text-xl text-white'>
                                                    Decor
                                                  </div>
                                                </a>
                                              </div>
                                              <div className='swiper-slide'>
                                                <a
                                                  data-fancybox='gallery-f12022vv'
                                                  data-caption='Decor'
                                                  href='assets/images/lightbox_img-04.jpg'
                                                >
                                                  <img
                                                    src='assets/images/lightbox_img-04.jpg'
                                                    className='h-[252px] w-full object-cover sm:h-auto'
                                                  />
                                                  <div className='bottom-0 absolute z-10 pb-[12px] pt-[2px] pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[50px] before:border-b-[50px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:bottom-0 before:left-0 before:-z-10 sm:w-[60%] lg:bottom-0 bottom-0 text-xl text-white'>
                                                    Decor
                                                  </div>
                                                </a>
                                              </div>
                                              <div className='swiper-slide'>
                                                <a
                                                  data-fancybox='gallery-f12022'
                                                  data-caption='Texture'
                                                  href='assets/images/lightbox_img-01.jpg'
                                                >
                                                  <img
                                                    src='assets/images/lightbox_img-01.jpg'
                                                    className='h-[252px] w-full object-cover sm:h-auto'
                                                  />
                                                  <div className='bottom-0 absolute z-10 pb-[12px] pt-[2px] pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[50px] before:border-b-[50px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:bottom-0 before:left-0 before:-z-10 sm:w-[60%] lg:bottom-0 bottom-0 text-xl text-white'>
                                                    Texture
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                            {/* <div class="swiper-button-next"></div>
                                  <div class="swiper-button-prev"></div> */}
                                          </div>
                                          <div className='swiper glrSwiper-1'>
                                            <div className='swiper-wrapper'>
                                              <div className='swiper-slide'>
                                                <img src='assets/images/lightbox_img-02.jpg' alt='' />
                                              </div>
                                              <div className='swiper-slide'>
                                                <img src='assets/images/lightbox_img-03.jpg' alt='' />
                                              </div>
                                              <div className='swiper-slide'>
                                                <img src='assets/images/lightbox_img-04.jpg' alt='' />
                                              </div>
                                              <div className='swiper-slide'>
                                                <img src='assets/images/lightbox_img-01.jpg' alt='' />
                                              </div>
                                            </div>
                                          </div>
                                          <div>
                                            <h4 className='text-[34px] text-primary font-semibold mt-7 leading-8'>
                                              Palermo
                                            </h4>
                                            <p>Silver satin</p>
                                          </div>
                                        </div>
                                        <div className='lg:w-3/5 md:w-1/2 md:flex md:items-center md:justify-center'>
                                          <div className='pr-3 py-5 px-4'>
                                            <h3 className='text-black text-2xl font-semibold mb-3'>Frame colours</h3>
                                            <p className='mb-8'>
                                              The profiles we use to construct sliding doors come in several different
                                              colours. We will supply top and bottom tracks in the same colour.
                                            </p>
                                            <div>
                                              <h5 className='text-black text-2xl font-semibold mb-3'>
                                                Available colours:{' '}
                                              </h5>
                                              <div className='flex gap-4'>
                                                <div className='lg:w-[100px] border border-[#cccccc]'>
                                                  <img src='assets/images/lightbox_img-02.jpg' alt='' />
                                                </div>
                                                <div className='lg:w-[100px] border border-[#cccccc]'>
                                                  <img src='assets/images/lightbox_img-03.jpg' alt='' />
                                                </div>
                                                <div className='lg:w-[100px] border border-[#cccccc]'>
                                                  <img src='assets/images/lightbox_img-04.jpg' alt='' />
                                                </div>
                                                <div className='lg:w-[100px] border border-[#cccccc]'>
                                                  <img src='assets/images/lightbox_img-5.jpg' alt='' />
                                                </div>
                                                <div className='lg:w-[100px] border border-[#cccccc]'>
                                                  <img src='assets/images/lightbox_img-6.jpg' alt='' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='mt-10 lg:mr-5 sm:flex sm:justify-end'>
                                              <button className='text-xl text-white bg-primary px-6 py-2'>Save</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='swiper-slide relative group'>
                                  <div className='ProductCard p-[1px]'>
                                    <div className='ProductCard__inside relative border border-[#A5A7AA]'>
                                      <div className='ProductCard__title' />
                                      <div className='ProductCard__image'>
                                        <img src='assets/images/lightbox_img-02.jpg' alt='Shaker' />
                                      </div>
                                      <div className='ProductCard__footer bg-primary px-5 py-4'>
                                        <div className='top text-white text-center uppercase'>Supreme</div>
                                      </div>
                                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden'>
                                        <div className='details flex grow items-center justify-center'>
                                          <div className='overlay-title text-white'>Supreme</div>
                                        </div>
                                        <div className='buttons text-center'>
                                          <a
                                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                                            href='#supreme-modal'
                                          >
                                            Select
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id='supreme-modal'
                                      className='white-popup-block 2xl:max-w-[1200px] mfp-hide relative'
                                    >
                                      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
                                        <i className='fa-solid fa-xmark' />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className='swiper-slide relative group'>
                                  <div className='ProductCard p-[1px]'>
                                    <div className='ProductCard__inside relative border border-[#A5A7AA]'>
                                      <div className='ProductCard__title' />
                                      <div className='ProductCard__image '>
                                        <img src='assets/images/lightbox_img-02.jpg' alt='Shaker' />
                                      </div>
                                      <div className='ProductCard__footer bg-primary px-5 py-4'>
                                        <div className='top text-white text-center uppercase'>Prestige</div>
                                      </div>
                                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden'>
                                        <div className='details flex grow items-center justify-center'>
                                          <div className='overlay-title text-white'>Prestige</div>
                                        </div>
                                        <div className='buttons text-center'>
                                          <a
                                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                                            href='#prestige-modal'
                                          >
                                            Select
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id='prestige-modal'
                                      className='white-popup-block 2xl:max-w-[1200px] mfp-hide relative'
                                    >
                                      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
                                        <i className='fa-solid fa-xmark' />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="swiper-button-next after:text-black after:bg-white after:rounded-sm after:px-2 after:py-2 after:text-xl after:font-bold after:content-['next']" />
                              <div className="swiper-button-prev after:text-black after:bg-white after:rounded-sm after:px-2 after:py-2 after:text-xl after:font-bold after:content-['prev']" />
                            </div>
                          </div>
                          <div
                            className='hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                            id='tabs-Door-design'
                            role='tabpanel'
                            aria-labelledby='tabs-Door-design-tab'
                          >
                            <div className='swiper LightBoxSwipers' id='swiperDoor'>
                              <div data-te-lightbox-init className='swiper-wrapper'>
                                <div className='swiper-slide relative group'>
                                  <div className='ProductCard p-[1px]'>
                                    <div className='ProductCard__inside relative border border-[#A5A7AA]'>
                                      <div className='ProductCard__title' />
                                      <div className='ProductCard__image '>
                                        <img src='assets/images/door-img-01.jpg' alt='Shaker' />
                                      </div>
                                      <div className='ProductCard__footer bg-primary px-5 py-4'>
                                        <div className='top text-white text-center uppercase'>Single panel</div>
                                      </div>
                                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden'>
                                        <div className='details flex grow items-center justify-center'>
                                          <div className='overlay-title text-white'>Single panel</div>
                                        </div>
                                        <div className='buttons text-center'>
                                          <a
                                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                                            href='#single-panel'
                                          >
                                            Select
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id='single-panel'
                                      className='white-popup-block md:max-w-[800px] lg:max-w-[1000px] 2xl:max-w-[1200px] mfp-hide relative p-0'
                                    >
                                      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
                                        <i className='fa-solid fa-xmark' />
                                      </a>
                                      <div className='md:flex sm:flex-nowrap flex-wrap gap-x-5'>
                                        <div className='lg:w-2/5 md:w-1/2 bg-[#f1f1f1] px-[10px] py-10 md:p-10 flex items-center'>
                                          <div>
                                            <img src='assets/images/single-door-img.png' alt='' />
                                          </div>
                                        </div>
                                        <div className='lg:w-3/5 md:w-1/2 md:flex md:items-center md:justify-start'>
                                          <div className='py-5 px-4'>
                                            <h3 className='text-black text-2xl font-semibold mb-3'>Door size</h3>
                                            <div>
                                              <div className='flex justify-between mb-2 gap-x-7'>
                                                <span className='text-black text-lg'>
                                                  {' '}
                                                  Height (openning height – 40mm):
                                                </span>{' '}
                                                <span className='text-black'>960mm</span>
                                              </div>
                                              <div className='flex justify-between mb-2'>
                                                <span className='text-black text-lg'> Width:</span>{' '}
                                                <span className='text-black'>585mm</span>
                                              </div>
                                            </div>
                                            <h3 className='text-black text-2xl font-semibold mb-3 mt-10'>
                                              Panel size:{' '}
                                            </h3>
                                            <p className='text-black'>
                                              You can adjust each door panel size to better suit your design.{' '}
                                            </p>
                                            <p className='text-black'>Minimum panel height is 200mm.</p>
                                            <p className='text-black'>Maximum panel height is 2440mm.</p>
                                            <p className='text-black'>Minimum panel width is 100mm.</p>
                                            <div className='mt-10 lg:mr-5 sm:flex sm:justify-start'>
                                              <button className='text-xl text-white bg-primary px-6 py-2'>Save</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='swiper-slide relative group'>
                                  <div className='ProductCard p-[1px]'>
                                    <div className='ProductCard__inside relative border border-[#A5A7AA]'>
                                      <div className='ProductCard__title' />
                                      <div className='ProductCard__image '>
                                        <img src='assets/images/door-img-02.jpg' alt='Shaker' />
                                      </div>
                                      <div className='ProductCard__footer bg-primary px-5 py-4'>
                                        <div className='top text-white text-center uppercase'>Two panels</div>
                                      </div>
                                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden'>
                                        <div className='details flex grow items-center justify-center'>
                                          <div className='overlay-title text-white'>Two panels</div>
                                        </div>
                                        <div className='buttons text-center'>
                                          <a
                                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                                            href='#two-panels'
                                          >
                                            Select
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id='two-panels'
                                      className='white-popup-block md:max-w-[800px] lg:max-w-[1000px] 2xl:max-w-[1200px] p-0 mfp-hide relative'
                                    >
                                      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
                                        <i className='fa-solid fa-xmark' />
                                      </a>
                                      ssdfs
                                    </div>
                                  </div>
                                </div>
                                <div className='swiper-slide relative group'>
                                  <div className='ProductCard p-[1px]'>
                                    <div className='ProductCard__inside relative border border-[#A5A7AA]'>
                                      <div className='ProductCard__title' />
                                      <div className='ProductCard__image '>
                                        <img src='assets/images/door-img-03.jpg' alt='Shaker' />
                                      </div>
                                      <div className='ProductCard__footer bg-primary px-5 py-4'>
                                        <div className='top text-white text-center uppercase'>Three panels</div>
                                      </div>
                                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden'>
                                        <div className='details flex grow items-center justify-center'>
                                          <div className='overlay-title text-white'>Three panels</div>
                                        </div>
                                        <div className='buttons text-center'>
                                          <a
                                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                                            href='#three-panels'
                                          >
                                            Select
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id='three-panels'
                                      className='white-popup-block 2xl:max-w-[1200px] mfp-hide relative'
                                    >
                                      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
                                        <i className='fa-solid fa-xmark' />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className='swiper-slide relative group'>
                                  <div className='ProductCard p-[1px]'>
                                    <div className='ProductCard__inside relative border border-[#A5A7AA]'>
                                      <div className='ProductCard__title' />
                                      <div className='ProductCard__image '>
                                        <img src='assets/images/door-img-04.jpg' alt='Shaker' />
                                      </div>
                                      <div className='ProductCard__footer bg-primary px-5 py-4'>
                                        <div className='top text-white text-center uppercase'>Four panels</div>
                                      </div>
                                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden'>
                                        <div className='details flex grow items-center justify-center'>
                                          <div className='overlay-title text-white'>Four panels</div>
                                        </div>
                                        <div className='buttons text-center'>
                                          <a
                                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                                            href='#four-panels'
                                          >
                                            Select
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id='four-panels'
                                      className='white-popup-block 2xl:max-w-[1200px] mfp-hide relative'
                                    >
                                      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
                                        <i className='fa-solid fa-xmark' />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className='swiper-slide relative group'>
                                  <div className='ProductCard p-[1px]'>
                                    <div className='ProductCard__inside relative border border-[#A5A7AA]'>
                                      <div className='ProductCard__title' />
                                      <div className='ProductCard__image '>
                                        <img src='assets/images/door-img-05.jpg' alt='Shaker' />
                                      </div>
                                      <div className='ProductCard__footer bg-primary px-5 py-4'>
                                        <div className='top text-white text-center uppercase'>Five panels</div>
                                      </div>
                                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden'>
                                        <div className='details flex grow items-center justify-center'>
                                          <div className='overlay-title text-white'>Five panels</div>
                                        </div>
                                        <div className='buttons text-center'>
                                          <a
                                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                                            href='#five-panels'
                                          >
                                            Select
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id='five-panels'
                                      className='white-popup-block 2xl:max-w-[1200px] mfp-hide relative'
                                    >
                                      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
                                        <i className='fa-solid fa-xmark' />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="swiper-button-next after:text-black after:bg-white after:rounded-sm after:px-2 after:py-2 after:text-xl after:font-bold after:content-['next']" />
                              <div className="swiper-button-prev after:text-black after:bg-white after:rounded-sm after:px-2 after:py-2 after:text-xl after:font-bold after:content-['prev']" />
                            </div>
                          </div>
                          <div
                            className='hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                            id='tabs-Panel-design'
                            role='tabpanel'
                            aria-labelledby='tabs-Frame-Panel-design'
                          >
                            <div className='swiper LightBoxSwipers' id='swiperPanel'>
                              <div data-te-lightbox-init className='swiper-wrapper'>
                                <div className='swiper-slide relative group'>
                                  <div className='ProductCard p-[1px]'>
                                    <div className='ProductCard__inside relative border border-[#A5A7AA]'>
                                      <div className='ProductCard__title' />
                                      <div className='ProductCard__image flex justify-center'>
                                        <img src='assets/images/panel-img-01.png' alt='Shaker' />
                                      </div>
                                      <div className='ProductCard__footer bg-primary px-5 py-4'>
                                        <div className='top text-white text-center uppercase'>Coloured glass</div>
                                      </div>
                                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden'>
                                        <div className='details flex grow items-center justify-center'>
                                          <div className='overlay-title text-white'>Coloured glass</div>
                                        </div>
                                        <div className='buttons text-center'>
                                          <a
                                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                                            href='#coloured-glass'
                                          >
                                            Explore this range
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id='coloured-glass'
                                      className='white-popup-block md:max-w-[800px] lg:max-w-[1000px] 2xl:max-w-[1200px] mfp-hide relative p-0'
                                    >
                                      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
                                        <i className='fa-solid fa-xmark' />
                                      </a>
                                      <div className='md:flex sm:flex-nowrap flex-wrap gap-x-5'>
                                        <div className='lg:w-2/5 md:w-1/2 bg-[#f1f1f1] px-[10px] py-10 md:p-10 flex items-center'>
                                          <div className='flex flex-col sm:flex-nowrap sm:flex-wrap gap-x-5 max-auto'>
                                            <div>
                                              <a
                                                data-fancybox='gallery-f120223'
                                                href='assets/images/panel-design-img-01.jpg'
                                              >
                                                <img
                                                  src='../images/panel-design-img-01.jpg'
                                                  className='w-full object-cover sm:h-auto'
                                                />
                                              </a>
                                            </div>
                                            <div>
                                              <h4 className='text-[34px] text-primary font-semibold mt-7 leading-8'>
                                                Silver Mirror
                                              </h4>
                                              <p>Square meter price: £15.00 plus VAT</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className='lg:w-3/5 md:w-1/2 md:flex md:items-center md:justify-start'>
                                          <div className='py-5 px-4'>
                                            <h3 className='text-black text-2xl font-semibold mb-3'>Glass panels</h3>
                                            <p>
                                              All our glass is 4mm backed with safety ﬁlm meeting BS EN 12600 2B2 safety
                                              class. The biggest available single glass panel size is 2440mm in height.
                                            </p>
                                            <h3 className='text-black text-2xl font-semibold mb-3 mt-10'>
                                              Glass colour
                                            </h3>
                                            <p className='text-black'>
                                              You can specify each panel’s colour to suit your design.
                                            </p>
                                            <p></p>
                                            <p>
                                              Glass is divided into several different categories and is priced per
                                              square meter.
                                            </p>
                                            <div>
                                              {/*Tabs navigation*/}
                                              <ul
                                                className='mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0'
                                                role='tablist'
                                                data-te-nav-ref
                                              >
                                                <li role='presentation'>
                                                  <a
                                                    href='#tabs-Mirrors'
                                                    className='my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-4 lg:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                                                    data-te-toggle='pill'
                                                    data-te-target='#tabs-Mirrors'
                                                    data-te-nav-active
                                                    role='tab'
                                                    aria-controls='tabs-Mirrors'
                                                    aria-selected='true'
                                                  >
                                                    Mirrors
                                                  </a>
                                                </li>
                                                <li role='presentation'>
                                                  <a
                                                    href='#tabs-Colours'
                                                    className='my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-4 lg:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                                                    data-te-toggle='pill'
                                                    data-te-target='#tabs-Colours'
                                                    role='tab'
                                                    aria-controls='tabs-Colours'
                                                    aria-selected='false'
                                                  >
                                                    Colours
                                                  </a>
                                                </li>
                                                <li role='presentation'>
                                                  <a
                                                    href='#tabs-Premium-colours'
                                                    className='my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-4 lg:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                                                    data-te-toggle='pill'
                                                    data-te-target='#tabs-Premium-colours'
                                                    role='tab'
                                                    aria-controls='tabs-Premium-colours'
                                                    aria-selected='false'
                                                  >
                                                    Premium colours
                                                  </a>
                                                </li>
                                              </ul>
                                              {/*Tabs content*/}
                                              <div className='mb-6'>
                                                <div
                                                  className='hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                                                  id='tabs-Mirrors'
                                                  role='tabpanel'
                                                  aria-labelledby='tabs-Mirrors-tab'
                                                  data-te-tab-active
                                                >
                                                  <div className='flex gap-4'>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-design-img-01.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Silver Mirror</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-design-img-02.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Grey Mirror</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-design-img-03.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Bronze Mirror</div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className='hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                                                  id='tabs-Colours'
                                                  role='tabpanel'
                                                  aria-labelledby='tabs-Colours-tab'
                                                >
                                                  <div className='flex gap-4'>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-01.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Cashmere</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-02.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Luminous Red</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-03.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Classic Brown</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-04.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Classic Black</div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className='hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                                                  id='tabs-Premium-colours'
                                                  role='tabpanel'
                                                  aria-labelledby='tabs-Premium-colours-tab'
                                                >
                                                  <div className='flex gap-4'>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-01.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Cashmere</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-02.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Luminous Red</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-03.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Classic Brown</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-04.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Classic Black</div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='mt-10 lg:mr-5 sm:flex sm:justify-start'>
                                              <button className='text-xl text-white bg-primary px-6 py-2'>Save</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='swiper-slide relative group'>
                                  <div className='ProductCard p-[1px]'>
                                    <div className='ProductCard__inside relative border border-[#A5A7AA]'>
                                      <div className='ProductCard__title' />
                                      <div className='ProductCard__image flex justify-center'>
                                        <img src='assets/images/panel-img-02.png' alt='Shaker' />
                                      </div>
                                      <div className='ProductCard__footer bg-primary px-5 py-4'>
                                        <div className='top text-white text-center uppercase'>Decorative boards</div>
                                      </div>
                                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden'>
                                        <div className='details flex grow items-center justify-center'>
                                          <div className='overlay-title text-white'>Decorative boards</div>
                                        </div>
                                        <div className='buttons text-center'>
                                          <a
                                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                                            href='#decorative-boards'
                                          >
                                            Explore this range
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id='decorative-boards'
                                      className='white-popup-block md:max-w-[800px] lg:max-w-[1000px] 2xl:max-w-[1200px] p-0 mfp-hide relative'
                                    >
                                      <a className='popup-modal-dismiss absolute top-0 right-2' href='#'>
                                        <i className='fa-solid fa-xmark' />
                                      </a>
                                      <div className='md:flex sm:flex-nowrap flex-wrap gap-x-5'>
                                        <div className='lg:w-2/5 md:w-1/2 bg-[#f1f1f1] px-[10px] py-10 md:p-10 flex items-center'>
                                          <div className='flex flex-col sm:flex-nowrap sm:flex-wrap gap-x-5 max-auto'>
                                            <div>
                                              <a data-fancybox='gallery-f120224' href='assets/images/F120-PM.jpg'>
                                                <img
                                                  src='assets/images/F120-PM.jpg'
                                                  className='w-full object-cover sm:h-auto'
                                                />
                                              </a>
                                            </div>
                                            <div>
                                              <h4 className='text-[34px] text-primary font-semibold mt-7 mb-2 leading-8'>
                                                Egger F120 PM
                                              </h4>
                                              <div className='flex justify-between'>
                                                <p>Light Grey Metal Rock</p>{' '}
                                                <span>
                                                  <i className='fa-regular fa-circle text-[15px]' /> 19mm
                                                </span>
                                              </div>
                                              <p>Sheet size: 2800 x 2070mm</p>
                                              <p className='mt-6 mb-2'>Sheet price: £263.00 plus VAT</p>
                                              <h5 className='mb-2 font-semibold'>Panel grain direction</h5>
                                              <img src='assets/images/cross-img.webp' alt='' />
                                            </div>
                                          </div>
                                        </div>
                                        <div className='lg:w-3/5 md:w-1/2 md:flex md:items-center md:justify-start'>
                                          <div className='py-5 px-4'>
                                            <h3 className='text-black text-2xl font-semibold mb-3'>
                                              Decorative board panels
                                            </h3>
                                            <p className='text-black'>
                                              You can specify each panel’s decor to suit your design.{' '}
                                            </p>
                                            <p></p>
                                            <p>
                                              Panels are priced based on a number of sheets your design will require.
                                            </p>
                                            <div className='mt-3'>
                                              <p className='mb-2'>
                                                Browse decors by brand or search for a speciﬁc decor
                                              </p>
                                              <input
                                                placeholder='Enter decor code or name'
                                                type='text'
                                                className='w-full border border-[#f1f1f1] rounded-md text-[14px] px-6 py-3'
                                              />
                                            </div>
                                            <div>
                                              {/*Tabs navigation*/}
                                              <ul
                                                className='mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0'
                                                role='tablist'
                                                data-te-nav-ref
                                              >
                                                <li role='presentation'>
                                                  <a
                                                    href='#tabs-Mirrors'
                                                    className='my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-4 lg:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                                                    data-te-toggle='pill'
                                                    data-te-target='#tabs-Mirrors'
                                                    data-te-nav-active
                                                    role='tab'
                                                    aria-controls='tabs-Mirrors'
                                                    aria-selected='true'
                                                  >
                                                    Mirrors
                                                  </a>
                                                </li>
                                                <li role='presentation'>
                                                  <a
                                                    href='#tabs-Colours'
                                                    className='my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-4 lg:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                                                    data-te-toggle='pill'
                                                    data-te-target='#tabs-Colours'
                                                    role='tab'
                                                    aria-controls='tabs-Colours'
                                                    aria-selected='false'
                                                  >
                                                    Colours
                                                  </a>
                                                </li>
                                                <li role='presentation'>
                                                  <a
                                                    href='#tabs-Premium-colours'
                                                    className='my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-4 lg:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                                                    data-te-toggle='pill'
                                                    data-te-target='#tabs-Premium-colours'
                                                    role='tab'
                                                    aria-controls='tabs-Premium-colours'
                                                    aria-selected='false'
                                                  >
                                                    Premium colours
                                                  </a>
                                                </li>
                                              </ul>
                                              {/*Tabs content*/}
                                              <div className='mb-6'>
                                                <div
                                                  className='hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                                                  id='tabs-Mirrors'
                                                  role='tabpanel'
                                                  aria-labelledby='tabs-Mirrors-tab'
                                                  data-te-tab-active
                                                >
                                                  <div className='flex gap-4'>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-design-img-01.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Silver Mirror</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-design-img-02.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Grey Mirror</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-design-img-03.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Bronze Mirror</div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className='hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                                                  id='tabs-Colours'
                                                  role='tabpanel'
                                                  aria-labelledby='tabs-Colours-tab'
                                                >
                                                  <div className='flex gap-4'>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-01.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Cashmere</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-02.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Luminous Red</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-03.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Classic Brown</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-04.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Classic Black</div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className='hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                                                  id='tabs-Premium-colours'
                                                  role='tabpanel'
                                                  aria-labelledby='tabs-Premium-colours-tab'
                                                >
                                                  <div className='flex gap-4'>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-01.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Cashmere</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-02.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Luminous Red</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-03.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Classic Brown</div>
                                                    </div>
                                                    <div className='lg:w-[100px]'>
                                                      <img src='assets/images/panel-color-img-04.jpg' alt='' />
                                                      <div className='text-[13px] text-center'>Classic Black</div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className='mt-10 lg:mr-5 sm:flex sm:justify-start'>
                                              <button className='text-xl text-white bg-primary px-6 py-2'>Save</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block'
                id='tabs-furnitures'
                role='tabpanel'
                aria-labelledby='tabs-furnitures-tab'
              >
                <div className='md:grid md:grid-cols-4 md:gap-x-5'>
                  <div className='ProductCard furnituresProduct'>
                    <div className='relative border border-[#A5A7AA] group'>
                      <div>
                        <img src='assets/images/furniture-img-01.webp' alt='' />
                      </div>
                      <div className='bg-primary px-5 py-4 text-white'>
                        <span className='font-semibold'>Blum</span>
                        <p>ClipTop Hinge 110° - Sprung - ScrewOn</p>
                      </div>
                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden group-hover:'>
                        <div className='details flex grow items-center justify-center'>
                          <div className='overlay-title text-white text-center'>
                            <span className='font-semibold'>Blum</span>
                            <p>ClipTop Hinge 110° - Sprung - ScrewOn</p>
                          </div>
                        </div>
                        <div className='buttons text-center'>
                          <a
                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                            href='#lightGreyMetalRock'
                          >
                            Explore this range
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='px-5 py-4 text-black'>
                      <p>Concealed cabinet hinge for standard application with door thicknesses of up to 24 mm</p>
                      <p className='mt-10'>
                        From: <span className='text-2xl font-medium'>£1.42</span>
                      </p>
                    </div>
                  </div>
                  <div className='ProductCard furnituresProduct'>
                    <div className='relative border border-[#A5A7AA] group'>
                      <div>
                        <img src='assets/images/furniture-img-01.webp' alt='' />
                      </div>
                      <div className='bg-primary px-5 py-4 text-white'>
                        <span className='font-semibold'>Blum</span>
                        <p>ClipTop Hinge 110° - Sprung - ScrewOn</p>
                      </div>
                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden group-hover:'>
                        <div className='details flex grow items-center justify-center'>
                          <div className='overlay-title text-white text-center'>
                            <span className='font-semibold'>Blum</span>
                            <p>ClipTop Hinge 110° - Sprung - ScrewOn</p>
                          </div>
                        </div>
                        <div className='buttons text-center'>
                          <a
                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                            href='#lightGreyMetalRock'
                          >
                            Explore this range
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='px-5 py-4 text-black'>
                      <p>Concealed cabinet hinge for standard application with door thicknesses of up to 24 mm</p>
                      <p className='mt-10'>
                        From: <span className='text-2xl font-medium'>£2.74</span>
                      </p>
                    </div>
                  </div>
                  <div className='ProductCard furnituresProduct'>
                    <div className='relative border border-[#A5A7AA] group'>
                      <div>
                        <img src='assets/images/furniture-img-01.webp' alt='' />
                      </div>
                      <div className='bg-primary px-5 py-4 text-white'>
                        <span className='font-semibold'>Blum</span>
                        <p>ClipTop Hinge 110° - Sprung - ScrewOn</p>
                      </div>
                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden group-hover:'>
                        <div className='details flex grow items-center justify-center'>
                          <div className='overlay-title text-white text-center'>
                            <span className='font-semibold'>Blum</span>
                            <p>ClipTop Hinge 110° - Sprung - ScrewOn</p>
                          </div>
                        </div>
                        <div className='buttons text-center'>
                          <a
                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                            href='#lightGreyMetalRock'
                          >
                            Explore this range
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='px-5 py-4 text-black'>
                      <p>Concealed cabinet hinge for standard application with door thicknesses of up to 24 mm</p>
                      <p className='mt-10'>
                        From: <span className='text-2xl font-medium'>£3.05</span>
                      </p>
                    </div>
                  </div>
                  <div className='ProductCard furnituresProduct'>
                    <div className='relative border border-[#A5A7AA] group'>
                      <div>
                        <img src='assets/images/furniture-img-01.webp' alt='' />
                      </div>
                      <div className='bg-primary px-5 py-4 text-white'>
                        <span className='font-semibold'>Blum</span>
                        <p>ClipTop Hinge 110° - Sprung - ScrewOn</p>
                      </div>
                      <div className='ProductCard__overlay absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-70 hidden group-hover:'>
                        <div className='details flex grow items-center justify-center'>
                          <div className='overlay-title text-white text-center'>
                            <span className='font-semibold'>Blum</span>
                            <p>ClipTop Hinge 110° - Sprung - ScrewOn</p>
                          </div>
                        </div>
                        <div className='buttons text-center'>
                          <a
                            className='popup-modal bg-black px-6 py-1.5 rounded text-white text-[15px] uppercase hover:text-white hover:no-underline'
                            href='#lightGreyMetalRock'
                          >
                            Explore this range
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='px-5 py-4 text-black'>
                      <p>Concealed cabinet hinge for standard application with door thicknesses of up to 24 mm</p>
                      <p className='mt-10'>
                        From: <span className='text-2xl font-medium'>£3.27</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
