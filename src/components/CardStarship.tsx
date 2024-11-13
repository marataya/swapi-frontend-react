import {useState} from "react";
import FormStarship from "./FormStarship.tsx";

const CardStarship = ({starship}) => {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <div onClick={handleClick}
                 className="flex flex-col mx-auto min-w-80 max-w-80 align-baseline bg-white rounded-xl m-3 p-5 border-amber-950 radius shadow-2xl">
                <div className="flex gap-5 justify-between">
                    <div>Name:</div>
                    <div className="font-bold">{starship.name}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Model:</div>
                    <div className="font-bold">{starship.model}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Manufacturer:</div>
                    <p className="font-bold">{starship.manufacturer}</p>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Cost in Credits</div>
                    <div className="font-bold">{starship.cost_in_credits}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Length:</div>
                    <div className="font-bold">{starship.length}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Max speed in atm.:</div>
                    <div className="font-bold">{starship.max_atmosphering_speed}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Crew:</div>
                    <div className="font-bold">{starship.crew}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Passengers:</div>
                    <div className="font-bold">{starship.passengers}</div>
                </div>
                <div className="flex gap-5 justify-between mb-3">
                    <div>Cargo capacity:</div>
                    <div className="font-bold">{starship.cargo_capacity}</div>
                </div>
            </div>
            {/* Modal logic */}
            {showModal && <FormStarship starship={starship} onClose={handleCloseModal} />}
        </>
    )
}

export default CardStarship
