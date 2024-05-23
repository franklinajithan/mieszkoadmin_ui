
import React, { useEffect, useState } from 'react'
import { HotTable } from '@handsontable/react';
import {
  productList
} from '../../../../service/productService';
const ProductSpreadsheet = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {

      const result = await productList();
      setData(result.data)

    };
    fetchData();





  }, [])


  return (
    <>


      <HotTable
        data={data}
        colHeaders={true}
        height="auto"
        width="auto"
        columns={(column) => {
          let columnMeta = {};

          if (column === 0) {
            columnMeta.data = 'ItemID';
          } else if (column === 1) {
            columnMeta.data = 'ItemName';
          } else if (column === 2) {
            columnMeta.data = 'Brand';
          } else if (column === 3) {
            columnMeta.data = 'Size';
          } else if (column === 4) {
            columnMeta.data = 'SupplierID';
          } else if (column === 5) {
            columnMeta.data = 'UOM';
          }else if (column === 6) {
            columnMeta.data = 'Price';
          }

          return columnMeta;
        }}
        minSpareRows={1}
        autoWrapRow={true}
        autoWrapCol={true}
        licenseKey="non-commercial-and-evaluation"
      />
    </>
  )
}

export default ProductSpreadsheet