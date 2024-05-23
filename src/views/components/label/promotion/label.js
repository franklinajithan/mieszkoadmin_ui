
import React, { useEffect, useState } from 'react'
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import Barcode from 'react-barcode';
import logo from 'src/assets/images/lg_log.png'
import circle from 'src/assets/images/yellow-circle.png'
export default function promotion() {

    const [col, setCol] = useState([]);
    const [row, setRow] = useState([]);
    const [buttonSpinner, setButtonSpinner] = useState(false);

    // const logo = require('../../assets/images/logo.png');
    // const circle = require('../../assets/images/yellow-circle.png');



    const fileHandler = (event) => {

        let fileObj = event.target.files[0];

        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            }
            else {
                setCol(resp.cols);
                let data = resp.rows.filter(x => x.length != 0);
                setRow(data);
                // setRow(data.slice(0, 101));

            }
        });
    }

    // const imageUpload = (event) => {

    //     let fileObj = event.target.files[0];


    // }

    const imageUpload = (event) => {
        // console.log(event.target);
        // console.log(files.target);
        // fs.writeFile(`../assets/images/testimonialImage/${files.target.files[0].name}.png`, files.target.files[0], function (err) {
        //     if (err) throw err;
        //     console.log('Replaced!');
        // });
    }


    const printiframe = () => {

        window.frames["theFrame"].focus();
        window.frames["theFrame"].print();
    }


    const PrintDiv = (id) => {

        // var data = document.getElementById('textcanves')   ;
        // var test = data.innerHTML;

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


                    let image;
                    // if (obj[5] != undefined) {
                    //     try {
                    //         image = require(`../../assets/iMAGE/${obj[5]}`);
                    //         if (image == undefined) {
                    //             image = require(`../../assets/iMAGE/noavailable.webp`)
                    //         }
                    //     } catch (error) {

                    //     }


                    // }





                    return (

                        <div style={{ border: '7px solid #c23b32', height: '850px', width: '1185px', backgroundColor: 'white' }} className="template-box mb-1 mt-1" key={index}>

                            <div>
                                <div className='row'>
                                    <div className="row">
                                        <div className="col-md-2">

                                            <img style={{ marginTop: '12px', width: '166px', marginLeft: '13px' }} src={logo} />
                                        </div>
                                        <div className="col-md-5 p-0">

                                            <div style={{ paddingLeft: '8px', color: '#c23b32', fontSize: '39px', fontFamily: 'fantasy', marginTop: '16px', fontWeight: 'bold' }} >POLSKIE SUPERMARKETY</div>
                                            <div style={{ fontFamily: 'Minion Pro', marginTop: '-30px', paddingTop: '-49px', color: '#c23b32', fontSize: '88px', fontWeight: 'bold' }}>MIESZKO</div>
                                        </div>
                                        <div className="col-md-5 p-0">
                                            <div style={{ marginLeft: '-50px', marginRight: '41px' }}>
                                                <div style={{ border: '5px solid #c23b32', backgroundColor: '#c23b32', marginTop: '10px', borderRadius: '25px' }}>
                                                    <div style={{ textAlign: 'center', fontSize: '49px', fontWeight: 'bold', color: 'white' }} >Promotional Period</div>

                                                    <div style={{ textAlign: 'center', marginTop: '-3px', fontSize: '32px', fontWeight: 'bold', color: 'white' }} > {obj[7]}</div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-6">

                                            {/* <div style={{ position: 'relative', height: '630px', float: 'left', paddingLeft: '130px' }}>
                                                    <img style={{ marginTop: '38px', padding: '20px', width: 'auto', height: 'auto', maxHeight: '100%', maxWidth: '100%' }} src={image} />
                                                </div> */}

                                            <div style={{ height: '545px', width: '640px', marginLeft: '10px' }}>
                                                < img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={image} />
                                            </div>

                                            {/* <div className='row'>
                                                    <div style={{ marginTop: '-150px' }}>
                                                        <span style={{ marginLeft: '13px', fontSize: '80px', fontWeight: 'bold', fontFamily: 'auto', color: '#c23b32' }}>ONLY AT</span>
                                                        <img style={{ marginTop: '-33px', width: '189px', marginLeft: '-6px' }} src={logo} />
                                                    </div>
                                                </div> */}

                                        </div>
                                        <div className="col-md-6">


                                            <div style={{ marginTop: '50px' }} className="container">
                                                <img className='image-shadow' style={{ position: 'relative', marginLeft: '58px', marginTop: '-26px', width: 'auto', height: 'auto', maxHeight: '87%', maxWidth: '96%' }} src={circle} />


                                                {!(obj[4]).toString().toLowerCase().includes("for") &&

                                                    <>
                                                        <div>
                                                            <span style={{ position: 'absolute', color: 'black', fontSize: '74px', fontWeight: 'bold', fontFamily: 'revert-layer', marginTop: '-350px', marginLeft: '180px' }}>£</span>
                                                            <span style={{ position: 'absolute', color: 'black', fontSize: '118px', fontWeight: 'bold', fontFamily: 'revert-layer', marginTop: '-309px', marginLeft: '231px' }}><span>{Number(obj[4]).toFixed(2)}</span></span>

                                                        </div>
                                                        <div className="container" style={{ marginTop: '100px' }}>

                                                        </div>
                                                    </>
                                                }

                                                {(obj[4]).toString().toLowerCase().includes("for") &&

                                                    <>
                                                        <div style={{ position: 'absolute', color: 'black' }}>
                                                            {/* <div style={{ fontSize: '108px', marginTop: '-432px', marginLeft: '63px', fontWeight: 'bold', textAlign: 'center' }}>{(obj[4].split(' '))[0]}</div>
                                                                <div style={{ fontSize: '70px', marginTop: '-117px', marginLeft: '288px', fontWeight: 'bold', textAlign: 'center' }}>FOR</div>
                                                                <div style={{ fontSize: '88px', marginTop: '-23px', marginLeft: '182px', fontWeight: 'bold', textAlign: 'center' }}>{(obj[4].split(' '))[2]}</div> */}

                                                            <div style={{ fontSize: '61px', marginTop: '-313px', marginLeft: '135px', fontWeight: 'bold', textAlign: 'center' }}>{obj[4]}</div>

                                                        </div>
                                                        <div className="container" style={{ marginTop: '50px' }}>

                                                        </div>
                                                    </>
                                                }


                                                {!(obj[4]).toString().toLowerCase().includes("for") &&
                                                    <div style={{ position: 'relative', marginTop: '-250px', color: 'white', fontSize: '46px', fontWeight: 'bold', marginLeft: '48%' }}>{obj[2]}</div>
                                                }
                                                {(obj[4]).toString().toLowerCase().includes("for") &&
                                                    <div style={{ position: 'relative', marginTop: '-250px', color: 'white', fontSize: '46px', fontWeight: 'bold', marginLeft: '48%' }}>{obj[2]}</div>
                                                }



                                            </div>
                                            {/* <div className="container" style={{marginTop: '47px'}}>
                                                    <div className='boxshadow' style={{ marginLeft: 'auto', marginRight: '87px', width: '395px' }}>
                                                        <div style={{ border: '6px solid #c23b32', backgroundColor: 'Yellow' }}>
                                                            <div style={{ paddingLeft: ' 21px', fontSize: '66px', fontWeight: 'bold', color: '#c23b32' }} >Save £ 0.99</div>

                                                        </div>
                                                    </div>
                                                </div> */}





                                        </div>

                                        <div className="col-md-3">



                                            <div id="flex">

                                                {/* <div style={{ float: 'left' }}>
                                                    <Barcode marginTop={0} float={'left'} marginLeft={0} marginBottom={0} marginRight={0} fontSize={25} value={obj[0].toString()} format="CODE128" width={25} height={55} />
                                                </div> */}
                                            </div>



                                        </div>
                                        <div className="col-md-9">

                                            <div id="flex" style={{ marginTop: '0px' }}>

                                                <div id="a" style={{ color: '#rgb(139 54 49)', fontWeight: 'bold', whiteSpace: 'nowrap', textAlign: 'right', fontSize: '42px' }}>{obj[3]}</div>
                                                {/* <div id="a" style={{ marginLeft: 'auto', marginRight: '0', color: '#rgb(139 54 49)', position: 'relative', float: 'right', right: '-20px', marginTop: '40px', fontSize: '42px', fontWeight: 'bold', whiteSpace: 'nowrap', fontFamily: 'system-ui', }}>{obj[3]}</div> */}
                                                <div id="b" style={{ color: '#rgb(139 54 49)', fontWeight: 'bold', textAlign: 'right', marginTop: '8px', fontSize: '31px', }}>{obj[6]} / {obj[1]}</div>

                                            </div>
                                            {/* <div className="flex">
                                                <div style={{ position: 'relative', float: 'right', height: '112px', width: '150px', marginTop: '70px', float: 'right', right: '-110px', }}>
                                                    <Barcode marginTop={0} float={'right'} marginLeft={0} marginBottom={0} marginRight={0} fontSize='25' value={obj[0]} format="CODE128" width='2' height='55' />
                                                </div>
                                            </div> */}
                                            {/* <span style={{  fontSize:'36px', position:'absolute',transform:'rotate(-51deg)',fontWeight:'bold'}}>HIT PRICE</span> */}
                                            {/* 2 for 1 Pound offer */}
                                            {/* <span style={{ position: 'absolute', marginTop: '57px', color: 'black', fontSize: '115px', fontWeight: 'bold', fontFamily: 'revert-layer', right: '410px' }}>2</span>
<span style={{ position: 'absolute', marginTop: '108px', color: 'black', fontSize: '70px', fontWeight: 'bold', fontFamily: 'revert-layer', right: '274px' }}>FOR</span>
<span style={{ position: 'absolute', marginTop: '57px', color: 'black', fontSize: '115px', fontWeight: 'bold', fontFamily: 'revert-layer', right: '135px' }}>£1</span> */}



                                            {/* <span style={{ position: 'relative', color: 'black', fontSize: '74px', fontWeight: 'bold', fontFamily: 'revert-layer' }}>£</span>

<span style={{ position: 'relative', color: 'black', fontSize: '127px', fontWeight: 'bold', fontFamily: 'revert-layer', }}>{Number(obj[4]).toFixed(2)}</span>
<img style={{ position: 'relative', marginLeft: '12px', marginTop: '-26px', width: 'auto', height: 'auto', maxHeight: '100%', maxWidth: '100%' }} src={circle} />

<div style={{ position: 'relative', marginTop: '-167px', color: 'white', fontSize: '46px', fontWeight: 'bold', right: '22%' }}>{obj[2]}</div>
*/}
                                        </div>


                                    </div>
                                    <div>

                                    </div>




                                </div>

                            </div>
                        </div>
                    );


                    // }


                })}


            </div>
        )
    };






    return (
        <>
            {/* <div className='row'>
                <div className="input-group mb-3">
                    <label className="input-group-text" >Upload Image</label>
                    <input type="file" className="form-control" id="inputGroupFile01" onChange={(e) => imageUpload(e)} />
                </div>
                <div className='col-md-4'><input type="file" className='form-control' onChange={(e) => fileHandler(e)} /></div>
                <div className='col-md-2'><button className='btn btn-primary' onClick={() => PrintDiv()} >Load PDF
                </button></div>
                <div className='col-md-2'>  <button className="btn btn-primary " onClick={() => printiframe()}>Print
                </button></div>
            </div>




             <OutTable className="mb-3" data={row} columns={col} tableClassName="ExcelTable2007" tableHeaderRowclassName="heading" /> 
            <iframe id="theFrame" name="theFrame" className="mb-3"></iframe>
            <div id='textcanves' className="mb-3"> <MyDocument></MyDocument></div> */}



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
                        <div className='col-md-4'><input type="file" className='form-control' onChange={(e) => fileHandler(e)} /></div>
                        <div className='col-md-2'><button type='button' className='btn btn-primary col-8' onClick={PrintDiv} >
                            {buttonSpinner && <CSpinner as="span" size="sm" variant="grow" aria-hidden="true" >
                                Loading...</CSpinner>} Print
                        </button></div>
                        {/* <div className='col-md-2'>  <button type='button' className="btn btn-primary col-8" onClick={printiframe}>Print
            </button></div> */}
                    </div>
                    <iframe className="mb-3 mt-3" id="theFrame" name="theFrame"></iframe>

                    <div className="mb-3 mt-3" id='textcanves'> <MyDocument></MyDocument></div>


                </div>
            </div>

        </>
    )
}