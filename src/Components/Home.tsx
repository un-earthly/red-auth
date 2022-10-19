import React, { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        // const locat = prompt("Where Are You From?")
        // setLocation(locat)
    }, [])
    const imgs = [
        "https://images.unsplash.com/photo-1666112835145-d79fc3f2e008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1666112835145-d79fc3f2e008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1666112835145-d79fc3f2e008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1666107730458-57486ae22a4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1666107730458-57486ae22a4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1666107730458-57486ae22a4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1666107730458-57486ae22a4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1666107730458-57486ae22a4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1666107730458-57486ae22a4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1666107730458-57486ae22a4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1666107730458-57486ae22a4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    ]
    return (
        <div className='flex justify-center uppercase flex-col' >
            <div className='my-10 flex items-center justify-center md:text-3xl text-xl'>
                Your Location : dhaka
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {imgs.map(url => <img src={url} alt="imgs" />)}
            </div>
        </div>
    )
}
