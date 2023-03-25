import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import marvel from '../../assets/46.svg'
import cart from '../../assets/47.svg'


export default function Header() {
    return (
        <>
            <HHeader>
                <Link to="/"><img src={marvel} alt="" className='logo' /></Link>
                <Link to="/"><img src={cart} alt="" className='cart' /></Link>
            </HHeader>
        </>
    )
}

//--------------------------------- STYLES -----------------------------------------//

const HHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    background-color: #000000;


    & .logo {
        width: 50%;
        margin-left: 5em;
    }
        

    & .cart {
        width: 30%;
        margin-left: 5em;
        
    }
`