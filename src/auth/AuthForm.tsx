import {FieldValues, useForm} from "react-hook-form";

function AuthForm() {
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

    const onSubmit = async (data: FieldValues) => {
        console.log(data)
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
                    <input
                        {...register("confirmPassword", {
                            required: "Password is required",
                            validate: (value) => value === getValues("password") || "Passwords must match",
                            minLength: {value: 4, message: "Password must be at least 4"}
                        })}
                        type="password"
                        required
                        placeholder="Confirm password"
                        className="px-4 py-2 rounded border-2"/>
                    <p className="text-red-700 text-xs font-bold">{errors.confirmPassword?.message?.toString()}</p>
                    <button disabled={isSubmitting} type="submit" className="bg-blue-500 text-white py-2 rounded">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AuthForm;