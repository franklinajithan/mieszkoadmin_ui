import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilUser,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,

} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { useNavigate } from 'react-router-dom';
const AppHeaderDropdown = () => {
  const navigate = useNavigate();
  const logout =() => {
    localStorage.clear();
    navigate('/login')
  }


  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
        
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
       
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
        
        </CDropdownItem>
        <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem href="/#/register">
          <CIcon icon={cilUser} className="me-2" />
          Register
       
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
        
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={logout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
