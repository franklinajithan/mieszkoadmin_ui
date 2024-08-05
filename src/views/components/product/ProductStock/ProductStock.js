
import React, { useEffect, useState } from 'react'
import { storeList, uploadPriceList } from '../../../../service/storeService';

import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import { HotTable } from '@handsontable/react';
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import DatePicker from "react-datepicker";
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {
  getProductStock
} from '../../../../service/productService';
import { useForm } from 'react-hook-form';

const schema = yup.object({
    // StoreID: yup.string(),
    // storename: yup.string().required('Please enter a name.'),
    // location: yup.string().required('Please enter a location.'),
    // address: yup.string().required('Please enter a address.'),
    // postcode: yup.string().required('Please enter a postcode.'),

    StoreID: yup.string(),
    storename: yup.string(),
    location: yup.string(),
    address: yup.string(),
    postcode: yup.string(),
})
export default function ProductStock() {
    const { register, setValue, getValues, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), });


const storeList=[
    { StoreID: 'Hounslow', StoreName: 'Hounslow' },
    { StoreID: 'SWINDON', StoreName: 'SWINDON' },
   
];




  const [productStock, setProductStock] = useState([]);
  const [col, setCol] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [row, setRow] = useState([]);
  const [selectedStote, setSelectedStote] = useState(null);
  const [store, setStore] = useState([]);
  useEffect(() => {
    setStore(storeList);
    const fetchData = async () => {
        // const result = await getProductStock(store,barcode,module,startDate,endDate);
        // setStore(result.data)
    };
    fetchData();


  }, [])



function onChangeStore(e){
    const fetchData = async () => {
       let store ="http://62.64.134.130:1500/api/Product/ProductAuditTrailData"
       let productId
       let barcode
       let module
       let startDate
       let endDate
       const result = await getProductStock(store,productId,barcode,module,startDate,endDate);
       setProductStock(result.data)
    };
    fetchData();

}







  return (
    <>


<div className="card" style={{ height: '100%' }}>
        <div className='card-header'>
          <h4><strong>Product Stock</strong></h4>

        </div>
        <div className='card-body'>



          <div className="row">

            <div className="col-2">
              <label className="form-label">Store </label>

              <select
                name="store"
                id="store"
                className="form-select"
              //   {...register('parentEntity')}
              onChange={(e) => onChangeStore(e.currentTarget.value)} 
              >
                <option key={0} value="">Select</option>

                {store.map((shop) => (
                  <option key={shop.StoreID} value={shop.StoreID}>
                    {shop.StoreName}
                  </option>
                ))}

              </select>
              {/* <div className="small text-danger  pb-2   ">{errors.parentEntity?.message}</div> */}
            </div>

            <div className="col-2">
              <label className="form-label">Product Id </label>
              <input
                                        type="text"
                                        className="form-control"
                                        id="productId"
                                        placeholder="Product Id"
                                        {...register('productId')}
                                    />
              
              {/* <div className="small text-danger  pb-2   ">{errors.parentEntity?.message}</div> */}
            </div>

            <div className="col-2">
              <label className="form-label">Barcode </label>

              <select
                name="store"
                id="store"
                className="form-select"
              //   {...register('parentEntity')}
              onChange={(e) => setSelectedStote(e.currentTarget.value)} 
              >
                <option key={0} value="">Select</option>

                {store.map((shop) => (
                  <option key={shop.StoreID} value={shop.StoreID}>
                    {shop.StoreName}
                  </option>
                ))}

              </select>
              {/* <div className="small text-danger  pb-2   ">{errors.parentEntity?.message}</div> */}
            </div>

            <div className="col-2">
              <label className="form-label">Module </label>

              <select
                name="store"
                id="store"
                className="form-select"
              //   {...register('parentEntity')}
              onChange={(e) => setSelectedStote(e.currentTarget.value)} 
              >
               
                    <option value="">--Select All--</option>
                    <option value="IM">Items</option>
                    <option value="D">Delivery</option>
                    <option value="ST">Stock Take</option>
                    <option value="SA">Stock Adjustment</option>
                    <option value="S">Sales</option>
                    <option value="PR">Purchase Return</option>
                </select>
               
                

             
              {/* <div className="small text-danger  pb-2   ">{errors.parentEntity?.message}</div> */}
            </div>

            <div className="col-2">
              <label className="form-label">Start Date </label>

              <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
              {/* <div className="small text-danger  pb-2   ">{errors.parentEntity?.message}</div> */}
            </div>

            <div className="col-2">
              <label className="form-label">End Date </label>

              <DatePicker className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />

              {/* <div className="small text-danger  pb-2   ">{errors.parentEntity?.message}</div> */}
            </div>

        





          </div>

          <div className='row'>
          <div className="col-8">
              <label className="form-label">Upload Excel file </label>
              <div className="input-group">
                {/* <input type="file" className="form-control" onChange={(e) => fileHandler(e)} /> */}

              </div>
            </div>
            <div className="col-1">

              {/* <button className="btn btn-primary upload-btn" type="button" onClick={handleClick}>Upload</button> */}

            </div>
          </div>








          <div className="row mt-4">

            <OutTable className="mb-3" data={row} columns={col} tableClassName="ExcelTable2007" tableHeaderRowclassName="heading" />



          </div>





        </div>
      </div>
     
    </>
  )
}