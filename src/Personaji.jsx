import React from 'react'
import { Link } from 'react-router-dom'

const Personaji = () => {
    return (
        <div className="personaji_wrapper">
            <div className='presonaji'>
                <h2>Name</h2>
                <p>Character Info</p>
            </div>
            <Link to={'/facts/1'}>Fact 1</Link>
            <Link to={'/facts/2'}>Fact 2</Link>
            <Link to={'/facts/3'}>Fact 3</Link>
        </div>
    )
}

export default Personaji