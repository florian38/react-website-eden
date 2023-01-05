import { useEffect, useState } from "react";
import React from 'react'
import './Title.css'

export default function Title(props) {

    const [title, setTitle] = useState("")

    useEffect(() => {
        setTitle(props.title)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

 
    return (
        <h1 className='title'>{title}</h1>
    )
}
