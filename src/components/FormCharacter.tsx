import {useForm} from 'react-hook-form'
import Button from "./Button.tsx"

const FormCharacter = ({character, onClose}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: character
    })

    const onSubmit = data => {
        console.log(data)
        onClose()
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex flex-col justify-center z-1000">
            <div className="w-96 h-96 flex flex-col mx-auto align-baseline bg-white rounded-xl m-3 p-5 radius shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Name:</div>
                        <input className="font-bold" {...register('name', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Height:</div>
                        <input className="font-bold" {...register('height', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div>Mass:</div>
                        <input className="font-bold" {...register('mass', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div>Hair Color:</div>
                        <input className="font-bold" {...register('hair_color', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Skin Color:</div>
                        <input className="font-bold" {...register('skin_color', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Eye Color:</div>
                        <input className="font-bold" {...register('eye_color', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Birth Year:</div>
                        <input className="font-bold" {...register('birth_year', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between mb-3">
                        <div className="underline">Gender:</div>
                        <input className="font-bold" {...register('gender', {required: true})} />
                    </div>
                    <Button bgColor="blue" fontSize="base">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default FormCharacter
