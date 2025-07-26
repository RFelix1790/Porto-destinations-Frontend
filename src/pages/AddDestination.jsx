import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddDestination() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [openOnWeekends, setOpenOnWeekends] = useState(false);
  const [speciality, setSpeciality] = useState("");
  const [rating, setRating] = useState("");
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function handleAddNewDestination(e) {
    e.preventDefault();
    setIsLoading(true);
    const newDestination = {
      name,
      type,
      description,
      location,
      openOnWeekends,
      speciality,
      rating,
    };
    try {
      const response = await axios.post(
        "http://localhost:5005/destinations",
        newDestination
      );
      console.log("Destination added:", response.data);
      setName("");
      setType("");
      setDescription("");
      setLocation("");
      setOpenOnWeekends(false);
      setSpeciality("");
      setRating("");
      nav("/all-destinations");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const isFormValid =
    name.trim() !== "" &&
    type.trim() !== "" &&
    description.trim() !== "" &&
    location.trim() !== "" &&
    speciality.trim() !== "" &&
    rating.trim() !== "";

  return (
    <div>
      <form onSubmit={handleAddNewDestination}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Type:
          <input
            name="type"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>

        <label>
          Description:
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Location:
          <input
            name="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label>
          Open on weekends
          <input
            name="OpenOnWeekends"
            type="checkbox"
            checked={openOnWeekends}
            onChange={(e) => setOpenOnWeekends(e.target.checked)}
          />
        </label>

        <label>
          Speciality:
          <input
            name="speciality"
            type="text"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
          />
        </label>
        <label>
          Rating:
          <input
            name="rating"
            type="number"
            value={rating}
            min="0"
            max="5"
            step="1"
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <button type="submit" disabled={!isFormValid || isLoading}>
          {isLoading ? "Adding..." : "Add Destination"}
        </button>
      </form>
    </div>
  );
}

export default AddDestination;
