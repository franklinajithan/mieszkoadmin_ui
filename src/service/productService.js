import axios from 'axios'
import { WebAPi } from '../_config'
import axiosInstance from '../helpers/axiosinstance'

const axiosBase = axios.create({
  baseURL: WebAPi
})
export const productList = () => axiosInstance.get(`/product/productlist`);

export const uploadBarcodeImage = (fileName, formData) => axiosInstance.post(`/product/uploadBarcodeImage/` + fileName, formData);

export const getProductStock = async (store, productId, barcode, module, startDate, endDate) => axiosInstance.post('/msp/test' , (store, productId, barcode, module, startDate, endDate));

 
 


  // if (barcode) {
  //     url += '&SearchBarcode=' + barcode;
  // }

  // if (module) {
  //     url += '&SearchModule=' + module;
  // }

  // if (startDate) {
  //     url += '&SearchStartDate=' + startDate;
  // }

  // if (endDate) {
  //     url += '&SearchEndDate=' + endDate;
  // }

  //if (productId) {

      

 



