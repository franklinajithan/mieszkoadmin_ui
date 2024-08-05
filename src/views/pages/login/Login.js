import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import logo from 'src/assets/images/logo.png'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { userLogin } from '../../../service/userService';
import { NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';
// const schema = yup.object().shape({
//   username: yup.string().required('Email is required!'),
//   password: yup.string().required('Password is required!'),
// });


const schema = yup.object().shape({
  username: yup.string(),
  password: yup.string(),
});







const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });







  const onSubmit = async (data) => {
    try {
      localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
      localStorage.setItem('refreshToken', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
      localStorage.setItem('tokenLifeInSeconds', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
      
   //   let details = { username: data.username, password: data.password };
   //   const result = await userLogin(details);

      // if (result.status === null || result.status !== 200) {
      //   console.log(result.data);

      //   NotificationManager.error('An error occurred when logging in, please try again.', '', 2000);
      //   return;
      // }

      // let jsonData = result.data;
      // const userDetails = JSON.stringify(jsonData.result);
      // localStorage.setItem('token', jsonData.token);
      // localStorage.setItem('refreshToken', jsonData.refreshToken);
      // localStorage.setItem('tokenLifeInSeconds', jsonData.tokenLifeInSeconds);
      // //localStorage.setItem('userinfor', userDetails);
      // let loginUser = { ...details, isLogin: true, keepMeSignIn: details.keepSignIn };
      // // dispatch({
      // //   type: USER_LOGIN,
      // //   payload: loginUser,
      // // });
      navigate('/dashboard');
    } catch (e) {
      // console.log(e);
      let errorMsg = 'An error occurred when logging in, please try again.';
      switch (e.response.status) {
        case 401:
          errorMsg = 'An invalid email and password combination was entered, please try again.';
          break;
        default:
          break;
      }
      NotificationManager.error(errorMsg, '', 2000);

    }
  };



  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center bg-login">
      <div className='container'>
        <div className="justify-content-center row">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput {...register("username")} placeholder="Username"
                        autoComplete="username" />
                    </CInputGroup>

                    {errors.username && <div className='error-message pl-5 mb-3'>{errors.username.message}</div>}
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput {...register("password")}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"

                      />
                    </CInputGroup>
                    {errors.username && <div className='error-message pl-5 mb-3'>{errors.password.message}</div>}
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <button className="px-0">
                          Forgot password?
                        </button>
                        <button color="link" className="px-0">
                          Register Now
                        </button>
                      </CCol>
                    </CRow>
                  </form>
                </CCardBody>
              </CCard>
              <CCard className="text-white" style={{ backgroundColor: '#bc0000' }} >
                <CCardBody className="text-center">
                  <div>
                    <img src={logo} alt="" style={{ width: '400px' }} />
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </div>
      </div>
    </div>
  )
}

export default Login
