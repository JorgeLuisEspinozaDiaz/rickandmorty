import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './assets/componets/ErrorFetch'
import LocationInfo from './assets/componets/LocationInfo'
import ResidentCard from './assets/componets/ResidentCard'


function App() {

  const [location, setLocation] = useState()
  const [locationId, setLocationId] = useState(1)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // las ubicaciones van de 1 a la 126
    //Math.ceil redondea hacia arriba
    //Math.floor redondea hacia abajo
    let URL
    if (locationId) {
      URL = `https://rickandmortyapi.com/api/location/${locationId}`
    } else {
      const randonIdLocation = Math.floor(Math.random() * 126) + 1
      URL = `https://rickandmortyapi.com/api/location/${randonIdLocation}`

    }
    axios.get(URL)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        setHasError(true)
        console.log(err)
      })

  }, [locationId])



  const handleClick = (e) => {
    e.preventDefault()
    setLocationId(e.target.inputSearch.value)
  }


  return (

    <div className="App">
      <div className='header'>
      </div>
      <div>
        <div className='title'>
          <h1 className='title__text'>Rick and Morty</h1>
        </div>
        <form className='header__form' onSubmit={handleClick}>
          {/* <div className='container__form'> */}
          <input className='header__input' id="inputSearch" type="number" placeholder='type a location id 1 and 126' />
          <button className='header__button'>Search</button>
          {/* </div> */}

        </form>
      </div >
      {
        hasError ?
          <ErrorFetch />
          :
          <>
            <LocationInfo location={location} />
            <div className='residents-container'>
              {
                location?.residents.map(url => (
                  <ResidentCard key={url} url={url} />
                ))
              }
            </div>
          </>
      }

    </div >

  )
}

export default App
