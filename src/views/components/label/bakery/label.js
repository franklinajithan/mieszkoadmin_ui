

import React, { useEffect, useState } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import Barcode from 'react-barcode';
import { CSpinner } from '@coreui/react'
import logo from 'src/assets/images/logo.png'
export default function bakery() {


    const [newRow, setNewRow] = useState([]);
    const [buttonSpinner, setButtonSpinner] = useState(false);

    useEffect(() => {


    }, [])




    const fileHandler = (event) => {

        let fileObj = event.target.files[0];

        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            }
            else {
                //resp.cols
                let data = resp.rows.filter(x => x.length != 0);
                setNewRow(data);




            }
        });
    }


    const PrintDiv = () => {
        setButtonSpinner(true)
        if (document.getElementById("deli") != null) {
            var data = document.getElementById("deli").innerHTML;
        }
        var myWindow = window.open('', "theFrame");
        myWindow.document.write('<html><head>');
        myWindow.document.write('<script>');
        myWindow.document.write('function myFunction() {alert("Page is loaded");window.print();}');
        myWindow.document.write('</script>');
        myWindow.document.write('<style type="text/css">');
        myWindow.document.write(
            '' +
            + ".deli-template-logo { margin-top: -1px;width: 51px;}"
            + ".deli-template-product-image { margin-top: -17px;max-width: 100%;}"
            + ".bg-colour-yellow{  background-color: yellow; print-color-adjust: exact;}"
            + "@media print { body {-webkit-print-color-adjust: exact;} }"
            + "@media print { display: table;table-layout: fixed;margin: 1cm;  }"
            + "svg {float: right;}"
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
            <div className='row'>

                {newRow.map(function (object, index) {
                    const image = new URL(`../../../../assets/iMAGE/${object[4]}`, import.meta.url).href
                    try {



                        return (<div style={{ marginBottom: '10px' }} className='col-4' key={index}>

                            <div style={(object[1].toString().length != 0) ? { border: '4px solid #c23b32', height: '230px', backgroundColor: 'white' } : { border: '4px solid white', height: '230px', backgroundColor: 'white' }}>
                                <div className="row">
                                    <div className="col-md-2">



                                        {(object[1].toString().length != 0) && <img style={{ marginTop: '7px', width: '60px', marginLeft: '3px', marginBottom: '-14px' }} src={logo} />}
                                    </div>

                                    {(object[1].toString().length != 0) && <> {(object[1].toString().length <= 35) && <div className="col-md-10" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', height: '52px' }}>
                                        {object[1]}
                                    </div>}
                                        {((object[1].toString().length > 35) && (object[1].toString().length <= 45)) && <div className="col-md-10" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '18px', height: '52px' }}>
                                            {object[1]}
                                        </div>}
                                        {(object[1].toString().length > 45) && <div className="col-md-10" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '16px', height: '52px' }}>
                                            {object[1]}
                                        </div>}</>}


                                </div>

                                {(object[1].toString().length != 0) &&
                                    <div className="row" style={{ paddingTop: '9px', paddingBottom: '9px' }}>
                                        <div className="col-md-6" style={{ paddingLeft: '15px', paddingTop: '2px' }}>
                                            <div className='bg-colour-yellow' style={{ paddingLeft: '10px', position: 'relative', height: '100px', width: '170px', border: '4px solid #c23b32', padding: '0 0' }}>
                                                <div style={{ fontSize: '46px', fontWeight: 'bold' }}>£  {object[2]}</div>
                                                <div style={{ fontSize: '20px', fontWeight: 'bold', float: 'right', marginRight: '2px', marginTop: '-6px' }}>&nbsp;{object[3]}</div>

                                            </div>

                                        </div>
                                        <div className="col-md-6" style={{ paddingLeft: '15px', paddingTop: '2px' }}>
                                        <div style={{ height: '100px', width: '130px', marginLeft: '10px' }}>
                                                < img style={{ height: '100%', width: '100%', objectFit: 'contain', transform: 'scale(1.11)' }} src={image} />
                                               
                                            </div>

                                        </div>

                                      

                                    </div>}

                                <div className="row" >
                                    <div className="col-8">
                                        {(object[1].toString().length != 0) && <div className="row" style={{ paddingLeft: '15px', paddingRight: '15px', marginBottom: '1px', marginTop: '-6px' }}>
                                            <span style={{ fontSize: '8px', paddingLeft: '2px', paddingRight: '0', border: '2px solid #c23b32',position:'relative',zIndex:1 }} className='object-text'>
                                                May Contain traces of mustard, celery, soy, milk egg, sulphites, gluten, sesame, crustaceans, fish, lupin, mollusc, nuts, peanuts. *Please ask member of staff for a list of all ingredients</span>
                                        </div>}
                                    </div>
                                    <div className="col-4">
                                        <div className="" style={{ marginTop: '6px' }}>


                                            <div style={{ position: 'relative', width: '150px', float: 'right', right: '1px', paddingRight: '2px' }}>

                                                {(object[0].toString().length <= 10) && <Barcode marginTop={0} float={'right'} marginLeft={0} marginBottom={0} marginRight={-1} textPosition='right' displayValue={false} fontSize={4} value={object[0].toString()} format="CODE128" width={1} height={20} />}
                                                {(13 > object[0].toString().length && object[0].toString().length > 10) && <Barcode marginTop={0} float={'right'} marginLeft={0} marginBottom={0} marginRight={-1} textPosition='right' displayValue={false} fontSize={4} value={object[0].toString()} format="CODE128" width={1} height={20} />}
                                                {(object[0].toString().length >= 13) && <Barcode marginTop={0} float={'right'} marginLeft={0} marginBottom={0} marginRight={-1} textPosition='right' displayValue={false} fontSize={4} value={object[0].toString()} format="CODE128" width={1} height={20} />}

                                            </div>



                                            {(object[0].toString().length <= 10) && <div style={{ position: 'relative', float: 'right', right: '0px', paddingRight: '2px', fontSize: '10px', fontWeight: 'bold', marginTop: '-10px' }}>{object[0]}</div>}
                                            {(13 > object[0].toString().length && object[0].toString().length > 10) && <div style={{ position: 'relative', float: 'right', right: '0px', paddingRight: '2px', fontSize: '10px', fontWeight: 'bold', marginTop: '-10px' }}>{object[0]}</div>}
                                            {(object[0].toString().length >= 13) && <div style={{ position: 'relative', float: 'right', right: '0px', paddingRight: '2px', fontSize: '10px', fontWeight: 'bold', marginTop: '-10px' }}>{object[0]}</div>}

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        );



                    } catch (error) {

                    }

                })}



            </div>
        )
    };








    return (
        <>


            <div className="card" style={{ height: '100%' }}>
                <div className='card-header'>
                    <h4><strong>Bakery Label</strong></h4>

                </div>
                <div className='card-body'>



                    <div className="col-8">
                        <div className="row mb-m-0">
                            <strong className='mb-2'>Excel Format</strong>

                        </div>
                        <div className="row border m-0">
                            <div className="col-3"><strong>Barcode</strong></div>
                            <div className="col-5"><strong>Product Name</strong></div>
                            <div className="col-2"><strong>Weight</strong></div>
                            <div className="col-2"><strong>Price</strong></div>
                        </div>

                        <div className="row mb-4 border m-0">
                            <div className="col-3">2126280</div>
                            <div className="col-5">TARCZYNSKI SZYNKA KONS WIEPRZO</div>
                            <div className="col-2">KG</div>
                            <div className="col-2">13.49</div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="row mb-m-0">
                            <strong className='mb-2'>Excel Upload</strong>

                        </div>
                        <div className='col-md-4'><input type="file" className='form-control' onChange={(e) => fileHandler(e)} /></div>
                        <div className='col-md-2'><button type='button' className='btn btn-primary col-8' onClick={PrintDiv} >
                            {buttonSpinner && <CSpinner as="span" size="sm" variant="grow" aria-hidden="true" >
                                Loading...</CSpinner>} Print
                        </button></div>

                    </div>
                    <iframe className="mb-3 mt-3" id="theFrame" name="theFrame"></iframe>

                    <div className="mb-3 mt-3" id='deli'> <MyDocument></MyDocument></div>


                </div>
            </div>

        </>
    )
}