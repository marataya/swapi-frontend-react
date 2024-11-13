import {FieldValues, useForm} from "react-hook-form"
import {useAuth} from "../services/auth/AuthContext.tsx"
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"

function LoginScreen() {
    const {
        login,
        isAuthenticated,
        error: loginError
    } = useAuth()

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues
    } = useForm({
        email: "",
        password: "",
        confirmPassword: ""
    })

    useEffect(
        function () {
            if (isAuthenticated)
                navigate("/app/characters", {
                    replace: true,
                })
        },
        [isAuthenticated, navigate],
    )

    const onSubmit = async (data: FieldValues) => {
        console.log(data)
        const {email, password} = data
        if (email && password) login(email, password)
        reset()
    }

    return (
        <>
            <div className="container mx-auto max-w-md">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
                    <input
                        {...register("email",
                            {
                                required: "Email is required",

                            })}
                        type="email"
                        required
                        placeholder="Email"
                        className="px-4 py-2 rounded border-2"/>
                    <p className="text-red-700 text-xs font-bold">{errors.email?.message?.toString()}</p>
                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: {value: 4, message: "Password must be at least 4"}
                        })}
                        type="password"
                        required
                        placeholder="Password"
                        className="px-4 py-2 rounded border-2"/>
                    <p className="text-red-700 text-xs font-bold">{errors.password?.message?.toString()}</p>
                    <button disabled={isSubmitting} type="submit" className="bg-blue-500 text-white py-2 rounded">Submit</button>
                </form>
            </div>
        </>
    )
}

export default LoginScreen