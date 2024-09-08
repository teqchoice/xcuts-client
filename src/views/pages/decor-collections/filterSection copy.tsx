import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function FilterSection(props: any) {
  const router = useRouter()

  const [name, setName] = useState('')
  const [barand, setBrand] = useState('')
  const [core, setCore] = useState('')
  const [thickness, setThickness] = useState('')
  const [surface, setSurface] = useState('')
  // const [qualities, setQualities] = useState('')
  const [design, setDesign] = useState('')
  const [texture, setTexture] = useState('')
  const [finish, setFinish] = useState('')

  useEffect(() => {
    // router.query = {
    //   CodeOrName: name ? name : '',
    //   Brand: '',
    //   Core: '',
    //   Thickness: '',
    //   Surface: '',
    //   Finish: '',
    //   Design: '',
    //   Texture: ''
    // }
    // setName(router.query.CodeOrName)
    // setBrand(router.query.Brand)
    // setCore(router.query.Core)
    // setThickness(router.query.Thickness)
    // setSurface(router.query.Surface)
    // setDesign(router.query.Design)
    // setTexture(router.query.Texture)
    // setFinish(router.query.Finish)

    // console.log(barand)
    // router.push(router)
    setName(router.query.CodeOrName)
    setBrand(router.query.Brand)
    setCore(router.query.Core)
    setThickness(router.query.Thickness)
    setSurface(router.query.Surface)
    setFinish(router.query.Finish)
    setDesign(router.query.Design)
    setTexture(router.query.Texture)

    // router.push(router)
  }, [router.query])

  // switch case for find wich filter and then set value
  function setvalue(name: string, value: string) {
    switch (name) {
      case 'name':
        setName(value)
        router.query.CodeOrName = value
        router.push(router)
        break
      case 'Brand':
        setBrand(value)
        router.query.Brand = value
        router.push(router)
        break
      case 'Core':
        setCore(value)
        router.query.Core = value
        router.push(router)
        break
      case 'Thickness':
        setThickness(value)
        router.query.Thickness = value
        router.push(router)
        break
      case 'Surface':
        setSurface(value)
        router.query.Surface = value
        router.push(router)
        break
      case 'Design':
        setDesign(value)
        router.query.Design = value
        router.push(router)
        break
      case 'Texture':
        setTexture(value)
        router.query.Texture = value
        router.push(router)
        break
      case 'Finish':
        setFinish(value)
        router.query.Finish = value
        router.push(router)
        break
      default:
        console.log(`Invalid filter name: ${name}`)
    }
  }
  // onChange={e => setName(e.target.value)}
  // console.log(Data)
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
            onChange={e => setvalue('name', e.target.value)}
          />
        </div>
        <div>
          <select
            id='brand'
            value={barand}
            name='brand'
            className='lock w-full border-0 py-2 px-2.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
            onChange={e => setvalue('Brand', e.target.value)}
          >
            <option className='text-gray-500' value=''>
              Brand
            </option>
            <option className='text-gray-500' value='egger'>
              Egger
            </option>
            <option className='text-gray-500' value='Kronospan'>
              Kronospan
            </option>
            <option className='text-gray-500' value='XyloCleaf'>
              XyloCleaf
            </option>
            <option className='text-gray-500' value='Saviola'>
              Saviola
            </option>
            <option className='text-gray-500' value='Swiss Krono'>
              Swiss Krono
            </option>
            <option className='text-gray-500' value='Alvic'>
              Alvic
            </option>
            <option className='text-gray-500' value='Senoplast'>
              Senoplast
            </option>
            <option className='text-gray-500' value='Serica'>
              Serica
            </option>
            <option className='text-gray-500' value='Wall Panelling'>
              Wall Panelling
            </option>
            <option className='text-gray-500' value='MDF Boards'>
              MDF Boards
            </option>
            <option className='text-gray-500' value='Veneered Boards'>
              Veneered Boards
            </option>
            <option className='text-gray-500' value='Plywood'>
              Plywood
            </option>
          </select>
        </div>
        <div>
          <select
            id='core'
            value={core}
            name='core'
            onChange={e => setvalue('Core', e.target.value)}
            className='lock w-full border-0 py-2 px-2.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
          >
            <option className='text-gray-500' value=''>
              Core
            </option>
            <option className='text-gray-500' value='Chipboard'>
              Chipboard
            </option>
            <option className='text-gray-500' value='MDF'>
              MDF
            </option>
            <option className='text-gray-500' value='Plywood'>
              Plywood
            </option>
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
            <option className='text-gray-500' value='3 mm'>
              3 mm
            </option>
            <option className='text-gray-500' value='4 mm'>
              4 mm
            </option>
            {/* <option className='text-gray-500' value='5 mm'>
              5 mm
            </option> */}
            <option className='text-gray-500' value='6 mm'>
              6 mm
            </option>
            <option className='text-gray-500' value='7 mm'>
              7 mm
            </option>
            <option className='text-gray-500' value='8 mm'>
              8 mm
            </option>
            <option className='text-gray-500' value='9 mm'>
              9 mm
            </option>
            <option className='text-gray-500' value='10 mm'>
              10 mm
            </option>
            {/* <option className='text-gray-500' value='11 mm'>
              11 mm
            </option> */}
            <option className='text-gray-500' value='12 mm'>
              12 mm
            </option>
            <option className='text-gray-500' value='13 mm'>
              13 mm
            </option>
            {/* <option className='text-gray-500' value='14 mm'>
              14 mm
            </option> */}
            <option className='text-gray-500' value='15 mm'>
              15 mm
            </option>
            <option className='text-gray-500' value='16 mm'>
              16 mm
            </option>
            {/* <option className='text-gray-500' value='17 mm'>
              17 mm
            </option> */}
            <option className='text-gray-500' value='18 mm'>
              18 mm
            </option>
            <option className='text-gray-500' value='18.5 mm'>
              18.5 mm
            </option>
            <option className='text-gray-500' value='19 mm'>
              19 mm
            </option>
            {/* <option className='text-gray-500' value='20 mm'>
              20 mm
            </option> */}
            <option className='text-gray-500' value='21 mm'>
              21 mm
            </option>
            <option className='text-gray-500' value='22 mm'>
              22 mm
            </option>
            {/* <option className='text-gray-500' value='23 mm'>
              23 mm
            </option> */}
            <option className='text-gray-500' value='24 mm'>
              24 mm
            </option>
            <option className='text-gray-500' value='25 mm'>
              25 mm
            </option>
            <option className='text-gray-500' value='26 mm'>
              26 mm
            </option>
            <option className='text-gray-500' value='27 mm'>
              27 mm
            </option>
            {/* <option className='text-gray-500' value='28 mm'>
              28 mm
            </option> */}
            {/* <option className='text-gray-500' value='29 mm'>
              29 mm
            </option> */}
            <option className='text-gray-500' value='30 mm'>
              30 mm
            </option>
            <option className='text-gray-500' value='31 mm'>
              31 mm
            </option>
            <option className='text-gray-500' value='36 mm'>
              36 mm
            </option>
            <option className='text-gray-500' value='37 mm'>
              37 mm
            </option>
            <option className='text-gray-500' value='38 mm'>
              38 mm
            </option>
            <option className='text-gray-500' value='40 mm'>
              40 mm
            </option>
            <option className='text-gray-500' value='45 mm'>
              45 mm
            </option>
            <option className='text-gray-500' value='50 mm'>
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
            className='lock w-full border-0 py-2 px-2.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
          >
            <option className='text-gray-500' value=''>
              Surface
            </option>
            <option className='text-gray-500' value='Melamine'>
              Melamine
            </option>
            <option className='text-gray-500' value='Lacquered Melamine'>
              Lacquered Melamine
            </option>
            <option className='text-gray-500' value='Acrylic'>
              Acrylic
            </option>
            <option className='text-gray-500' value='Foil'>
              Foil
            </option>
            <option className='text-gray-500' value='Metal'>
              Metal
            </option>
            <option className='text-gray-500' value='Fabric'>
              Fabric
            </option>
            <option className='text-gray-500' value='MDF'>
              MDF
            </option>
            <option className='text-gray-500' value='Dyed MDF'>
              Dyed MDF
            </option>
            <option className='text-gray-500' value='Primed MDF'>
              Primed MDF
            </option>
            <option className='text-gray-500' value='Veneer'>
              Veneer
            </option>
            <option className='text-gray-500' value='Lacquered Veneer'>
              Lacquered Veneer
            </option>
            <option className='text-gray-500' value='Oiled Veneer'>
              Oiled Veneer
            </option>
            <option className='text-gray-500' value='Birch Ply'>
              Birch Ply
            </option>
            <option className='text-gray-500' value='Plywood'>
              Plywood
            </option>
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
            className='lock w-full border-0 py-2 px-2.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
          >
            <option className='text-gray-500' value='U+2800'>
              Design
            </option>
            <option className='text-gray-500' value='Woodgrain'>
              Woodgrain
            </option>
            <option className='text-gray-500' value='Pattern'>
              Pattern
            </option>
            <option className='text-gray-500' value='Colour'>
              Colour
            </option>
          </select>
        </div>
        <div>
          <select
            id='texture'
            value={texture}
            name='texture'
            onChange={e => setvalue('Texture', e.target.value)}
            className='lock w-full border-0 py-2 px-2.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
          >
            <option className='text-gray-500' value=''>
              Texture
            </option>
            <option className='text-gray-500' value='Plain'>
              Plain
            </option>
            <option className='text-gray-500' value='Pearl'>
              Pearl
            </option>
            <option className='text-gray-500' value='Abstract'>
              Abstract
            </option>
            <option className='text-gray-500' value='Wood'>
              Wood
            </option>
            <option className='text-gray-500' value='Synced Wood'>
              Synced Wood
            </option>
            <option className='text-gray-500' value='Leather'>
              Leather
            </option>
            <option className='text-gray-500' value='Textile'>
              Textile
            </option>
            <option className='text-gray-500' value='Stone'>
              Stone
            </option>
            <option className='text-gray-500' value='Metal'>
              Metal
            </option>
          </select>
        </div>
        <div>
          <select
            id='finish'
            value={finish}
            name='finish'
            onChange={e => setvalue('Finish', e.target.value)}
            className='lock w-full border-0 py-2 px-2.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 focus:outline-none bg-white '
          >
            <option className='text-gray-500' value=''>
              Finish
            </option>
            <option className='text-gray-500' value='Supermatt'>
              Supermatt
            </option>
            <option className='text-gray-500' value='Matt'>
              Matt
            </option>
            <option className='text-gray-500' value='Semimatt'>
              Semimatt
            </option>
            <option className='text-gray-500' value='Matt-Satin'>
              Matt-Satin
            </option>
            <option className='text-gray-500' value='Satin'>
              Satin
            </option>
            <option className='text-gray-500' value='Semigloss'>
              Semigloss
            </option>
            <option className='text-gray-500' value='Gloss'>
              Gloss
            </option>
            <option className='text-gray-500' value='High Gloss'>
              High Gloss
            </option>
            <option className='text-gray-500' value='Primed'>
              Primed
            </option>
            <option className='text-gray-500' value='Raw'>
              Raw
            </option>
          </select>
        </div>
      </div>
    </>
  )
}
