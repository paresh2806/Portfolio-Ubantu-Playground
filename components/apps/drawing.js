import React from 'react'
export default function Drawing() {
    console.log("hello")
    return (
        <iframe src="https://my-drawing.vercel.app" frameBorder="0" title="Drawing" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayDrawingApp = () => {
    <Drawing> </Drawing>
}