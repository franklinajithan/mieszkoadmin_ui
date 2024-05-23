
import React, { useEffect, useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductSpreadsheet from './ProductSpreadsheet'
import ProductGrid from './ProductGrid'
export default function productlist() {



  return (
    <>


      <div className="card" style={{ height: '100%' }}>
        <div className='card-header'>
          <h4><strong>Product List</strong></h4>

        </div>
        <div className='card-body'>



          <div className="col-12">

            <Tabs>
              <TabList>
                <Tab>Product Grid</Tab>
                <Tab>Spreadsheet</Tab>
              </TabList>

              <TabPanel>
                <ProductGrid />
              </TabPanel>
              <TabPanel>
                <ProductSpreadsheet />
              </TabPanel>
            </Tabs>








          </div>





        </div>
      </div>

    </>
  )
}