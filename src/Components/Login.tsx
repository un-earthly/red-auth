import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import store from '../redux/store';


export default function Login() {
  type FormValues = {
    name: string;
    password: string;
    submit: string;
  };


  type RootState = ReturnType<typeof store.getState>;

  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.authReducer.users[0])


  const { register, handleSubmit, formState: { errors }, setError } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
    (user.username === data.name && user.password === data.password) ? navigate("/") : setError("submit", {
      message: "Credentials dosent match with any users"
    })
  }
  return (
    <div className="relative flex justify-center h-full overflow-hidden ">
      <div className="w-full p-6 m-auto  rounded-md shadow-xl bg-base-300 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-500 underline uppercase decoration-wavy">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mb-2">
            <label className='space-y-3'>
              <span>Username</span>
              <input
                {...register("name", {
                  required: "User name is required",
                })}
                type="text"
                name="name"
                className=" block input w-full"
                placeholder="username"
              />
              <div className='text-red-500'>{errors.name && <p>{errors.name.message}</p>}</div>
            </label>
          </div>

          <div className="mb-2">
            <label className='space-y-3'>
              <span>Password</span>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                name="password"
                type="password"
                className=" block input w-full"
                placeholder="Password Here"
              />
              <div className='text-red-500'>{errors.password && <p>{errors.password.message}</p>}</div>
            </label>
          </div>


          <div className="mb-6">

            <div className='flex align-center justify-between'>
              <div className="text-red-500">{errors.submit?.message}</div>
              <div className="underline"><Link to="/register">Create user</Link></div>
            </div>
            <button
              type="submit"
              className=" block input w-full mt-6"

            >
              Login
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  )
}
