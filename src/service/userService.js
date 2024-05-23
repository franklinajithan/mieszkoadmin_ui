import axios from 'axios'
import { WebAPi } from '../_config'
 import axiosInstance from '../helpers/axiosinstance'

const axiosBase = axios.create({
  baseURL: WebAPi
})

//export const forgotPassword = (userDetail) => axiosBase.post(`/auth/forgotpassword`, userDetail)
export const userLogin = (loginDetail) => axiosInstance.post(`/auth/login`, loginDetail);
export const passwordReset = (passwordResetDetails) => axiosInstance.post(`/auth/forgotpassword`, passwordResetDetails);
export const validateResetToken = (token) => axiosInstance.get(`/auth/validatetoken/${token}`);
export const updatePassword = (updatePasswordDetails) => axiosInstance.post(`/auth/resetpassword`, updatePasswordDetails);
