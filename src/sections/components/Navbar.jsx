import React from 'react'


const Navbar = () => {
    return (
        <>
            <nav className="bg-transparent navbar">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                            <div className="flex flex-shrink-0 items-center">
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#hero" className=" active:underline decoration-fuchsia-500 underline-offset-4 decoration-2 text-white hover:underline rounded-md px-3 py-2 text-sm   2xl:text-3xl font-medium" aria-current="page">Home</a>
                                    <a href="#about" className="active:underline decoration-fuchsia-500 underline-offset-4 decoration-2 cursor-pointer hover:underline hover:text-white rounded-md px-3 py-2 text-sm   2xl:text-3xl font-medium">About</a>
                                    <a href="#projects" className="active:underline decoration-fuchsia-500 underline-offset-4 decoration-2 cursor-pointer hover:underline hover:text-white rounded-md px-3 py-2 text-sm   2xl:text-3xl font-medium">Projects</a>
                                    <a href="#contact" className="active:underline decoration-fuchsia-500 underline-offset-4 decoration-2 cursor-pointer hover:underline hover:text-white rounded-md px-3 py-2 text-sm   2xl:text-3xl font-medium">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar