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
        w-full p-4 top-0 mt-0
        fixed z-50
        bg-grey-100
        ">
            <div className="
            flex flex-row justify-between items-center
            ">
                <a href="/">
                    <BlenditSVG
                        color="#D31A74"
                    />
                </a>
                <div className="
                flex flex-row justify-between items-center
                gap-4
                ">
                    <ButtonLink
                        text="Order ahead"
                        color="text-white"
                        bg="bg-pink-500"
                        border="border-pink-500"
                        link="builder"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Nav;