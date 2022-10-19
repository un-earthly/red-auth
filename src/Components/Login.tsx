import React from 'react'

export default function Login() {
  return (
    <div className="relative flex justify-center h-full overflow-hidden ">
      <div className="w-full p-6 m-auto  rounded-md shadow-xl bg-base-300 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-500 underline uppercase decoration-wavy">
          Login
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label className='space-y-3'>
              <span>Your name</span>
              <input
                type="text"
                name="name"
                className=" block input w-full"

                placeholder="John cooks"
              />
            </label>
          </div>
          <div className="mb-2">
            <label className='space-y-3'>
              <span>Email address</span>
              <input
                name="email"
                type="email"
                className=" block input w-full"
                placeholder="john.cooks@example.com"
                required
              />
            </label>
          </div>


          <div className="mb-6">
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
