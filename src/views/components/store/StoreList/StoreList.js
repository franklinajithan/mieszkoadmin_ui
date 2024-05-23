
import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import {MaterialReactTable, useMaterialReactTable} from 'material-react-table';
import {storeList, deleteStore} from '../../../../service/storeService';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateStore from './UpdateStore';
import { CModal } from '@coreui/react'


export default function StoreUpload() {
  const [data, setData] = useState([]);
  const [editModalvisible, setEditModalvisible] = useState(false);
  const [selectRow, setSelectRow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      const result = await storeList();
      setData(result.data)
    };
    fetchData();


  }, [])

  function onClickEdit(row) {
    setEditModalvisible(true);
    setSelectRow(row.original)
  }

    function onClickAdd(row) {
    setEditModalvisible(true);
   
  }

  function onClickDelete(row) {
    if (window.confirm('Are you sure you want to delete this store?')) {
      fetchData();
    }
    const fetchData = async () => {
      const result = await deleteStore(row.original.StoreID);
      const fetchData = async () => {
        const result = await storeList();
        setData(result.data)
      };
      fetchData();
    };
   
  }

  function oncloseModal(data) {

    setEditModalvisible(false);
    const fetchData = async () => {

      const result = await storeList();
      setData(result.data)
    };
    fetchData();

  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'StoreID',
        header: 'StoreID',
        size: 10,
      },
      {
        accessorKey: 'StoreName',
        header: 'Store Name',
        size: 50,
      },
      {
        accessorKey: 'Location',
        header: 'Location',
        size: 30,
      },
      {
        accessorKey: 'Address',
        header: 'Address',
        size: 300,
      },
      {
        accessorKey: 'Postcode',
        header: 'Postcode',
        size: 30,
      },


    ]
  );




  const table = useMaterialReactTable({
    columns,
    data: data,
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
      showGlobalFilter: true,
      pagination: { pageSize: 10 },
      density: 'compact',
      // showColumnFilters: true,
      columnPinning: {
        left: ['mrt-row-expand', 'mrt-row-select'],
        right: ['mrt-row-actions'],
      },
    },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    muiSearchTextFieldProps: {
      size: 'small',
      variant: 'outlined',
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        borderRadius: '0',
      },
    },

    muiPaginationProps: {
      color: 'secondary',
      rowsPerPageOptions: [10, 20, 30],
      shape: 'rounded',
      variant: 'outlined',
    },
    createDisplayMode: 'modal', 
    editDisplayMode: 'modal', 
    enableEditing: true,
    getRowId: (row) => row.id,
   
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Add New Product</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    //optionally customize modal content
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Edit User</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => onClickEdit(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => onClickDelete(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button variant="contained"onClick={() => onClickAdd()}>Add New Store</Button>
    ),

  });





  return (
    <>
      <CModal
        fullscreen="xxl"
        backdrop="static"
        visible={editModalvisible}
        onClose={() => setEditModalvisible(false)}
        aria-labelledby="StaticBackdropExampleLabel"
      >


        <UpdateStore detail={selectRow} oncloseModal={oncloseModal} />


      </CModal>

      <div className="card" style={{ height: '100%' }}>
        <div className='card-header'>
          <h4><strong>Store List</strong></h4>

        </div>
        <div className='card-body'>
          <div className="col-12">
            <MaterialReactTable table={table} />
          </div>





        </div>
      </div>

    </>
  )
}