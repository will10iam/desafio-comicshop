import React from "react";
import Comic from "../../components/Header/ListComics/Comic";
import { useComics } from "../../hooks/useComics";
import ListComics from "../../components/Header/ListComics";
import Loading from "../../components/Loading";
import styled from "styled-components";
import Pagination from '../../components/Pagination'


export default function Home() {

    const [{ comics, page, load }, handleChange] = useComics();

    return (
        <>
            {load ? <Loading /> : (
                <div>
                    <ListComics>
                        <Grid>
                            {comics.map((comic) => (
                                <div key={comic.id}>
                                    <Comic
                                        id={comic.id}
                                        title={comic.title}
                                        price={comic.price}
                                        thumbnail={comic.thumbnail}
                                    />
                                </div>
                            ))}
                        </Grid>
                    </ListComics>
                    <Pagination page={page} handleChange={handleChange} classname="pages" />
                </div>
            )}
        </>


    )
}

//======================================= STYLES ================================//

const Grid = styled.div`
    max-width: 1400px;
    display: grid;
    margin-top: 50px;
    justify-items: center;

    @media (min-width: 900px){
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
    }

`