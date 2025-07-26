import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllDestinations() {
  const [destinations, setdestinations] = useState([]);
  useEffect(() => {
    async function getAllDestinations() {
      try {
        const response = await axios.get("http://localhost:5005/destinations");
        setdestinations(response.data.reverse());
      } catch (error) {
        console.log(error);
      }
    }
    getAllDestinations();
  }, []);

  async function handleDelete(destinationId) {
    try {
      const response = await axios.delete(
        `http://localhost:5005/destinations/${destinationId}`
      );
      console.log(response.data);
      const newDestinationArray = destinations.filter(
        (destination) => destination.id !== destinationId
      );
      setdestinations(newDestinationArray);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>All destinations</h1>
      {destinations.map((eachDestination) => {
        return (
          <div key={eachDestination.id}>
            <Link
              to={`/destination/${eachDestination.id}`}
              className="cardLink"
            >
              <div className="card">
                <h1>{eachDestination.name}</h1>
              </div>
            </Link>
            <button onClick={() => handleDelete(eachDestination.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default AllDestinations;
