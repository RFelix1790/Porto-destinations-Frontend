import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MySpinner from "../components/MySpinner";
import SearchBar from "../components/SearchBar";

function AllDestinations() {
  const [destinations, setdestinations] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getAllDestinations() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_JSONSERVER}/destinations`
        );
        setdestinations(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllDestinations();
  }, []);
  if (destinations.length === 0) {
    return <MySpinner />;
  }

  async function handleDelete(destinationId) {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_JSONSERVER}/destinations/${destinationId}`
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
  function filterDestination(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="allDestinations-container">
      <h1 className="title">All destinations</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        filterDestination={filterDestination}
      />
      <div className="destination-grid">
        {destinations
          .filter((oneDestination) => {
            if (
              oneDestination.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return true;
            }
          })
          .map((eachDestination) => {
            return (
              <div key={eachDestination.id} className="all-destinations-card">
                <Link
                  to={`/destination/${eachDestination.id}`}
                  className="all-destinations-cardLink"
                >
                  <img src={eachDestination.image} alt={eachDestination.name} />
                  <h1>{eachDestination.name}</h1>
                </Link>
                <div className="card-button-group">
                  <button
                    onClick={() => handleDelete(eachDestination.id)}
                    className="card-button"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/destination/${eachDestination.id}`}
                    className="card-button"
                  >
                    <button>Info</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AllDestinations;
