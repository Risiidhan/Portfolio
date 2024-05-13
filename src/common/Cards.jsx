import React, { memo } from 'react';
import { useEffect, useRef } from 'react';
import { FaGithub, FaLink, FaStar } from "react-icons/fa"
import { TbGitFork } from "react-icons/tb";


const Cards = ({ prop }) => {

    const cardRef = useRef(null);

    const renderIcons = () => {
        let lang = prop.language.toLowerCase();
        lang === 'html' ? (lang = 'html5') : (lang = lang);
        lang === 'c#' ? (lang = 'csharp') : (lang = lang);

        let description = prop?.description ?? '';
        let frameworks = description?.split('Framework ')[1]?.split(',') || [lang];

        return frameworks.map((framework) => (
            <img key={framework} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${framework}/${framework}-original.svg`} />
        ));
    };

    // let lang = prop.language.toLowerCase();
    // lang == 'html' ? lang = 'html5' : lang = lang;
    // lang == 'c#' ? lang = 'csharp' : lang = lang;
    // let aboutBreakdown = prop.description?.split('Framework ');
    // let description = aboutBreakdown[0]
    // let frameworks = aboutBreakdown[1]?.split(',') ? aboutBreakdown[1]?.split(',') : aboutBreakdown[1];

    useEffect(() => {
        const setMaxHeight = () => {
            const cards = document.querySelectorAll('.card-container');
            let maxHeight = 0;
            cards.forEach(card => {
                maxHeight = Math.max(maxHeight, card.clientHeight);
            });
            return window.innerWidth >= 768? maxHeight + 2 : maxHeight + 5;
        };

        const applyMaxHeight = () => {
            const maxHeight = setMaxHeight();
            const cards = document.querySelectorAll('.card-container');
            cards.forEach(card => {
                card.style.height = `${maxHeight}px`;
            });
        };
        applyMaxHeight();
    }, []);

    return (
        <>
            <div ref={cardRef} className="inner-glass-effect px-6 py-3 card-container">
                <div className="flex items-center justify-between py-2">
                    <div className='w-6 h-6 2xl:w-9 2xl:h-9 flex gap-2'>
                    {renderIcons()}
                    </div>
                    <div className='flex justify-end items-center gap-1 w-24 h-px 2xl:w-32'>
                        <FaStar /> {prop.stargazers_count}
                        <TbGitFork /> {prop.forks_count}
                    </div>
                </div>

                <h5 className="block font-sans text-xl 2xl:text-4xl font-medium  ">
                    {prop.name}
                </h5>
                <p className="text-sm 2xl:text-3xl pt-3 md:pb-6 block font-sans text-base font-light leading-relaxed antialiased">
                    {prop.description}
                </p>
                <div className="flex items-center gap-2 absolute bottom-3 mb-4">
                    <button
                        className="flex justify-center items-center border-2 text-xs 2xl:text-lg px-3 py-1 border-amber-300"
                        type="button"
                        data-ripple-light="true"
                        onClick={() => window.open(prop.html_url, "_blank")}
                    >
                        <FaGithub className='mr-1' />
                        Source
                    </button>
                    {prop.homepage && (
                        <button
                            className="flex justify-center items-center border-2 text-xs 2xl:text-lg px-3 py-1 border-amber-300"
                            type="button"
                            data-ripple-light="true"
                            onClick={() => window.open(prop.homepage, "_blank")}
                        >
                            <FaLink className='mr-1' />
                            Website
                        </button>
                    )}
                </div>


            </div>
        </>

    )
}

export default memo(Cards);