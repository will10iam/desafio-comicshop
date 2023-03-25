import React from "react";
import styled from "styled-components";


export default function Loading() {
    return (
        <>
            <Load>Carregando Quadrinhos...</Load>

        </>
    )

}


//======================================= STYLES ================================//


const Load = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 14px;   
`