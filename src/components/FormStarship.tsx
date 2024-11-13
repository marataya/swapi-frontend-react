import {useForm} from 'react-hook-form'
import Button from "./Button.tsx"

const FormStarship = ({starship, onClose}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: starship
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
                        <div className="underline">Model:</div>
                        <input className="font-bold" {...register('model', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div>Manufacturer:</div>
                        <input className="font-bold" {...register('manufacturer', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div>Cost in Credits</div>
                        <input className="font-bold" {...register('cost_in_credits', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Length:</div>
                        <input className="font-bold" {...register('length', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Max speed in atm.:</div>
                        <input className="font-bold" {...register('max_atmosphering_speed', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Crew:</div>
                        <input className="font-bold" {...register('crew', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Passengers:</div>
                        <input className="font-bold" {...register('passengers', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between mb-3">
                        <div className="underline">Cargo capacity:</div>
                        <input className="font-bold" {...register('cargo_capacity', {required: true})} />
                    </div>
                    <Button bgColor="blue" fontSize="base">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default FormStarship
