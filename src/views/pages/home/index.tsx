
export default function HomePage() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <div className='xcutsHero'>
        {/* <!-- Swiper --> */}
        <div className='swiper mySwiper'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide after:absolute after:content-normal after:bottom-0 after:w-[200px] after:bg-inherit after:right-0 after:skew-y-[144deg] after:pb-36 after:origin-[100%_100%]'>
              <img src='images/slide-01.webp' alt='' className='h-[365px] object-cover' />
            </div>
            {/* <div className='swiper-slide after:absolute after:content-normal after:bottom-0 after:w-[200px] after:bg-inherit after:right-0 after:skew-y-[144deg] after:pb-36 after:origin-[100%_100%]'>
              <img src='images/slide-02.webp' alt='' className='h-[365px] object-cover' />
            </div> */}
          </div>
          {/* <div className="swiper-button-next text-primary after:text-3xl after:content-['next']"></div>
          <div className="swiper-button-prev text-primary after:text-3xl after:content-['prev']"></div> */}
        </div>
      </div>
      {/* <!-- Hero Section End--> */}

      {/* <!-- Hero below Block --> */}
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-4xl'>
              <span className='font-bold text-primary inline-block'>X</span>CUTS
            </div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 uppercase px-4'>
                One-Stop Shop for Cut-to-Size MDF
              </h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                We specialise in delivering comprehensive solutions and top-tier products catering to furniture makers,
                interior designers, and general builders. Our commitment to exceptional customer service goes hand in
                hand with our dedication to providing products of unparalleled quality.
              </p>
              <p>We're proud to position ourselves as industry leaders, driven by our passion and expertise.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero below Block End--> */}

      {/* <!-- Service --> */}
      <section className='bg-primary py-11'>
        <div className='px-4 sm:container flex justify-center'>
          <div className='text-center w-[170px] md:w-[540px] skew-y-0 skew-x-[35deg] relative'>
            <div className='w-10 h-11 md:w-20 bg-white absolute -left-14 md:-left-24 bottom-0'></div>
            <div className='w-10 h-11 md:w-20 bg-white absolute -right-14 md:-right-24 top-0'></div>
            <h2 className='text-2xl md:text-4xl text-white -skew-x-[35deg]'>Our Services</h2>
          </div>
        </div>
      </section>

      <section className='bg-neutral-100'>
        <div className=''>
          <div className='md:flex'>
            <div className='basis-[52.12%]'>
              <div>
                <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:-bottom-[1px] before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                  <img
                    className='md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                    src='images/panels-cut.webp'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pl-16'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'>Panels cut to size</h2>
                <p>
                  Select any decorative board from our vast range of decors, and we will cut it into smaller size
                  panels, as specified by you.
                </p>
                <div className='flex gap-4'>
                  <a
                    href='#'
                    className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Find out more
                    <img className='w-9 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                  <a
                    href='#'
                    className='bg-primary px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    Shop
                    <img className='w-9 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='md:flex'>
            <div className='basis-[52.12%] order-1'>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
                <img
                  className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                  src='images/panel-edtgebanding.webp'
                  alt=''
                />
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:ml-auto gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pr-16'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'>Panel edgebanding</h2>
                <p>
                  Let us know which panel edges to finish with an edging tape, and we will do it for you with our PUR
                  glue equipped machines.
                </p>
                <div className='flex gap-4'>
                  <a
                    href='#'
                    className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Find out more
                    <img className='w-9 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                  <a
                    href='#'
                    className='bg-primary px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    Shop
                    <img className='w-9 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='md:flex'>
            <div className='basis-[52.12%]'>
              <div>
                <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                  <img
                    className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                    src='images/cnc-cutting.webp'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pl-16'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'>CNC cutting</h2>
                <p>
                  Entrust our CNC cutting department with unusual shape panel cutting, decorative pattern routing, hole
                  drilling and grooving jobs.
                </p>
                <div className='flex gap-4'>
                  <a
                    href='#'
                    className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Find out more
                    <img className='w-9 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                  <a
                    href='#'
                    className='bg-primary px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    Shop
                    <img className='w-9 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='md:flex'>
            <div className='basis-[52.12%] order-1'>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
                <img
                  className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                  src='images/spray-painting.webp'
                  alt=''
                />
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:ml-auto gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pr-16'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'>Spray painting</h2>
                <p>
                  We can spray coat your panels to a white primer, clear lacquer or any colour paint finish, all of
                  which you can easily book online on our website.
                </p>
                <div className='flex gap-4'>
                  <a
                    href='#'
                    className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Find out more
                    <img className='w-9 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                  <a
                    href='#'
                    className='bg-primary px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    Shop
                    <img className='w-9 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Service End--> */}

      {/* <!-- Our Porducts --> */}
      <section className='py-20'>
        <div className='px-4 sm:container max-w-full xl:px-16 xxl:px-32'>
          <div className='text-center'>
            <h2 className='font-normal text-5xl mb-14'>Our Products</h2>
          </div>

          <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-4'>
            <div className='basis-[100%] md:basis-[33.333%] xl:basis-[40%]'>
              <div className='our__prdts__item relative overflow-hidden'>
                <img
                  className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                  src='images/our-product-01.webp'
                  alt=''
                />
                <div className='pr-11'>
                  <div className='prdts__itembox bg-neutral-600 pb-16 absolute -bottom-full transition-all duration-1000'>
                    <div className='pt-8 px-7'>
                      <h4 className='text-black font-bold text-2xl mb-6'>Sliding Doors</h4>
                      <p className='mb-4'>
                        We can produce a range of sliding wardrobe doors in bespoke sizes in under five working days.
                        Elegant, sturdy and well-priced.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-11'>
                    <a
                      href='#'
                      className='bg-primary px-3 py-4 md:px-6 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                    >
                      Find out more
                      <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                    </a>
                    <a
                      href='#'
                      className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                    >
                      Shop
                      <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='basis-[100%] md:basis-[33.333%] xl:basis-[30%]'>
              <div className='our__prdts__item relative overflow-hidden'>
                <img
                  className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                  src='images/our-product-02.webp'
                  alt=''
                />
                <div className='pr-11'>
                  <div className='prdts__itembox bg-neutral-600 pb-16 absolute -bottom-full transition-all duration-1000'>
                    <div className='pt-8 px-7'>
                      <h4 className='text-black font-bold text-2xl mb-6'>Sliding Doors</h4>
                      <p className='mb-4'>
                        We can produce a range of sliding wardrobe doors in bespoke sizes in under five working days.
                        Elegant, sturdy and well-priced.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-11'>
                    <a
                      href='#'
                      className='bg-primary px-3 py-4 md:px-6 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                    >
                      Find out more
                      <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                    </a>
                    <a
                      href='#'
                      className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                    >
                      Shop
                      <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='basis-[100%] md:basis-[33.333%] xl:basis-[30%]'>
              <div className='our__prdts__item relative overflow-hidden'>
                <img
                  className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                  src='images/our-product-03.webp'
                  alt=''
                />
                <div className='pr-11'>
                  <div className='prdts__itembox bg-neutral-600 pb-16 absolute -bottom-full transition-all duration-1000'>
                    <div className='pt-8 px-7'>
                      <h4 className='text-black font-bold text-2xl mb-6'>Sliding Doors</h4>
                      <p className='mb-4'>
                        We can produce a range of sliding wardrobe doors in bespoke sizes in under five working days.
                        Elegant, sturdy and well-priced.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-11'>
                    <a
                      href='#'
                      className='bg-primary px-3 py-4 md:px-4 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                    >
                      Find out more
                      <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                    </a>
                    <a
                      href='#'
                      className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                    >
                      Shop
                      <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Porducts End--> */}
    </>
  )
}
