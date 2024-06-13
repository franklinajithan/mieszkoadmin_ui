import axios from 'axios'
import { WebAPi } from '../_config'
 import axiosInstance from '../helpers/axiosinstance'

const axiosBase = axios.create({
  baseURL: WebAPi
})
export const productList = () => axiosInstance.get(`/product/productlist`);

export const uploadBarcodeImage = (fileName,formData) => axiosInstance.post(`/product/uploadBarcodeImage/`+fileName,formData);

