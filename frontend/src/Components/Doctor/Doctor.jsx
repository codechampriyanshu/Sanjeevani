import React from 'react'

export default function Doctor() {
    return (
        <div className="relative w-screen h-screen">
        {/*it is just a collection of gifs for now*/}
            <iframe src="https://giphy.com/embed/KBzIX7UKtX2otwQFaf" className="w-full" allowFullScreen></iframe>
            <iframe title="iframe" src="https://giphy.com/embed/016HhqEzgc83Tw6cpD" className="absolute w-full h-full" allowFullScreen></iframe>
        </div>
    )
}
