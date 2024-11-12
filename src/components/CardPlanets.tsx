import React from 'react';
import {useForm} from 'react-hook-form';
import Button from "./Button.tsx";

const CardPlanets = ({character}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: character
    });

    const onSubmit = data => {
        console.log(data);
        // Handle the form submission logic here
    };

    return (
        <div className="flex flex-col mx-auto align-baseline bg-white rounded-xl m-3 p-5 border-amber-950 radius shadow-2xl">
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
    );
};

export default CardPlanets;
