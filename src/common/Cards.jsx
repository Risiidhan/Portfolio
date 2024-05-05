import React from 'react'

const Cards = () => {
    return (
        <>
            <div className="inner-glass-effect px-6 py-3">
                <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal  antialiased">
                    Wooden House, Florida
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed antialiased">
                    This is a full stack application built with Next.js for the frontend, MongoDB for the database, and NextAuth for Google authentication. It allows users to sign in with their Google account, create
                </p>
                <div className="pt-3">
                    <button
                        className="block w-full select-none rounded-lg bg-orange-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        VIEW
                    </button>
                </div>
            </div>
        </>

    )
}

export default Cards