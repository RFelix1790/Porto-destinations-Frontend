import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DestinationsDetails() {
  const { destinationId } = useParams();
  const [destination, setDestination] = useState({});

  useEffect(() => {
    async function getDestination() {
      try {
        const response = await axios.get(
          `http://localhost:5005/destinations/${destinationId}`
        );
        setDestination(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDestination();
  }, [destinationId]);

  return (
    <div>
      {destination ? (
        <>
          <h2>{destination.name}</h2> <p>{destination.description}</p>
        </>
      ) : (
        <p>Loanding</p>
      )}
    </div>
  );
}
export default DestinationsDetails;
