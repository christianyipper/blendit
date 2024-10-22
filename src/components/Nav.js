import React, { useState } from 'react';

function Nav() {

    const [navActive, setNavActive] = useState(false);
    const navClick = () => {
        setNavActive(!navActive);
    };

    return (
        <section className="w-full">

        </section>
    );
}

export default Nav;