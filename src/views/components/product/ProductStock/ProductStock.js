
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
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
const schema = yup.object({

  productId: yup.string(),

})


const initialSearch = {
}







export default function ProductStock() {
  const { register, setValue, getValues, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), });


  const storeList = [
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
  const [module, setSelectedModule] = useState([]);
  const [barcodeList, setBarcodeList] = useState([]);
  const [searchQuery, setSearchQuery] = useState(initialSearch)


  const [rowData, setRowData] = useState([
    // { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    // { make: "Ford", model: "F-Series", price: 33850, electric: false },
    // { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "ProdID" },
    { field: "PrBaInnerBarcode" },
    // { field: "AuditTrail" },
    { field: "module" },
    { field: "count" },
    { field: "date" },
    { field: "price" },
  ]);





  useEffect(() => {
    setStore(storeList);
    const fetchData = async () => {
      // const result = await getProductStock(store,barcode,module,startDate,endDate);
      // setStore(result.data)
    };
    fetchData();


  }, [])



  function onChangeStore(st) {

    setSearchQuery({ ...initialSearch, store: st })


  }

  useEffect(() => {
    let barcodeList = []
    if (productStock.length != 0) {
      productStock.Table.forEach(item => {
        let barcodeavaibleCheck = barcodeList.filter(e => e.barcode == item.PrBaInnerBarcode).length
        if (barcodeavaibleCheck == 0) {
          barcodeList.push({ barcode: item.PrBaInnerBarcode });
        }
      });
      setBarcodeList(barcodeList);
      setRowData(productStock.Table);
    }


    // 
  }, [productStock])

  function onChangeBarcode(barcode) {


    if (barcode == "") {
      setRowData(productStock.Table);
    } else {
      let selectionList = productStock.Table.filter(e => e.PrBaInnerBarcode == barcode)
      setRowData(selectionList);

    }

  }


  useEffect(() => {
debugger;
    if (searchQuery.store != undefined && productId != '') {
      try {
        let storeIP = "";
        if (searchQuery.store == "Gravesend") {
          storeIP = "";
        } else if (searchQuery.store == "Eastham") {
          storeIP = "";
        } else if (searchQuery.store == "Streatham") {
          storeIP = "";
        } else if (searchQuery.store == "Sudbury") {
          storeIP = "";
        } else if (searchQuery.store == "Perivale") {
          storeIP = "";
        } else if (searchQuery.store == "Hounslow") {
          storeIP = "";
        } else if (searchQuery.store == "Hayes") {
          storeIP = "";
        } else if (searchQuery.store == "Watfords") {
          storeIP = "";
        }



        const fetchData = async () => {
          let shop = store
          let productId = 12921
          let barcode
          let moduleDropdown = module
          let startDate
          let endDate
          const result = await getProductStock(storeIP, productId, barcode, moduleDropdown, startDate, endDate);

          result.data.Table.forEach(element => {
            let firstSplit = element.AuditTrail.split("<span style=\"font-weight:bold;\">");
            let secondSplit = firstSplit[1]?.split(":")
            let threeSplit = secondSplit[0]?.split("(")[0];
            let fourSplit = secondSplit[4]?.split("<")[0];
            let fiveSplit = secondSplit[1]?.split("</span>")[0];
            let sixSplit = firstSplit[3]?.split("</span>")[0];
            let sevenSplit = firstSplit[2]?.split("</span>")[0];
            let eightSplit = firstSplit[4]?.split("</span>")[0];
            let nineSplit = firstSplit[3]?.split("</span>")[0];
            element.module = threeSplit?.trim();



            if (element.module == "SALES") {

              element.count = fourSplit?.trim();
              element.date = sevenSplit;
              element.price = nineSplit;
            } else if (element.module == "Delivery") {
              element.count = fiveSplit?.trim();
              element.date = sixSplit;
              element.price = eightSplit;

            } else if (element.module == "Stock Take") {

              element.count = fiveSplit?.trim();
              element.date = sevenSplit;
              element.price = sixSplit;
            }

          });
          setProductStock(result.data)
        };
        fetchData();
      } catch (error) {

      }
    }



  }, [searchQuery])



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
                <option key={1} value="">Select</option>
                <option key={2} value="Gravesend">Gravesend</option>
                <option key={3} value="Eastham">Eastham</option>
                <option key={4} value="Streatham">Streatham</option>
                <option key={6} value="Sudbury">Sudbury Hill</option>
                <option key={7} value="Perivale">Perivale</option>
                <option key={8} value="Hounslow">Hounslow West</option>
                <option key={9} value="Hayes">Hayes</option>
                <option key={10} value="Watfords">Watfords</option>



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
                onChange={(e) => onChangeBarcode(e.currentTarget.value)}
              >
                <option key={0} value="">ALL</option>

                {barcodeList.map((code) => (
                  <option key={code.barcode} value={code.barcode}>
                    {code.barcode}
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
                onChange={(e) => setSelectedModule(e.currentTarget.value)}
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










          <div className="row mt-4">

            {/* <OutTable className="mb-3" data={row} columns={col} tableClassName="ExcelTable2007" tableHeaderRowclassName="heading" /> */}
            <div
              className="ag-theme-quartz" // applying the Data Grid theme
              style={{ height: 500 }} // the Data Grid will fill the size of the parent container
            >
              <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
              />
            </div>


          </div>





        </div>
      </div>

    </>
  )
}