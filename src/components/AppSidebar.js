import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

// import { logo } from 'src/assets/brand/logo'
import { sygnet } from 'src/assets/brand/sygnet'
import logo from '../assets/images/logo.png'
// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >



      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>
          <div className="row">
            <div className="col-4"> <img src={logo} alt="" style={{ width: '400px' }} /></div>
            <div className="col-8"> <div style={{ fontSize: "41px", color: "red", textDecoration: "none", fontWeight: "bolder", marginLeft:'-24px', marginTop:'-9px' }}>MIESZKO</div></div>

          </div>

          {/* <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} /> */}
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
