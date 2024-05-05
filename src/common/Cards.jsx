import React from 'react'

const Cards = () => {
    return (
        <>
        <div className="inner-glass-effect flex w-3/4 md:w-3/12 h-1/2 flex-col  rounded-xl bg-white bg-clip-border shadow-lg">

            <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                    <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal  antialiased">
                        Wooden House, Florida
                    </h5>
                </div>
                <p className="block font-sans text-base font-light leading-relaxed antialiased">
                This is a full stack application built with Next.js for the frontend, MongoDB for the database, and NextAuth for Google authentication. It allows users to sign in with their Google account, create 
                </p>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                    <span
                        data-tooltip-target="money"
                        className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-5"
                        >
                            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                            <path
                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                            ></path>
                            <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="p-6 pt-3">
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