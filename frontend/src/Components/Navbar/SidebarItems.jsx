import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

function SidebarItems({ title, section, active }) {
    return (
        <Link to={section} >
            <div className={`p-2 rounded-lg text-custom-secondary duration-500 hover:bg-gray-500 hover:bg-opacity-20 ${(active) ? `bg-gray-500 bg-opacity-20` : ``}`}>
                {title}
            </div>
        </Link>
    )
}

export default SidebarItems