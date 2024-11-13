import {useEffect, useState} from 'react'
import useInfiniteScroll from "react-infinite-scroll-hook"
import axios from "axios"
import CardPlanet from "../components/CardPlanet.tsx"

function MainScreen() {
    const [planets, setPlanets] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchPlanets()
    }, [page])

    const fetchPlanets = async () => {
        setLoading(true)
        const response = await axios.get(`https://swapi.dev/api/planets/?page=${page}`)
        setPlanets((prevPlanets) => [...prevPlanets, ...response.data.results])
        setLoading(false)
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
    })

    return (
        <>
            <div
                ref={rootRef}
                className="flex flex-wrap align-baseline bg-slate-100">
                {planets.map((planet, index) => (
                    <CardPlanet key={index} planet={planet}/>
                ))}
            </div>
        </>
    )
}

export default MainScreen