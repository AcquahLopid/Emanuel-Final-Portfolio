import React from "react";
import Navigation from "./Navigation"

function Header(props){
    const {
        setTab,
        getTab
    } = props;
    return (
        <div>
            <header className="flex-row">
                <h1>Emanuel's Portfolio</h1>
                <Navigation
                setTab={setTab}
                getTab={getTab}
                >
                </Navigation>
            </header>
        </div>
    );
}

export default Header;