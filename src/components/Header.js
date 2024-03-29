import React from "react"

function Header(props) {
    return (
        <div>
            <header className="header">
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </header>
        </div>
    )
}

export default Header
