
import React, { useEffect, useState } from 'react'
import { storeList, uploadPriceList } from '../../../../service/storeService';

import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import { HotTable } from '@handsontable/react';
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
export default function ProductUpload() {
  const [store, setStore] = useState([]);
  const [col, setCol] = useState([]);
  const [row, setRow] = useState([]);
  const [selectedStote, setSelectedStote] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      const result = await storeList();
      setStore(result.data)
    };
    fetchData();


  }, [])




  let tableCol = [
    { name: 'Number', key: 0 },
    { name: 'Product Code', key: 1 },
    { name: 'Barcode', key: 2 },
    { name: 'Item Description', key: 3 },
    { name: 'Size', key: 4 },
    { name: 'VAT Code', key: 5 },
    { name: 'Case Size', key: 6 },
    { name: 'Product Cost', key: 7 },
    { name: 'Case Cost', key: 8 },
    { name: 'Retail', key: 9 },
    { name: 'GP %', key: 10 },
    { name: '+/- Default', key: 11 }
  ]

  const fileHandler = (event) => {

    let fileObj = event.target.files[0];

    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      }
      else {

        let tempRow = [];
       
        setCol(tableCol);
        
        resp.rows.forEach(element => {
          if (element.length > 5) {
            tempRow.push(element);
            console.log("1")
          }
        });
        setRow(tempRow);

        //(data.slice(0, 101));

      }
    });
  }

  const handleClick = async (e) => {




    e.preventDefault();
    try {

      const formData = new FormData();
      formData.append("file",  JSON.stringify(row));

      formData.append("selectedStote", selectedStote);
      const result = await uploadPriceList(formData);

    } catch (error) {

    }
  }




  return (
    <>


      <div className="card" style={{ height: '100%' }}>
        <div className='card-header'>
          <h4><strong>Product Upload</strong></h4>

        </div>
        <div className='card-body'>



          <div className="row">

            <div className="col-3">
              <label className="form-label">Store </label>

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

            <div className="col-8">
              <label className="form-label">Upload Excel file </label>
              <div className="input-group">
                <input type="file" className="form-control" onChange={(e) => fileHandler(e)} />

              </div>
            </div>
            <div className="col-1">

              <button className="btn btn-primary upload-btn" type="button" onClick={handleClick}>Upload</button>

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