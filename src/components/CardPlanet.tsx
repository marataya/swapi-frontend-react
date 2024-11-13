import {useState} from "react"
import FormPlanet from "./FormPlanet.tsx";

const CardPlanet = ({planet}) => {
    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <div onClick={handleClick}
                 className="flex flex-col mx-auto min-w-80 max-w-80 align-baseline bg-white rounded-xl m-3 p-5 shadow-2xl">
                <div className="flex gap-5 justify-between">
                    <div>Name:</div>
                    <div className="font-bold">{planet.name}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Rotation Period:</div>
                    <div className="font-bold">{planet.rotation_period}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Orbital Period:</div>
                    <div className="font-bold">{planet.orbital_period}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Diameter:</div>
                    <div className="font-bold">{planet.diameter}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Climate:</div>
                    <div className="font-bold">{planet.climate}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Gravity:</div>
                    <div className="font-bold">{planet.gravity}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Terrain:</div>
                    <div className="font-bold">{planet.terrain}</div>
                </div>
                <div className="flex gap-5 justify-between mb-3">
                    <div>Surface Water:</div>
                    <div className="font-bold">{planet.surface_water}</div>
                </div>
                <div className="flex gap-5 justify-between mb-3">
                    <div>Population:</div>
                    <div className="font-bold">{planet.population}</div>
                </div>
            </div>
            {/* Modal logic */}
            {showModal && <FormPlanet planet={planet} onClose={handleCloseModal} />}
        </>
    )
}

export default CardPlanet
