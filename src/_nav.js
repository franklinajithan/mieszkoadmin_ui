import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilSettings,cilAlbum,cilList,cilCloudUpload,cibProductHunt,cibEventStore
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
   
  },

  {
    component: CNavTitle,
    name: 'Components',
  },


  {
    component: CNavGroup,
    name: 'Product',
    to: '/base',
    icon: <CIcon icon={cibProductHunt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
        name: 'Product List',
        to: '/product/productlist',
      },
      {
        component: CNavItem,
        icon: <CIcon icon={cilCloudUpload} customClassName="nav-icon" />,
        name: 'Product Upload',
        to: '/product/productupload',
      },

    ],
  },

  {
    component: CNavGroup,
    name: 'Store',
    to: '/base',
    icon: <CIcon icon={cibEventStore} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
        name: 'Store List',
        to: '/store/storelist',
      },
   

    ],
  },

  {
    component: CNavGroup,
    name: 'Settings',
    to: '/base',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [

      {
        component: CNavItem,
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        name: 'Category List',
        to: '/base/accordion',
      },
 
      {
        component: CNavItem,
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        name: 'Supplier List',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        name: 'Barcode List ',
        to: '/base/carousels',
      },



    ],
  },
  {
    component: CNavGroup,
    name: 'Label',
    to: '/buttons',
    icon: <CIcon icon={cilAlbum} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Delicatessen Label',
        to: '/label/delicatessen',
      },
      {
        component: CNavItem,
        name: 'Promotion Label',
        to: '/label/promotion',
      },
      {
        component: CNavItem,
        name: 'Bakery Label',
        to: '/label/bakery',
      },
    ],
  },





 
]

export default _nav
