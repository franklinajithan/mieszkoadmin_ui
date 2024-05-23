
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
    updateStore, addStore
} from '../../../../service/storeService';

import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react'
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import * as yup from 'yup';


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

export default function UpdateStore({detail, oncloseModal}) {
    const { register, setValue, getValues, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), });




    useEffect(() => {

        if (detail) {
            setValue('StoreID', detail.StoreID);
            setValue('location', detail.Location);
            setValue('storename', detail.StoreName);
            setValue('address', detail.Address);
            setValue('postcode', detail.Postcode);

        }

    }, [])


    const onSubmit = (data) => {


        const fetchData = async () => {
            if (detail) {
                const result = await updateStore(data.StoreID, data.storename, data.location, data.address, data.postcode);

            } else {
                const result = await addStore(data.storename, data.location, data.address, data.postcode);

            }

            oncloseModal(false)
        };
        fetchData();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CModalHeader>
                    {detail && <CModalTitle id="StaticBackdropExampleLabel">Edit Store</CModalTitle>}
                    {detail == undefined && <CModalTitle id="StaticBackdropExampleLabel">Add Store</CModalTitle>}
                </CModalHeader>
                <CModalBody>



                    <div className="row">
                        <div className="col-12">
                            <div className='row'>
                                <div className='col-4'> <label className="form-label">Store Name <span className="text-danger font-weight-bold ">*</span></label></div>
                                <div className='col-8'>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="storename"
                                        placeholder="Store Name"
                                        {...register('storename')}
                                    />
                                    <div className="small text-danger  pb-2   ">
                                        {errors.storename?.message}
                                    </div>
                                </div>
                            </div>


                            <div className='row'>

                                <div className='col-4'> <label className="form-label">Location <span className="text-danger font-weight-bold ">*</span></label></div>
                                <div className='col-8'>
                                    <input
                                        type="text"
                                        min="1"
                                        className="form-control"
                                        id="location"
                                        placeholder="Location"
                                        {...register('location')}
                                    />
                                    <div className="small text-danger  pb-2   ">
                                        {errors.location?.message}
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-4'> <label className="form-label">Address <span className="text-danger font-weight-bold ">*</span></label></div>
                                <div className='col-8'>
                                    <input
                                        type="text"
                                        min="1"
                                        className="form-control"
                                        id="address"
                                        placeholder="Address"
                                        {...register('address')}
                                    />
                                    <div className="small text-danger  pb-2   ">
                                        {errors.address?.message}
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-4'> <label className="form-label">Postcode <span className="text-danger font-weight-bold ">*</span></label></div>
                                <div className='col-8'>
                                    <input
                                        type="text"
                                        min="1"
                                        className="form-control"
                                        id="postcode"
                                        placeholder="Postcode"
                                        {...register('postcode')}
                                    />
                                    <div className="small text-danger  pb-2   ">
                                        {errors.postcode?.message}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => { oncloseModal(false) }}>
                        Close
                    </CButton>
                    <CButton color="primary" type="submit">Save changes</CButton>
                </CModalFooter>

            </form>

        </>
    )
}


UpdateStore.propTypes = {
    detail: PropTypes.any,
    oncloseModal: PropTypes.func,
};

