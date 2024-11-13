import {useEffect, useState} from 'react';
import useInfiniteScroll from "react-infinite-scroll-hook";
import axios from "axios";
import CardStarship from "../components/CardStarship.tsx";

function MainScreen() {
    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchStarships()
    }, [page]);

    const fetchStarships = async () => {
        setLoading(true)
        const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`)
        setStarships((prevStarships) => [...prevStarships, ...response.data.results])
        setLoading(false);
        if (!response.data.next) {
            setHasMore(false)
        }
    }


    const [rootRef] = useInfiniteScroll({
        loading,
        hasNextPage: hasMore,
        onLoadMore: () => setPage((page) => page + 1),
        // disabled: Boolean(error),
        rootMargin: '0px 0px 400px 0px',
    });

    return (
        <>
            <div
                ref={rootRef}
                className="flex flex-wrap align-baseline bg-slate-100">
                {starships.map((starship, index) => (
                    <CardStarship key={index} starship={starship}/>
                ))}
            </div>
        </>
    );
}

export default MainScreen;