import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import marvel from '../Assets/marvel.svg'


export default function Header() {
    return (
        <>
            <HHeader>
                <Link to="/"><img src={marvel} alt="" className='logo' /></Link>
                <Link to="/checkout"><ion-icon name="cart-outline"></ion-icon></Link>
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
        position: absolute;
        height: 60%;
        top: 14;
    }
`