import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/authSlice';
// import store from '../redux/store';

export default function Register() {
    type FormValues = {
        name: string;
        password: string;
        confirmPass: string;
    };
    // type RootState = ReturnType<typeof store.getState>;

    const dispatch = useDispatch()
    // const user = useSelector((state: RootState) => state.authReducer.users);
    // console.log(user)
    const navigate = useNavigate()
    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        const confPassVal = data.password === data.confirmPass
        !confPassVal && setError("confirmPass", { message: "passwords dosent match" })


        dispatch(addUser({ username: data.name, password: data.password }))
        navigate("/login")



    }
    return (
        <div className="relative flex justify-center h-full my-10">
            <div className="w-full p-6 m-auto  rounded-md shadow-xl bg-base-300 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-500 underline uppercase decoration-wavy">
                    Register
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <div className="mb-2">
                        <label className='space-y-3'>
                            <div className='capitalize'>user name</div>
                            <input
                                {...register("name", {
                                    required: "Name is required",
                                })}
                                type="text"
                                name="name"
                                className=" block input w-full"

                                placeholder="username"
                            />
                            <div className='text-red-500 capitalize'>{errors.name && <p>{errors.name.message}</p>}</div>
                        </label>
                    </div>
                    <div className="mb-2">

                    </div>
                    <div className="mb-2">
                        <label className='space-y-3'>
                            <div className='capitalize'>Password</div>
                            <input
                                {...register("password", {
                                    required: "a password must be provided",
                                    minLength: {
                                        value: 8,
                                        message: "Password should be at least 8 characters"
                                    }
                                })}
                                name="password"
                                type="password"
                                className=" block input w-full"
                                placeholder="Password Here"
                            />
                            <div className='text-red-500 capitalize'>{errors.password && <p>{errors.password.message}</p>}</div>

                        </label>
                    </div>
                    <div className="mb-2">
                        <label className='space-y-3'>
                            <span>Confirm Password</span>
                            <input
                                {...register("confirmPass", {
                                    required: "confirm password must be provided"
                                })}
                                name="confirmPass"
                                type="password"
                                className=" block input w-full"
                                placeholder="Confirm Your Password"
                            />
                            <div className='text-red-500 capitalize'>{errors.confirmPass && <p>{errors.confirmPass.message}</p>}</div>

                        </label>
                    </div>


                    <div className="mb-6">
                        <button
                            type="submit"
                            className=" block input w-full mt-6"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
