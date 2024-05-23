import axios from 'axios'
import { WebAPi } from '../_config'
 import axiosInstance from '../helpers/axiosinstance'

const axiosBase = axios.create({
  baseURL: WebAPi
})
export const storeList = () => axiosInstance.get(`/store/storelist`);
export const addStore = (storename,location,address,postcode) => axiosInstance.post(`/store/add`, {storename,location,address,postcode});
export const updateStore = (storeId,storename,location,address,postcode) => axiosInstance.put(`/store/update/${storeId}`, {storename,location,address,postcode});
export const deleteStore = (StoreID) => axiosInstance.delete(`/store/delete/${StoreID}`);
export const uploadPriceList = (store,data) => axiosInstance.delete(`/store/uploadPrice}`,{store,data});



