import axios from "axios";
import { useEffect, useState } from "react";

function AllDestinations() {
  const [destinations, setdestinations] = useState([]);
  useEffect(() => {
    async function getAllDestinations() {
      try {
        const response = await axios.get("http://localhost:5005/destinations");
        setdestinations(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllDestinations();
  }, []);

  return (
    <div>
      <h1>All destinations</h1>
      {destinations.map((eachDestination) => {
        return (
          <div className="card" key={eachDestination.id}>
            <h1>{eachDestination.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default AllDestinations;
