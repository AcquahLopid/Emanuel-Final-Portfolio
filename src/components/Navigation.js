import React from "react";

function Navigation(props){
    const{
        setTab,
        getTab
    } = props;
    return (
        <nav>
            <li>

                <a
                href = "#about"
                onClick={() => getTab('About')}
                className={setTab === 'About' ? 'nav-link active' : 'nav-link'}
                >
                 About Me
                </a>
            </li>

        </nav>
    )
}