import React, { useState } from 'react';
import BlenditSVG from '../assets/icons/BlenditSVG';
import ButtonLink from './ButtonLink';

function Nav() {

    const [navActive, setNavActive] = useState(false);
    const navClick = () => {
        setNavActive(!navActive);
    };

    return (
        <nav className="
        w-full max-w-[1920px] p-4 top-0 mt-0
        fixed z-50 left-1/2 -translate-x-1/2
        bg-grey-100
        ">
            <div className="
            flex flex-row justify-between items-center
            ">
                <a href="/" className="hover:scale-90 transition-all duration-300">
                    <BlenditSVG
                        color="#D31A74"
                    />
                </a>
                <div className="
                flex flex-row justify-between items-center
                gap-4
                ">
                    <ButtonLink
                        text="Order Ahead"
                        color="text-white"
                        bg="bg-pink-500"
                        border="border-pink-500"
                        link="builder"
                        hover="hover:scale-95"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Nav;