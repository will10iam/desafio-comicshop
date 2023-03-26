import React from "react";
import Pagination from '@mui/material/Pagination'


export default function HomePagination(props) {
    return (

        <>

            <Pagination count={5} page={props.page} onChange={props.handleChange} size='large' color='primary' />
        </>
    )
}