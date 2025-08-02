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
        const response = await axios.get("http://localhost:5005/destinations");
        setdestinations(response.data.reverse());
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
  function filterDestination(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="allDestinations-container">
      <SearchBar
        search={search}
        setSearch={setSearch}
        filterDestination={filterDestination}
      />
      <h1 className="title">All destinations</h1>
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
            <div key={eachDestination.id}>
              <Link
                to={`/destination/${eachDestination.id}`}
                className="cardLink"
              >
                <div className="card">
                  <img src={eachDestination.img} alt={eachDestination.name} />
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
