
import React, { useEffect, useState } from 'react'
import { ExcelRenderer } from 'react-excel-renderer';
import Barcode from 'react-barcode';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import logo from 'src/assets/images/lg_log.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { uploadBarcodeImage } from '../../../../service/productService';
import CIcon from '@coreui/icons-react'
import 'react-tabs/style/react-tabs.css';
import { useMemo } from 'react';
import { useRef } from 'react';
import circle from 'src/assets/images/yellow-circle.png'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
    cilCloudUpload
} from '@coreui/icons'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { ImageURL } from '../../../../_config';
import axios from 'axios'
import { CModal } from '@coreui/react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';




export default function promotion() {
    // =TEXT(D1,"0.00")
    const [dataItem, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState([]);
    const [row, setRow] = useState([]);
    const [showTable, setShowTable] = useState(true);
    const [file, setFile] = useState([]);
    const [fileName, setFileName] = useState([]);


    const [editModalvisible, setEditModalvisible] = useState(false);
    const [barcodeShow, setBarcodeShow] = useState(true);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const imageHash = Date.now()
    const fileInput = useRef()

    const baseURL = "http://localhost:8800/image/"

  

    const columns = useMemo(
        () => [
        
            {
                accessorKey: 'imageURL',
                header: 'Image',
                size: 10,
                Cell: ({ renderedCellValue, row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >


                        <img
                            alt="avatar"
                            width={100}
                            height={100}
                            src={baseURL + renderedCellValue + ".webp?" + imageHash}
                            loading="lazy"
                            style={{ borderRadius: '50%' }}
                        />

                    </Box>
                ),

            },
            {
                accessorKey: '0',
                header: 'Barcode',
                size: 50,
            },
            {
                accessorKey: '1',
                header: 'Band',
                size: 50,
            },
            {
                accessorKey: '2',
                header: 'Each',
                size: 30,
            },
            {
                accessorKey: '3',
                header: 'Weight',
                size: 30,
            },
            {
                accessorKey: '4',
                header: 'Product Name',
                size: 30,
            },
            {
                accessorKey: '5',
                header: 'Price',
                size: 30,
            },
            {
                accessorKey: '6',
                header: 'Image',
                size: 30,
            },
            {
                accessorKey: '7',
                header: 'Promotion Date',
                size: 30,
            },


        ]
    );

    const uploadImage = async (value, event) => {
        setShowTable(false)
        const formData = new FormData();
        formData.append("file", event.target.files[0]);
        formData.append("fileName", value);
        const result = await uploadBarcodeImage(value, formData);
        if (result) {
            setShowTable(true)
            setData(dataItem)

        } else {
            setShowTable(true)
            setData(dataItem)
        }


    }


    const fileHandler = (event) => {

        let fileObj = event.target.files[0];

        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            }
            else {
      
                resp.rows.forEach(element => { element.id = element[0], element.imageURL = element[0] });
                let data = resp.rows.filter(x => x.length != 0);
                setData(data)
                setRow(data);


            }
        });
    }

    function onClickEdit(row) {
        setEditModalvisible(true);
 
    }

    const table = useMaterialReactTable({
        columns,
        data: row,
        enablePagination: true,
        enableBottomToolbar: true,
        enableColumnFilterModes: true,
        enableColumnOrdering: true,
        enableGrouping: true,
        enableColumnPinning: true,
        enableFacetedValues: true,
        enableRowActions: true,
        enableFullScreenToggle: true,

        initialState: {
            positionActionsColumn: 'first',
            showGlobalFilter: true,
            pagination: { pageSize: 10 },
            density: 'compact',
 
            columnPinning: {
                left: ['mrt-row-actions'],
              
            },
        },
 
        getRowId: (row) => row.id,



        renderRowActions: ({ row, table }) => (

            <Box>


                <input type="file" className="form-control btn btn-primary" id="upload" onChange={(event) => uploadImage(row.original.id, event)} />


            </Box>

        ),


    });




    const PrintDiv = (id) => {


        if (document.getElementById("textcanves") != null) {
            var data = document.getElementById("textcanves").innerHTML;
        }
        var myWindow = window.open('', "theFrame");
        myWindow.document.write('<html><head>');
        myWindow.document.write('<style type="text/css">');
        myWindow.document.write(
            '' +

            +".boxshadow { box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;}"
            + "#flex {display: flex;flex-direction: column;}"
            + "#a {order: 1;}"
            + ".image-shadow {filter: drop-shadow(4px 11px 15px #222)}"
            + "#b { order:  2;}"
            + '');
        myWindow.document.write('</style>')

        myWindow.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" type="text/css" />');
        myWindow.document.write('</head><body >');
        myWindow.document.write(data);
        myWindow.document.write('</body></html>');

        setTimeout(function () { //Start the timer
            window.frames["theFrame"].focus();
            window.frames["theFrame"].print();
            setButtonSpinner(false)
        }, 1000)
    }
    const MyDocument = () => {


        return (
            <div>

                {row.map(function (obj, index) {

                    // if (index != 0) {
                    if (obj[0] == undefined) {
                        obj[0] = ''
                    }
                    if (obj[1] == undefined) {
                        obj[1] = ''
                    }
                    if (obj[2] == undefined) {
                        obj[2] = ''
                    }
                    if (obj[3] == undefined) {
                        obj[3] = ''
                    }
                    if (obj[4] == undefined) {
                        obj[4] = ''
                    }

                    if (obj[7] == undefined) {
                        obj[7] = ''
                    }

                    const image = new URL(baseURL + `${obj[6]}`, import.meta.url).href


                    return (

                        <div style={{ border: '7px solid #c23b32',
                            height: '850px',
                            width: '1185px',
                            backgroundColor: 'white',
                            borderRadius: '15px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            overflow: 'hidden',
                            margin: '10px auto', }} className="template-box mb-1 mt-1" key={index}>

                            <div>
                                <div className='row'>
                                    <div className="row">
                                        <div className="col-md-2">

                                            <img style={{ marginTop: '12px', width: '166px', marginLeft: '13px' }} src={logo} />
                                        </div>
                                        <div className="col-md-5 p-0">

                                            <div style={{ paddingLeft: '8px', color: '#c23b32', fontSize: '42px', fontFamily: 'fantasy', marginTop: '16px', fontWeight: 'bold' }} >POLSKIE SUPERMARKETY</div>
                                            <div style={{ fontFamily: 'Minion Pro', marginTop: '-30px', paddingTop: '-49px', color: '#c23b32', fontSize: '88px', fontWeight: 'bold' }}>MIESZKO</div>
                                        </div>
                                        <div className="col-md-5 p-0">
                                            <div style={{ marginLeft: '-50px', marginRight: '41px' }}>
                                                <div style={{ border: '5px solid #c23b32', backgroundColor: '#c23b32', marginTop: '10px', borderRadius: '25px' }}>
                                                    <div style={{ textAlign: 'center', fontSize: '49px', fontWeight: 'bold', color: 'white' }} > Promotional Period</div>


                                                    {((obj[7].toString().length != 0) && (obj[7].toString().length <= 30)) && <div style={{ textAlign: 'center', marginTop: '-3px', fontSize: '32px', fontWeight: 'bold', color: 'white' }} > {obj[7]}</div>}
                                                    {(obj[7].toString().length > 30) && <div style={{ textAlign: 'center', marginTop: '-3px', fontSize: '28px', fontWeight: 'bold', color: 'white' }} > {obj[7]}</div>}

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-6">

                                     

                                            <div style={{ height: '545px', width: '640px', marginLeft: '10px' }}>
                                                < img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={image} />

                                            </div>

                                         

                                        </div>
                                        <div className="col-md-6">


                                            <div style={{ marginTop: '50px' }} className="container">
                                                <img className='image-shadow' style={{ position: 'relative', marginLeft: '58px', marginTop: '-26px', width: 'auto', height: 'auto', maxHeight: '87%', maxWidth: '96%' }} src={circle} />


                                                {!(obj[5]).toString().toLowerCase().includes("for") &&

                                                    <>
                                                        <div>
                                                            <span style={{ position: 'absolute', color: 'black', fontSize: '74px', fontWeight: 'bold', fontFamily: 'revert-layer', marginTop: '-350px', marginLeft: '180px' }}>£</span>


                                                            {(obj[5]?.toFixed(2).toString().length <= 4) &&<span style={{ position: 'absolute', color: 'black', fontSize: '118px', fontWeight: 'bold', fontFamily: 'revert-layer', marginTop: '-309px', marginLeft: '231px' }}><span>{Number(obj[5])?.toFixed(2)}</span></span>}
                                                            {(obj[5]?.toFixed(2).toString().length > 4) &&<span style={{ position: 'absolute', color: 'black', fontSize: '93px', fontWeight: 'bold', fontFamily: 'revert-layer', marginTop: '-309px', marginLeft: '231px' }}><span>{Number(obj[5])?.toFixed(2)}</span></span>}

                                                        </div>
                                                        <div className="container" style={{ marginTop: '100px' }}>

                                                        </div>
                                                    </>
                                                }

                                                {(obj[5]).toString().toLowerCase().includes("for") &&

                                                    <>
                                                        <div style={{ position: 'absolute', color: 'black' }}>
                                                        
                                                            <div style={{ fontSize: '55px', marginTop: '-288px', marginLeft: '163px', fontWeight: 'bold', textAlign: 'center' }}>{obj[5]}</div>

                                                        </div>
                                                        <div className="container" style={{ marginTop: '50px' }}>

                                                        </div>
                                                    </>
                                                }


                                                {(!(obj[5]).toString().toLowerCase().includes("for") && !(obj[2]).toString().toLowerCase().includes("kg")) &&
                                                    <div style={{ position: 'relative', marginTop: '-250px', color: 'white', fontSize: '46px', fontWeight: 'bold', marginLeft: '48%' }}>{obj[2]}</div>
                                                }

                                                {(!(obj[5]).toString().toLowerCase().includes("for") && (obj[2]).toString().toLowerCase().includes("kg")) &&
                                                    <div style={{ position: 'relative', marginTop: '-250px', color: 'white', fontSize: '46px', fontWeight: 'bold', marginLeft: '54%' }}>{obj[2]}</div>
                                                }
                                               
                                               {((obj[5]).toString().toLowerCase().includes("for") && !(obj[2]).toString().toLowerCase().includes("multi buy")) &&
                                                  <div style={{ position: 'relative', marginTop: '-193px', color: 'white', fontSize: '37px', fontWeight: 'bold', marginLeft: '30%' }}>{obj[2]}</div>
                                                }
                                                {((obj[5]).toString().toLowerCase().includes("for") && (obj[2]).toString().toLowerCase().includes("multi buy")) &&
                                                  <div style={{ position: 'relative', marginTop: '-193px', color: 'white', fontSize: '37px', fontWeight: 'bold', marginLeft: '40%' }}>{obj[2]}</div>
                                                }

                                                


                                            </div>
                                    





                                        </div>

                                        <div className="col-md-3">



                                            <div id="flex">

                                                {barcodeShow && <div style={{ float: 'left' }}>
                                                    <Barcode marginTop={0} float={'left'} marginLeft={0} marginBottom={0} marginRight={0} fontSize={20} value={obj[0].toString()} format="CODE128" width={2} height={50} />
                                                </div>}
                                            </div>



                                        </div>
                                        <div className="col-md-9">

                                            <div id="flex" style={{ marginTop: '0px' }}>



                                                {((obj[4].toString().length != 0) && (obj[4].toString().length <= 33)) && <div id="a" style={{ color: '#rgb(139 54 49)', fontWeight: 'bold', whiteSpace: 'nowrap', textAlign: 'right', fontSize: '40px' }}>{obj[4]}</div>}
                                                {((obj[4].toString().length > 33) && (obj[4].toString().length < 42)) && <div id="a" style={{ color: '#rgb(139 54 49)', fontWeight: 'bold', whiteSpace: 'nowrap', textAlign: 'right', fontSize: '30px' }}>{obj[4]}</div>}
                                                {(obj[4].toString().length >= 42) && <div id="a" style={{ color: '#rgb(139 54 49)', fontWeight: 'bold', whiteSpace: 'nowrap', textAlign: 'right', fontSize: '28px' }}>{obj[4]}</div>}
 <div id="b" style={{ color: '#rgb(139 54 49)', fontWeight: 'bold', textAlign: 'right', marginTop: '8px', fontSize: '31px', }}>{obj[3]} {obj[3] != '' && "/"} {obj[1]}</div>

                                            </div>

                                        </div>


                                    </div>
                                    <div>

                                    </div>




                                </div>

                            </div>
                        </div>
                    );


            


                })}


            </div>
        )
    };






    return (
        <>
          



            <div className="card" style={{ height: '100%' }}>
                <div className='card-header'>
                    <h4><strong>Promotion Label</strong></h4>

                </div>
                <div className='card-body'>



                    <div className="col-12">
                        <div className="row mb-m-0">
                            <strong className='mb-2'>Excel Format</strong>

                        </div>
                        <div className="row  border m-0">
                            <div className="col-2"><strong>Barcode</strong></div>
                            <div className="col-1"><strong>Brand</strong></div>
                            <div className="col-1"><strong>Each</strong></div>
                            <div className="col-1"><strong>Weight</strong></div>
                            <div className="col-2"><strong>Product Name</strong></div>
                            <div className="col-1"><strong>Price</strong></div>
                            <div className="col-2"><strong>Image</strong></div>
                            <div className="col-2"><strong>Promotion Date</strong></div>
                        </div>


                        <div className="row mb-4 border m-0">
                            <div className="col-2">5900344016666</div>
                            <div className="col-1">LISNER</div>
                            <div className="col-1">EACH</div>
                            <div className="col-1">1 Liter</div>
                            <div className="col-2">FILETY SLEDZ W SOSIE</div>
                            <div className="col-1">2.29</div>
                            <div className="col-2">5900344016666.webp</div>
                            <div className="col-2">22-4-2024 - 1-5-2025</div>
                        </div>
                    </div>



                    <div className='row'>
                        <div className="row mb-m-0">
                            <strong className='mb-2'>Excel Upload</strong>

                        </div>


                    </div>


                    <div className='row'>
                        <Tabs>
                            <TabList>
                                <Tab>Excel Upload</Tab>
                                <Tab>Image Upload</Tab>
                            </TabList>

                            <TabPanel>
                                <div className='row'>
                                    <div className='col-md-4'><input type="file" className='form-control' onChange={(e) => fileHandler(e)} /></div>
                                    <div className='col-md-2'><button type='button' className='btn btn-primary col-8' onClick={PrintDiv} >
                                        {buttonSpinner && <CSpinner as="span" size="sm" variant="grow" aria-hidden="true" >
                                            Loading...</CSpinner>} Print
                                    </button></div>

                                </div>

                                <iframe className="mb-3 mt-3" id="theFrame" name="theFrame"></iframe>

                                <div className="mb-3 mt-3" id='textcanves'> <MyDocument></MyDocument></div>
                            </TabPanel>
                            <TabPanel>
                                <div className='row'>
                                    <div className='col-md-4'><input type="file" className='form-control' onChange={(e) => fileHandler(e)} /></div>


                                    


                                    {showTable && <MaterialReactTable table={table} />}

                                </div>
                            </TabPanel>
                        </Tabs>


                    </div>





                </div>
            </div>


        </>
    )
}