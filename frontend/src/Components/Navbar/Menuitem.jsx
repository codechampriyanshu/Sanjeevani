import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Menuitem({ title, section, active }) {
    return (
        <div>
            <li className="hidden md:block">
                <div className="p-2 px-4 rounded-full">
                    <p className={`border-b-2 duration-500 hover:border-red-400 ${(!active) ? `border-transparent` : `border-red-400`} border-solid`} >
                        <Link to={section}>{title}</Link>
                    </p>
                </div>
            </li>
        </div>
    )
}

export default Menuitem