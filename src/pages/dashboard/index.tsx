import React from 'react'
import Layout from '@/views/layout'
import Dashboard from '@/views/pages/dashboard'
import axios from 'axios'

export default function index({ layout }: any) {
  return (
    <Layout data={layout}>
      <Dashboard />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    // const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API__URL}/get-content-query/page=1/`, {
    //   headers: {
    //     Authorization:
    //       'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MTA1Nzg4LCJpYXQiOjE3MDc2NzM3ODgsImp0aSI6IjEzNTRlOWI1MzMzZjQwY2E4ZDVkNzQ3YmRlNjM3MzcxIiwidXNlcl9pZCI6MTd9.A_JXmU0t4egt8Ec7WkFp7s-uX9dd-z-88cACr-w0qtQ'
    //   }
    // })
    const { data: layoutData } = await axios.get(`${process.env.NEXT_PUBLIC_API__URL}/get-content-query/page=3/`)
    return { props: { layout: layoutData[0]?.positions } }
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
            id: '9',
            title: 'Home',
            value: 'Home',
            link: '/',
            filec: ''
          },
          {
            id: '10',
            title: 'Sliding Doors',
            value: 'Sliding Doors',
            link: '/sliding-doors',
            filec: ''
          },
          {
            id: '94',
            title: 'About Us',
            value: 'About Us',
            link: '/about-us',
            filec: ''
          },
          {
            id: '95',
            title: 'Delivery',
            value: 'Delivery',
            link: '/delivery',
            filec: ''
          },
          {
            id: '96',
            title: 'Showroom',
            value: 'Showroom',
            link: '/showroom',
            filec: ''
          },
          {
            id: '97',
            title: 'Decor Collections',
            value: 'Decor Collections',
            link: '/decor-collections',
            filec: ''
          },
          {
            id: '98',
            title: 'Our Guarantee',
            value: 'Our Guarantee',
            link: '/our-guarantee',
            filec: ''
          },
          {
            id: '99',
            title: 'Panel Edgebanding',
            value: 'Panel Edgebanding',
            link: '/panel-edgebanding',
            filec: ''
          },
          {
            id: '100',
            title: 'Privacy Notice',
            value: 'Privacy Notice',
            link: '/privacy-notice',
            filec: ''
          },
          {
            id: '101',
            title: 'TAC',
            value: 'TAC',
            link: '/terms-and-conditions',
            filec: ''
          }
        ]
      }
    ]

    return { props: { layout: fake_layout } }
  }
}
