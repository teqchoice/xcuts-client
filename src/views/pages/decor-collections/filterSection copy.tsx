import { Accordion } from '@mantine/core'
import { useDebouncedValue, useMediaQuery } from '@mantine/hooks'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function FilterSection(props: any) {
  const router = useRouter()

  const isGreaterThanMd = useMediaQuery('(min-width: 768px)')

  const [startSearching, setStartSearching] = useState(false)
  const [name, setName] = useState('')
  const [barand, setBrand] = useState('')
  const [core, setCore] = useState('')
  const [thickness, setThickness] = useState('')
  const [surface, setSurface] = useState('')
  const [design, setDesign] = useState('')
  const [texture, setTexture] = useState('')
  const [finish, setFinish] = useState('')

  const [value] = useDebouncedValue(name, 500)

  const [brands, setBrands] = useState<any[]>([])

  const [cores, setCores] = useState<any[]>([])

  const [surfaces, setSurfaces] = useState<any[]>([])

  const [designs, setDesigns] = useState<any[]>([])

  const [textures, setTextures] = useState<any[]>([])

  const [finishes, setFinishes] = useState<any[]>([])

  useEffect(() => {
    axios
      .get('https://shop.xcuts.co.uk/items/categories?fields=&filter[parent][related_categories_id][name][_eq]=brand')
      .then(res => setBrands(res?.data?.data))

    axios
      .get('https://shop.xcuts.co.uk/items/categories?fields=&filter[parent][related_categories_id][name][_eq]=core')
      .then(res => setCores(res?.data?.data))

    axios
      .get('https://shop.xcuts.co.uk/items/categories?fields=&filter[parent][related_categories_id][name][_eq]=surface')
      .then(res => setSurfaces(res?.data?.data))

    axios
      .get('https://shop.xcuts.co.uk/items/categories?fields=&filter[parent][related_categories_id][name][_eq]=design')
      .then(res => setDesigns(res?.data?.data))

    axios
      .get('https://shop.xcuts.co.uk/items/categories?fields=&filter[parent][related_categories_id][name][_eq]=texture')
      .then(res => setTextures(res?.data?.data))

    axios
      .get('https://shop.xcuts.co.uk/items/categories?fields=&filter[parent][related_categories_id][name][_eq]=finish')
      .then(res => setFinishes(res?.data?.data))
  }, [])

  useEffect(() => {
    if (startSearching) setvalue('name', name)
  }, [value])

  useEffect(() => {
    if (router.query.CodeOrName) setName(router.query.CodeOrName as string)
    if (router.query.Brand) setBrand(router.query.Brand as string)
    if (router.query.Core) setCore(router.query.Core as string)
    if (router.query.Thickness) setThickness(router.query.Thickness as string)
    if (router.query.Surface) setSurface(router.query.Surface as string)
    if (router.query.Finish) setFinish(router.query.Finish as string)
    if (router.query.Design) setDesign(router.query.Design as string)
    if (router.query.Texture) setTexture(router.query.Texture as string)
  }, [router.query])

  function setvalue(name: string, value: string) {
    switch (name) {
      case 'name':
        setName(value)
        router.query.CodeOrName = value
        router.push(router, undefined, { scroll: false })
        break
      case 'Brand':
        setBrand(value)
        router.query.Brand = value
        router.push(router, undefined, { scroll: false })
        break
      case 'Core':
        setCore(value)
        router.query.Core = value
        router.push(router, undefined, { scroll: false })
        break
      case 'Thickness':
        setThickness(value)
        router.query.Thickness = value
        router.push(router, undefined, { scroll: false })
        break
      case 'Surface':
        setSurface(value)
        router.query.Surface = value
        router.push(router, undefined, { scroll: false })
        break
      case 'Design':
        setDesign(value)
        router.query.Design = value
        router.push(router, undefined, { scroll: false })
        break
      case 'Texture':
        setTexture(value)
        router.query.Texture = value
        router.push(router, undefined, { scroll: false })
        break
      case 'Finish':
        setFinish(value)
        router.query.Finish = value
        router.push(router, undefined, { scroll: false })
        break
      default:
        console.log(`Invalid filter name: ${name}`)
    }
  }

  const filters = (
    <>
      <div>
        <select
          id='brand'
          value={barand}
          name='brand'
          className='lock w-full border-0 py-2 px-2.5 text-primary capitalize shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
          onChange={e => setvalue('Brand', e.target.value)}
        >
          <option className='text-gray-500' value=''>
            Brand
          </option>
          {brands?.map(brand => (
            <option className='text-gray-500 capitalize' value={brand?.name}>
              {brand?.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          id='core'
          value={core}
          name='core'
          onChange={e => setvalue('Core', e.target.value)}
          className='lock w-full border-0 py-2 px-2.5 text-primary capitalize shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
        >
          <option className='text-gray-500' value=''>
            Core
          </option>
          {cores?.map(core => (
            <option className='text-gray-500 capitalize' value={core.name}>
              {core.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          id='thickness'
          value={thickness}
          name='thickness'
          onChange={e => setvalue('Thickness', e.target.value)}
          className='lock w-full border-0 py-2 px-2.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
        >
          <option className='text-gray-500' value=''>
            Thickness
          </option>
          <option className='text-gray-500' value='3'>
            3 mm
          </option>
          <option className='text-gray-500' value='4'>
            4 mm
          </option>
          {/* <option className='text-gray-500' value='5 mm'>
      5 mm
    </option> */}
          <option className='text-gray-500' value='6'>
            6 mm
          </option>
          <option className='text-gray-500' value='7'>
            7 mm
          </option>
          <option className='text-gray-500' value='8'>
            8 mm
          </option>
          <option className='text-gray-500' value='9'>
            9 mm
          </option>
          <option className='text-gray-500' value='10'>
            10 mm
          </option>
          {/* <option className='text-gray-500' value='11'>
      11 mm
    </option> */}
          <option className='text-gray-500' value='12'>
            12 mm
          </option>
          <option className='text-gray-500' value='13'>
            13 mm
          </option>
          {/* <option className='text-gray-500' value='14'>
      14 mm
    </option> */}
          <option className='text-gray-500' value='15'>
            15 mm
          </option>
          <option className='text-gray-500' value='16'>
            16 mm
          </option>
          {/* <option className='text-gray-500' value='17'>
      17 mm
    </option> */}
          <option className='text-gray-500' value='18'>
            18 mm
          </option>
          <option className='text-gray-500' value='18.5'>
            18.5 mm
          </option>
          <option className='text-gray-500' value='19'>
            19 mm
          </option>
          {/* <option className='text-gray-500' value='20'>
      20 mm
    </option> */}
          <option className='text-gray-500' value='21'>
            21 mm
          </option>
          <option className='text-gray-500' value='22'>
            22 mm
          </option>
          {/* <option className='text-gray-500' value='23'>
      23 mm
    </option> */}
          <option className='text-gray-500' value='24'>
            24 mm
          </option>
          <option className='text-gray-500' value='25'>
            25 mm
          </option>
          <option className='text-gray-500' value='26'>
            26 mm
          </option>
          <option className='text-gray-500' value='27'>
            27 mm
          </option>
          {/* <option className='text-gray-500' value='28'>
      28 mm
    </option> */}
          {/* <option className='text-gray-500' value='29'>
      29 mm
    </option> */}
          <option className='text-gray-500' value='30'>
            30 mm
          </option>
          <option className='text-gray-500' value='31'>
            31 mm
          </option>
          <option className='text-gray-500' value='36'>
            36 mm
          </option>
          <option className='text-gray-500' value='37'>
            37 mm
          </option>
          <option className='text-gray-500' value='38'>
            38 mm
          </option>
          <option className='text-gray-500' value='40'>
            40 mm
          </option>
          <option className='text-gray-500' value='45'>
            45 mm
          </option>
          <option className='text-gray-500' value='50'>
            50 mm
          </option>
        </select>
      </div>
      <div>
        <select
          id='surface'
          value={surface}
          name='surface'
          onChange={e => setvalue('Surface', e.target.value)}
          className='lock w-full border-0 py-2 px-2.5 text-primary capitalize shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
        >
          <option className='text-gray-500' value=''>
            Surface
          </option>
          {surfaces?.map(surface => (
            <option className='text-gray-500 capitalize' value={surface.name}>
              {surface.name}
            </option>
          ))}
        </select>
      </div>
      {/* <div>
  <select
    id='qualities'
    name='qualities'
    onChange={e => setQualities(e.target.value)}
    className='lock w-full border-0 py-2 px-2.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
  >
    <option className='text-gray-500' value=''>
      Qualities
    </option>
    <option className='text-gray-500' value='Moisture Resistant'>
      Moisture Resistant
    </option>
    <option className='text-gray-500' value='Water Resistant'>
      Water Resistant
    </option>
    <option className='text-gray-500' value='Fire Retardant'>
      Fire Retardant
    </option>
    <option className='text-gray-500' value='Zero Formaldehyde'>
      Zero Formaldehyde
    </option>
    <option className='text-gray-500' value='Lightweight'>
      Lightweight
    </option>
  </select>
</div> */}
      <div>
        <select
          id='design'
          value={design}
          name='design'
          onChange={e => setvalue('Design', e.target.value)}
          className='lock w-full border-0 py-2 px-2.5 text-primary capitalize shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
        >
          <option className='text-gray-500' value=''>
            {/* <option className='text-gray-500' value='U+2800'> */}
            Design
          </option>
          {designs?.map(design => (
            <option className='text-gray-500 capitalize' value={design?.name}>
              {design?.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          id='texture'
          value={texture}
          name='texture'
          onChange={e => setvalue('Texture', e.target.value)}
          className='lock w-full border-0 py-2 px-2.5 text-primary capitalize shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
        >
          <option className='text-gray-500' value=''>
            Texture
          </option>
          {textures?.map(texture => (
            <option className='text-gray-500 capitalize' value={texture?.name}>
              {texture?.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          id='finish'
          value={finish}
          name='finish'
          onChange={e => setvalue('Finish', e.target.value)}
          className='lock w-full border-0 py-2 px-2.5 text-primary capitalize shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
        >
          <option className='text-gray-500' value=''>
            Finish
          </option>
          {finishes?.map(finish => (
            <option className='text-gray-500 capitalize' value={finish?.name}>
              {finish?.name}
            </option>
          ))}
        </select>
      </div>
    </>
  )

  return (
    <>
      <div className='grid lg:grid-cols-8 md:grid-cols-5 sm:grid-cols-4 gap-x-2 md:gap-y-2 sm:gap-y-2 gap-y-2 mt-10 mb-2'>
        <div>
          <input
            value={name}
            type='text'
            name='name'
            id='name'
            className='block w-full border-0 py-2 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none'
            placeholder='Code/Name'
            onChange={e => {
              setName(e.target.value)
              setStartSearching(true)
            }}
          />
        </div>
        {isGreaterThanMd ? (
          filters
        ) : (
          <Accordion
            styles={{
              root: {
                width: '100%'
              }
            }}
            className='lg:col-span-8 md:col-span-5 sm:col-span-4 col-span-1'
          >
            <Accordion.Item value={'filters'}>
              <Accordion.Control
                styles={{
                  control: {
                    padding: '0px'
                  }
                }}
              >
                Filters
              </Accordion.Control>
              <Accordion.Panel
                styles={{
                  content: {
                    padding: 0
                  }
                }}
              >
                {filters}
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        )}
      </div>
    </>
  )
}
