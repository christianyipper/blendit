import React, { useState } from 'react';
import BlenditSVG from '../assets/icons/BlenditSVG';
import Button from './Button';

function Nav() {

    const [navActive, setNavActive] = useState(false);
    const navClick = () => {
        setNavActive(!navActive);
    };

    return (
        <section className="
        w-full p-4 top-0 mt-0
        fixed z-50
        bg-grey-100
        ">
            <div className="
            flex flex-row justify-between items-center
            ">
                <BlenditSVG
                    color="#D31A74"
                />
                <div className="
                flex flex-row justify-between items-center
                gap-4
                ">
                    <Button
                        text="Order ahead"
                        color="text-white"
                        bg="bg-pink-500"
                        border="border-pink-500"
                    />
                    <div className="
                    w-12 h-10 
                    relative flex flex-col items-center justify-between
                    ">
                        <div className="w-full h-1 rounded-lg bg-pink-500"/>
                        <div className="w-full h-1 rounded-lg bg-pink-500"/>
                        <div className="w-full h-1 rounded-lg bg-pink-500"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Nav;