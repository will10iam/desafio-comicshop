import React from "react";
import styled from "styled-components";

import noImage from '../../../assets/noImage.gif'


const Comic = (props) => {

    const imgCover = props.thumbnail.path + '.' + props.thumbnail.extension;
    const cover = imgCover === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ?
        noImage : imgCover;

    return (
        <>
            <CardP title={props.title}>
                <img src={cover} alt='' />
                <div className="infos">
                    <h1>{props.title}</h1>
                    <h2>49.90</h2>
                </div>
            </CardP>

        </>
    )
}

export default Comic;

//======================================= STYLES ================================//

const CardP = styled.div`
    display: flex;
    justify-content: stretch;
    color: #fff;
    height: min-content;
    width: min-content;
    padding: 10px;
    

    img {
        width: 30%;
        height: 30%;
        border-radius: 15px;
        
    }

    .infos {
        background-color: #0A0B0B;
        width: 350px;
        padding: 5px;
        border-radius: 10px;
    }
    h1 {
        
        font-family: 'League Spartan', sans-serif;
        font-weight: 600;
        background-color: #0A0B0B;
        
        font-size: 1.3em;
    }

    h2 {
        font-family: 'League Spartan', sans-serif;
        margin-top: 40px;
        font-size: 1.8em;
        background-color: #0A0B0B;
        
    }
        
`

