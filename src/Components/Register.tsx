import React from 'react'

export default function Register() {
    return (
        <div className="relative flex justify-center h-full overflow-hidden ">
            <div className="w-full p-6 m-auto  rounded-md shadow-xl bg-base-300 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-500 underline uppercase decoration-wavy">
                    Register
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
                    <div className="mb-2">
                        <label className='space-y-3'>
                            <span>Password</span>
                            <input
                                name="email"
                                type="password"
                                className=" block input w-full"
                                placeholder="Password Here"
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-2">
                        <label className='space-y-3'>
                            <span>Confirm Password</span>
                            <input
                                name="email"
                                type="password"
                                className=" block input w-full"
                                placeholder="Confirm Your Password"

                                required
                            />
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
                    <div></div>
                </form>
            </div>
        </div>
    )
}
