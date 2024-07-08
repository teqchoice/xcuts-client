import Layout from '@/views/layout'
import DecorCollections from '@/views/pages/decor-collections'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function PDecorCollections({ data, layout }: any) {
  console.log('data')
  
  return (
    <Layout data={layout}>
      <DecorCollections Data={data} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data } = await axios.get(`https://api.xcuts.co.uk/api/products/get-all-Decors`)
    const { data: layoutData } = await axios.get(`${process.env.NEXT_PUBLIC_API__URL}/get-content-query/page=3/`)
    return { props: { data: data, layout: layoutData[0]?.positions } }
  } catch (error) {
    const fake_layout = [
      {
        id: 17,
        name: 'Footer_Contact',
        contents: [
          {
            id: '11',
            title: 'Contact Details',
            value: 'Contact Details',
            link: '',
            filec: ''
          },
          {
            id: '12',
            title: 'Copyright',
            value: 'Copyright © 2023 xcuts.co.uk. All rights reserved.',
            link: '',
            filec: ''
          },
          {
            id: '13',
            title: 'logoFooter',
            value: '',
            link: '/',
            filec: ''
          },
          {
            id: '89',
            title: 'address',
            value: 'Unit 33 The IO Centre, Hearle Way, Hatfield, AL10 9EW',
            link: '',
            filec: ''
          },
          {
            id: '90',
            title: 'phone',
            value: '+44 (0) 170 790 7000',
            link: '',
            filec: ''
          },
          {
            id: '91',
            title: 'email',
            value: 'hello@xcuts.co.uk',
            link: '',
            filec: ''
          }
        ]
      },
      {
        id: 21,
        name: 'Footer_Company',
        contents: [
          {
            id: '38',
            title: 'Company',
            value: 'Company',
            link: '',
            filec: ''
          },
          {
            id: '39',
            title: 'About us',
            value: 'About us',
            link: '',
            filec: ''
          },
          {
            id: '40',
            title: 'Showroom',
            value: 'Showroom',
            link: '',
            filec: ''
          },
          {
            id: '41',
            title: 'Our guarantee',
            value: 'Our guarantee',
            link: '',
            filec: ''
          },
          {
            id: '42',
            title: 'Privacy notice',
            value: 'Privacy notice',
            link: '',
            filec: ''
          },
          {
            id: '43',
            title: 'Terms and conditions',
            value: 'Terms and conditions',
            link: '',
            filec: ''
          }
        ]
      },
      {
        id: 4,
        name: 'Header_Content',
        contents: [
          {
            id: '3',
            title: 'times',
            value: '<p><span style="color: #F03E3E">8AM - 5PM</span></p>',
            link: '',
            filec: ''
          },
          {
            id: '4',
            title: '0170 790 7000',
            value: '0170 790 7000',
            link: '',
            filec: ''
          },
          {
            id: '2',
            title: 'days',
            value: 'MON - FRI',
            link: '',
            filec: ''
          },
          {
            id: '1',
            title: 'logo',
            value: 'images/logo.webp',
            link: 'http://localhost:3000/',
            filec: 'store_image/logo.webp'
          },
          {
            id: '93',
            title: 'Hamburger logo',
            value: '/',
            link: '/',
            filec: 'store_image/ftr-logo_LEb0Tmb.webp'
          }
        ]
      },
      {
        id: 2,
        name: 'Header_Top_Menu',
        contents: [
          {
            id: '5',
            title: 'DELIVERY',
            value: 'DELIVERY',
            link: '/delivery',
            filec: ''
          },
          {
            id: '6',
            title: 'CONTACT',
            value: 'CONTACT',
            link: '/contact',
            filec: ''
          },
          {
            id: '7',
            title: 'SAMPLES',
            value: 'SAMPLES',
            link: '/samples',
            filec: ''
          },
          {
            id: '8',
            title: 'MY ACCOUNT',
            value: 'MY ACCOUNT',
            link: '/myaccount',
            filec: ''
          }
        ]
      },
      {
        id: 18,
        name: 'Footer_Collections',
        contents: [
          {
            id: '14',
            title: 'Collections',
            value: 'Collections',
            link: '',
            filec: ''
          },
          {
            id: '15',
            title: 'Egger',
            value: 'Egger',
            link: '',
            filec: ''
          },
          {
            id: '16',
            title: 'Kronospan',
            value: 'Kronospan',
            link: '',
            filec: ''
          },
          {
            id: '17',
            title: 'XyloCleaf',
            value: 'XyloCleaf',
            link: '',
            filec: ''
          },
          {
            id: '18',
            title: 'Saviola',
            value: 'Saviola',
            link: '',
            filec: ''
          },
          {
            id: '19',
            title: 'Swiss Krono',
            value: 'Swiss Krono',
            link: '',
            filec: ''
          },
          {
            id: '20',
            title: 'Alvic',
            value: 'Alvic',
            link: '',
            filec: ''
          },
          {
            id: '21',
            title: 'Senoplast',
            value: 'Senoplast',
            link: '',
            filec: ''
          },
          {
            id: '22',
            title: 'Serica',
            value: 'Serica',
            link: '',
            filec: ''
          },
          {
            id: '23',
            title: 'Grooved boards',
            value: 'Grooved boards',
            link: '',
            filec: ''
          },
          {
            id: '24',
            title: 'Veneered boards',
            value: 'Veneered boards',
            link: '',
            filec: ''
          },
          {
            id: '25',
            title: 'MDF boards',
            value: 'MDF boards',
            link: '',
            filec: ''
          },
          {
            id: '26',
            title: 'Plywood',
            value: 'Plywood',
            link: '',
            filec: ''
          }
        ]
      },
      {
        id: 20,
        name: 'Footer_Products',
        contents: [
          {
            id: '34',
            title: 'Products',
            value: 'Products',
            link: '',
            filec: ''
          },
          {
            id: '35',
            title: 'Sliding wardrobe doors',
            value: 'Sliding wardrobe doors',
            link: '',
            filec: ''
          },
          {
            id: '36',
            title: 'Shaker style doors',
            value: 'Shaker style doors',
            link: '',
            filec: ''
          },
          {
            id: '37',
            title: 'Furniture fittings',
            value: 'Furniture fittings',
            link: '',
            filec: ''
          }
        ]
      },
      {
        id: 22,
        name: 'Footer_Resources',
        contents: [
          {
            id: '44',
            title: 'Resources',
            value: 'Resources',
            link: '',
            filec: ''
          },
          {
            id: '45',
            title: 'Inspiration hub',
            value: 'Inspiration hub',
            link: '',
            filec: ''
          },
          {
            id: '46',
            title: 'How to',
            value: 'How to',
            link: '',
            filec: ''
          }
        ]
      },
      {
        id: 19,
        name: 'Footer_Services',
        contents: [
          {
            id: '27',
            title: 'Services',
            value: 'Services',
            link: '',
            filec: ''
          },
          {
            id: '28',
            title: 'Board cutting',
            value: 'Board cutting',
            link: '',
            filec: ''
          },
          {
            id: '29',
            title: 'Panel edgebanding',
            value: 'Panel edgebanding',
            link: '',
            filec: ''
          },
          {
            id: '30',
            title: 'CNC cutting',
            value: 'CNC cutting',
            link: '',
            filec: ''
          },
          {
            id: '31',
            title: 'Spray painting',
            value: 'Spray painting',
            link: '',
            filec: ''
          },
          {
            id: '32',
            title: 'Delivery',
            value: 'Delivery',
            link: '',
            filec: ''
          },
          {
            id: '33',
            title: 'Samples',
            value: 'Samples',
            link: '',
            filec: ''
          }
        ]
      },
      {
        id: 5,
        name: 'Header_Main_Menu',
        contents: [
          {
            id: '1',
            title: 'Home',
            value: 'Home',
            link: '/',
            filec: ''
          },
          {
            id: '2',
            title: 'Decor Collections',
            value: 'Decor Collections',
            link: '/decor-collections',
            filec: ''
          },
          {
            id: '3',
            title: 'Services',
            value: 'Services',
            link: '/services',
            filec: ''
          },
          {
            id: '4',
            title: 'Products',
            value: 'Products',
            link: '/sliding-doors',
            filec: ''
          },

          {
            id: '5',
            title: 'Showroom',
            value: 'Showroom',
            link: '/showroom',
            filec: ''
          },
          {
            id: '6',
            title: 'Shop online',
            value: 'Shop online',
            link: '/shop-online',
            filec: ''
          }
        ]
      }
    ]
    const fake_data = [
      {
        id: 13,
        name: 'Page1_Section3_OurProducts',
        contents: [
          {
            id: '73',
            title: 'Our Products',
            value: 'Our Products',
            link: '',
            filec: ''
          }
        ]
      },
      {
        id: 6,
        name: 'Page1_Top_Slider',
        contents: [
          {
            id: '47',
            title: 's1',
            value: '',
            link: '/',
            filec: 'store_image/slide-01_1.webp'
          },
          {
            id: '48',
            title: 's2',
            value: '',
            link: '/',
            filec: 'store_image/panels-cut_1.webp'
          }
        ]
      },
      {
        id: 16,
        name: 'Page1_Section3_OurProducts_Part3',
        contents: [
          {
            id: '76',
            title: 'title',
            value: 'Sliding Doors',
            link: '/',
            filec: ''
          },
          {
            id: '77',
            title: 'content',
            value:
              'We can produce a range of sliding wardrobe doors in bespoke sizes in under five working days. Elegant, sturdy and well-priced.',
            link: '/',
            filec: ''
          },
          {
            id: '82',
            title: 'findeBTN',
            value: 'Find out more',
            link: '/',
            filec: ''
          },
          {
            id: '83',
            title: 'shopBTN',
            value: 'Shop',
            link: '/',
            filec: ''
          },
          {
            id: '86',
            title: 'image',
            value: '',
            link: '/',
            filec: 'store_image/our-product-03.webp'
          }
        ]
      },
      {
        id: 14,
        name: 'Page1_Section3_OurProducts_Part1',
        contents: [
          {
            id: '74',
            title: 'title',
            value: 'Sliding Doors',
            link: '/',
            filec: ''
          },
          {
            id: '79',
            title: 'content',
            value:
              'We can produce a range of sliding wardrobe doors in bespoke sizes in under five working days. Elegant, sturdy and well-priced.',
            link: '/',
            filec: ''
          },
          {
            id: '80',
            title: 'findeBTN',
            value: 'Find out more',
            link: '/',
            filec: ''
          },
          {
            id: '85',
            title: 'shopBTN',
            value: 'Shop',
            link: '/',
            filec: ''
          },
          {
            id: '88',
            title: 'image',
            value: '',
            link: '/',
            filec: 'store_image/our-product-01.webp'
          }
        ]
      },
      {
        id: 11,
        name: 'Page1_Section2_OurServices_Part3_CncCutting',
        contents: [
          {
            id: '59',
            title: 'title',
            value: 'CNC cutting',
            link: '',
            filec: ''
          },
          {
            id: '65',
            title: 'content',
            value:
              'Entrust our CNC cutting department with unusual shape panel cutting, decorative pattern routing, hole drilling and grooving jobs.',
            link: '',
            filec: ''
          },
          {
            id: '66',
            title: 'findeBTN',
            value: 'Find out more',
            link: '/',
            filec: ''
          },
          {
            id: '67',
            title: 'shopBTN',
            value: 'Shop',
            link: '/',
            filec: ''
          },
          {
            id: '68',
            title: 'image',
            value: '',
            link: '/',
            filec: 'store_image/cnc-cutting.webp'
          }
        ]
      },
      {
        id: 10,
        name: 'Page1_Section2_OurServices_Part2_Edgebanding',
        contents: [
          {
            id: '58',
            title: 'title',
            value: 'Panel edgebanding',
            link: '',
            filec: ''
          },
          {
            id: '61',
            title: 'content',
            value:
              'Let us know which panel edges to finish with an edging tape, and we will do it for you with our PUR glue equipped machines.',
            link: '',
            filec: ''
          },
          {
            id: '62',
            title: 'findeBTN',
            value: 'Find out more',
            link: '/',
            filec: ''
          },
          {
            id: '63',
            title: 'shopBTN',
            value: 'Shop',
            link: '/',
            filec: ''
          },
          {
            id: '64',
            title: 'image',
            value: '',
            link: '/',
            filec: 'store_image/panel-edtgebanding.webp'
          }
        ]
      },
      {
        id: 15,
        name: 'Page1_Section3_OurProducts_Part2',
        contents: [
          {
            id: '75',
            title: 'title',
            value: 'Sliding Doors',
            link: '/',
            filec: ''
          },
          {
            id: '78',
            title: 'content',
            value:
              'We can produce a range of sliding wardrobe doors in bespoke sizes in under five working days. Elegant, sturdy and well-priced.',
            link: '/',
            filec: ''
          },
          {
            id: '81',
            title: 'findeBTN',
            value: 'Find out more',
            link: '/',
            filec: ''
          },
          {
            id: '84',
            title: 'shopBTN',
            value: 'Shop',
            link: '/',
            filec: ''
          },
          {
            id: '87',
            title: 'image',
            value: '',
            link: '/',
            filec: 'store_image/our-product-02.webp'
          }
        ]
      },
      {
        id: 12,
        name: 'Page1_Section2_OurServices_Part4_SprayPainting',
        contents: [
          {
            id: '60',
            title: 'title',
            value: 'Spray painting',
            link: '',
            filec: ''
          },
          {
            id: '69',
            title: 'content',
            value:
              'We can spray coat your panels to a white primer, clear lacquer or any colour paint finish, all of which you can easily book online on our website.',
            link: '',
            filec: ''
          },
          {
            id: '70',
            title: 'findeBTN',
            value: 'Find out more',
            link: '/',
            filec: ''
          },
          {
            id: '71',
            title: 'shopBTN',
            value: 'Shop',
            link: '/',
            filec: ''
          },
          {
            id: '72',
            title: 'image',
            value: '',
            link: '/',
            filec: 'store_image/spray-painting.webp'
          }
        ]
      },
      {
        id: 8,
        name: 'Page1_Section2_OurServices',
        contents: [
          {
            id: '52',
            title: 'Our Services',
            value: 'Our Services',
            link: '',
            filec: ''
          }
        ]
      },
      {
        id: 7,
        name: 'Page1_Section1_Xcut',
        contents: [
          {
            id: '50',
            title: 'ONE-STOP SHOP FOR CUT-TO-SIZE MDF',
            value: 'ONE-STOP SHOP FOR CUT-TO-SIZE MDF',
            link: '',
            filec: ''
          },
          {
            id: '51',
            title: 'content',
            value:
              '<p style="text-align: center">We specialise in delivering comprehensive solutions and top-tier products catering to furniture makers,interior designers, and general builders.</p><p style="text-align: center">Our commitment to exceptional customer service goes hand in hand with our dedication to providing products of unparalleled quality.</p><p style="text-align: center">We\'re proud to position ourselves as industry leaders, driven by our passion and expertise.</p>',
            link: '',
            filec: ''
          },
          {
            id: '49',
            title: 'XCUTS',
            value: '<p><strong><span style="color: #F03E3E">X</span>CUTS</strong></p>',
            link: '',
            filec: ''
          }
        ]
      },
      {
        id: 9,
        name: 'Page1_Section2_OurServices_Part1_PanelsCutToSize',
        contents: [
          {
            id: '53',
            title: 'title',
            value: 'Panels cut to size',
            link: '',
            filec: ''
          },
          {
            id: '54',
            title: 'content',
            value:
              'Select any decorative board from our vast range of decors, and we will cut it into smaller size panels, as specified by you.',
            link: '',
            filec: ''
          },
          {
            id: '55',
            title: 'findeBTN',
            value: 'Find out more',
            link: '/',
            filec: ''
          },
          {
            id: '56',
            title: 'shopBTN',
            value: 'Shop',
            link: '/',
            filec: ''
          },
          {
            id: '57',
            title: 'image',
            value: '',
            link: '/',
            filec: 'store_image/panels-cut_1_ZNy4WDJ.webp'
          }
        ]
      }
    ]
    return { props: { data: fake_data, layout: fake_layout } }
  }
}
