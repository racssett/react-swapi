import { useState, useEffect } from "react";
import { getDetails } from "../../services/api-calls";
import { Link, useLocation } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return ( 
    <>
      <div class="detail-container">
        <h3>Starship:</h3>
        {starshipDetails.name ?
        <>
          <div class="info-container">
            <h3>NAME: <p>{starshipDetails.name}</p> </h3>
            <h3>MODEL: <p>{starshipDetails.model}</p></h3>
            <Link to='/'>RETURN</Link>
          </div>
        </>
        :
        <p>This is not the startship you're looking for</p>
        }
      </div>
    </>
  );
}

export default StarshipDetails;