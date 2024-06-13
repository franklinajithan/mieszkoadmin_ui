
import React, { useEffect, useState } from 'react'
import { useMemo } from 'react';
import { Box, Button, IconButton,Tooltip } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import {
  MaterialReactTable, //import alternative sub-component if we do not want toolbars
  useMaterialReactTable,
} from 'material-react-table';

import {
  productList
} from '../../../../service/productService';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const ProductGrid = () => {
  // const [validationErrors, setValidationErrors] = useState({});

  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
  
      const result = await productList();
      setData(result.data)
    };
    fetchData();





  }, [])




  // const {

  //   isError: isLoadingUsersError,
  //   isFetching: isFetchingUsers,
  //   isLoading: isLoadingUsers,
  // } = useGetUsers();
  //call UPDATE hook
  // const { mutateAsync: updateUser, isPending: isUpdatingUser } =
  //   useUpdateUser();
  //call DELETE hook
  // const { mutateAsync: deleteUser, isPending: isDeletingUser } =
  //   useDeleteUser();

  //CREATE action
  const handleCreateUser = async ({ values, table }) => {
    // const newValidationErrors = validateUser(values);
    // if (Object.values(newValidationErrors).some((error) => error)) {
    //   setValidationErrors(newValidationErrors);
    //   return;
    // }
    // setValidationErrors({});
    // await createUser(values);
    // table.setCreatingRow(null); //exit creating mode
  };

  //UPDATE action
  const handleSaveUser = async ({ values, table }) => {
    // const newValidationErrors = validateUser(values);
    // if (Object.values(newValidationErrors).some((error) => error)) {
    //   setValidationErrors(newValidationErrors);
    //   return;
    // }
    // setValidationErrors({});
    // await updateUser(values);
    // table.setEditingRow(null); //exit editing mode
  };

  //DELETE action
  const openDeleteConfirmModal = (row) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(row.original.id);
    }
  };


  //READ hook (get users from api)
  function useGetUsers() {
    // return useQuery({
    //   queryKey: ['users'],
    //   queryFn: async () => {
    //     //send api request here
    //     await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
    //     return Promise.resolve(fakeData);
    //   },
    //   refetchOnWindowFocus: false,
    // });
  }

  //UPDATE hook (put user in api)
  function useUpdateUser() {
    // const queryClient = useQueryClient();
    // return useMutation({
    //   mutationFn: async (user) => {
    //     //send api update request here
    //     await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
    //     return Promise.resolve();
    //   },
    //   //client side optimistic update
    //   onMutate: (newUserInfo) => {
    //     queryClient.setQueryData(['users'], (prevUsers) =>
    //       prevUsers?.map((prevUser) =>
    //         prevUser.id === newUserInfo.id ? newUserInfo : prevUser,
    //       ),
    //     );
    //   },
    //   // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
    // });

  }

  //DELETE hook (delete user in api)
  function useDeleteUser() {
    // const queryClient = useQueryClient();
    // return useMutation({
    //   mutationFn: async (userId) => {
    //     //send api update request here
    //     await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
    //     return Promise.resolve();
    //   },
    //   //client side optimistic update
    //   onMutate: (userId) => {
    //     queryClient.setQueryData(['users'], (prevUsers) =>
    //       prevUsers?.filter((user) => user.id !== userId),
    //     );
    //   },
    //   // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
    // });
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'item_id',
        header: 'Id',
        //  enableEditing: false,
          size: 30,
      },
      {
        accessorKey: 'product_name',
        header: 'Product Name',
        size: 50,
        //  muiEditTextFieldProps: {
        //  required: true,
        // error: !!validationErrors?.firstName,
        //  helperText: validationErrors?.firstName,
        //remove any previous validation errors when user focuses on the input
        // onFocus: () =>
        //   setValidationErrors({
        //     ...validationErrors,
        //     firstName: undefined,
        //   }),
        //optionally add validation checking for onBlur or onChange
      },
      //  },
      {
        accessorKey: 'brand',
        header: 'Brand',
        size: 30,
        //muiEditTextFieldProps: {
        //     required: true,
        //  error: !!validationErrors?.lastName,
        //  helperText: validationErrors?.lastName,
        //remove any previous validation errors when user focuses on the input
        // onFocus: () =>
        //   // setValidationErrors({
        //   //   ...validationErrors,
        //   //   lastName: undefined,
        // }),
      },
      //  },
      {
        accessorKey: 'size',
        header: 'Size',
        size: 30,
        //   muiEditTextFieldProps: {
        //     type: 'email',
        //     required: true,
        //  //   error: !!validationErrors?.email,
        //  //   helperText: validationErrors?.email,
        //     //remove any previous validation errors when user focuses on the input
        //    // onFocus: () =>
        //       // setValidationErrors({
        //       //   ...validationErrors,
        //       //   email: undefined,
        //       // }),
        //   },
      },
      {
        accessorKey: 'supplier_id',
        header: 'SupplierID',
        size: 30,
        // editVariant: 'select',
        // editSelectOptions: usStates,
        // muiEditTextFieldProps: {
        //   select: true,
        //   ///error: !!validationErrors?.state,
        //  // helperText: validationErrors?.state,
        // },
      },
      {
        accessorKey: 'uom',
        header: 'UOM',
        size: 30,
        // editVariant: 'select',
        // editSelectOptions: usStates,
        // muiEditTextFieldProps: {
        //   select: true,
        //   ///error: !!validationErrors?.state,
        //  // helperText: validationErrors?.state,
        // },
      }, 
      {
        accessorKey: 'Price',
        header: 'Price',
        size: 30,
        // editVariant: 'select',
        // editSelectOptions: usStates,
        // muiEditTextFieldProps: {
        //   select: true,
        //   ///error: !!validationErrors?.state,
        //  // helperText: validationErrors?.state,
        // },
      },
    ]
    /// ,
    //  [validationErrors],
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
    enableRowSelection: true,
    enableFullScreenToggle: true,
    initialState: {
      showGlobalFilter: true,
      pagination: { pageSize: 30 },
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
    createDisplayMode: 'modal', //default ('row', and 'custom' are also available)
    editDisplayMode: 'modal', //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    getRowId: (row) => row.id,
    // muiToolbarAlertBannerProps: isLoadingUsersError
    //   ? {
    //       color: 'error',
    //       children: 'Error loading data',
    //     }
    //   : undefined,
    // muiTableContainerProps: {
    //   sx: {
    //     minHeight: '500px',
    //   },
    // },
    // onCreatingRowCancel: () => setValidationErrors({}),
    // onCreatingRowSave: handleCreateUser,
    // onEditingRowCancel: () => setValidationErrors({}),
    //   onEditingRowSave: handleSaveUser,
    //optionally customize modal content
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
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values
          //or you can pass in a row object to set default values with the `createRow` helper function
          // table.setCreatingRow(
          //   createRow(table, {
          //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
          //   }),
          // );
        }}
      >
        Add New Product
      </Button>
    ),
    //   state: {
    //    // isLoading: isLoadingUsers,
    //    // isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
    //     //showAlertBanner: isLoadingUsersError,
    //  //   showProgressBars: isFetchingUsers,
    //   },
  });


  return (
    <>


      <MaterialReactTable table={table} />
    </>
  )
}

export default ProductGrid