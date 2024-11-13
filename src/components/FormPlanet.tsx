import React from 'react'
import {useForm} from 'react-hook-form'
import Button from "./Button.tsx"

const FormPlanet = ({planet, onClose}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: planet
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
                        <div className="underline">Rotation Period:</div>
                        <input className="font-bold" {...register('rotation_period', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div>Orbital Period:</div>
                        <input className="font-bold" {...register('orbital_period', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div>Diameter:</div>
                        <input className="font-bold" {...register('diameter', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Climate:</div>
                        <input className="font-bold" {...register('climate', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Gravity:</div>
                        <input className="font-bold" {...register('gravity', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between">
                        <div className="underline">Terrain:</div>
                        <input className="font-bold" {...register('terrain', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between mb-3">
                        <div className="underline">Surface Water:</div>
                        <input className="font-bold" {...register('surface_water', {required: true})} />
                    </div>
                    <div className="flex gap-5 justify-between mb-3">
                        <div className="underline">Population:</div>
                        <input className="font-bold" {...register('population', {required: true})} />
                    </div>
                    <Button bgColor="blue" fontSize="base">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default FormPlanet
