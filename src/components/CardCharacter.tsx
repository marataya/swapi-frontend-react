import {useState} from "react"
import FormCharacter from "./FormCharacter.tsx"
import {useNavigate} from "react-router-dom";


const CardCharacter = ({character}) => {
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
                 className="flex flex-col mx-auto min-w-80 max-w-802 align-baseline bg-white rounded-xl m-3 p-5 border-amber-950 radius shadow-2xl">
                <div className="flex gap-5 justify-between">
                    <div>Name:</div>
                    <div className="font-bold">{character.name}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Height:</div>
                    <div className="font-bold">{character.height}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Mass:</div>
                    <div className="font-bold">{character.mass}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Hair Color:</div>
                    <div className="font-bold">{character.hair_color}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Skin Color:</div>
                    <div className="font-bold">{character.skin_color}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Eye Color:</div>
                    <div className="font-bold">{character.eye_color}</div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div>Birth Year:</div>
                    <div className="font-bold">{character.birth_year}</div>
                </div>
                <div className="flex gap-5 justify-between mb-3">
                    <div>Gender:</div>
                    <div className="font-bold">{character.gender}</div>
                </div>
            </div>


            {/* Modal logic */}
            {showModal && <FormCharacter character={character} onClose={handleCloseModal} />}
        </>
    )
}


export default CardCharacter;
