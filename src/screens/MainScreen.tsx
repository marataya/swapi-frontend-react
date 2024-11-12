import React, {useEffect, useState} from 'react';
import useInfiniteScroll from "react-infinite-scroll-hook";
import axios from "axios";
import Header from "./Header.tsx";
import CardPlanets from "../components/CardPlanets.tsx";

function MainScreen() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCharacters()
    }, [page]);

    const fetchCharacters = async () => {
        setLoading(true)
        const response = await axios.get(`https://swapi.dev/api/planets/?page=${page}`)
        setCharacters((prevCharacters) => [...prevCharacters, ...response.data.results])
        setLoading(false);
        if (!response.data.next) {
            setHasMore(false)
        }
    }


    const [infiniteRef, {rootRef}] = useInfiniteScroll({
        loading,
        hasNextPage: hasMore,
        onLoadMore: () => setPage((page) => page + 1),
        // disabled: Boolean(error),
        rootMargin: '0px 0px 400px 0px',
    });

    return (
        <>
            <Header/>
            <div
                ref={rootRef}
                className="flex flex-wrap align-baseline bg-slate-100">
                {characters.map((character, index) => (
                    <CardPlanets key={index} character={character}/>
                ))}
            </div>
        </>
    );
}

export default MainScreen;