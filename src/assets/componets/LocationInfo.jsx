import React from 'react'

const LocationInfo = ({ location }) => {


    return (
        <article className='info'>
            <h2 className='info__name'>{location?.name}</h2>
            <div className='info__div'>
                <ul className='info__descriptions'>
                    <li className='info__description'><span>{location?.type}</span></li>
                    <li className='info__description'><span>{location?.dimension}</span></li>
                    <li className='info__description'><span>{location?.residents.length}</span></li>
                </ul>
            </div>
        </article>
    )
}

export default LocationInfo