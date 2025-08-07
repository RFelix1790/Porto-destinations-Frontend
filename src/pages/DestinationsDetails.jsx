import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function DestinationsDetails() {
  const { destinationId } = useParams();
  const [destination, setDestination] = useState({});
  const [update, setupdate] = useState();
  const [updatedDestination, setUpdatedDestination] = useState();

  useEffect(() => {
    async function getDestination() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_JSONSERVER}/destinations/${destinationId}`
        );
        setDestination(response.data);
        setUpdatedDestination(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDestination();
  }, [destinationId]);

  const handleChanges = (e) => {
    const { name, value, type, checked } = e.target;
    setUpdatedDestination((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const rep = await axios.put(
        `${import.meta.env.VITE_JSONSERVER}/destinations/${destinationId}`,
        updatedDestination
      );
      setDestination(rep.data);
      setupdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {update ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={updatedDestination.name}
              onChange={handleChanges}
            />
          </label>

          <label>
            Category:
            <select
              name="category"
              value={updatedDestination.category}
              onChange={handleChanges}
            >
              <option value="landmark">Landmark</option>
              <option value="nature">Nature</option>
              <option value="shopping">Shopping</option>
              <option value="sports">Sports</option>
            </select>
          </label>

          <label>
            Description:
            <input
              name="description"
              type="text"
              value={updatedDestination.description}
              onChange={handleChanges}
            />
          </label>

          <label>
            Location:
            <input
              name="location"
              type="text"
              value={updatedDestination.location}
              onChange={handleChanges}
            />
          </label>
          <label>
            Image
            <input
              name="image"
              type="text"
              value={updatedDestination.image}
              onChange={handleChanges}
            />
          </label>

          <label>
            Open on weekends
            <input
              name="openOnWeekends"
              type="checkbox"
              checked={updatedDestination.openOnWeekends}
              onChange={handleChanges}
            />
          </label>
          <label>
            Rating:
            <input
              name="rating"
              type="number"
              value={updatedDestination.rating}
              min="0"
              max="5"
              step="1"
              onChange={handleChanges}
            />
          </label>
          <button type="submit">Confirm</button>
        </form>
      ) : (
        <div>
          {destination ? (
            <>
              <h2>{destination.name}</h2>
              <img src={destination.image} alt={destination.name} />
              <p>{destination.description}</p>
              <p>Location:{destination.location}</p>
              <p>Category:{destination.category}</p>
              <p>Rating:{destination.rating}</p>
              <p>OpenOnWeekends:{destination.openOnWeekends ? "yes" : "no"}</p>
            </>
          ) : (
            <p>Loading</p>
          )}
          <Link to="/all-Destinations">Back</Link>
        </div>
      )}
      <button onClick={() => setupdate(!update)}>
        {update ? "cancel" : "Update"}
      </button>
    </div>
  );
}
export default DestinationsDetails;
